import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

async function main() {
  const res = await fetch('http://localhost:9222/json');
  const tabs = await res.json();
  const pageTab = tabs.find((t) => t.type === 'page' && t.url.includes('3000'));
  if (!pageTab) {
    console.error('No page tab found!');
    process.exit(1);
  }

  const ws = new WebSocket(pageTab.webSocketDebuggerUrl);

  let idCounter = 1;
  const pending = new Map();

  function send(method, params = {}) {
    return new Promise((resolve, reject) => {
      const id = idCounter++;
      pending.set(id, { resolve, reject });
      ws.send(JSON.stringify({ id, method, params }));
    });
  }

  ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    if (data.id && pending.has(data.id)) {
      const { resolve, reject } = pending.get(data.id);
      pending.delete(data.id);
      if (data.error) reject(data.error);
      else resolve(data.result);
    }
  };

  await new Promise((resolve) => {
    ws.onopen = resolve;
  });

  console.log('Connected to Chrome DevTools Protocol');

  // Enable Page & Runtime & DOM
  await send('Page.enable');
  await send('Runtime.enable');
  await send('DOM.enable');

  const outputDir = join(process.cwd(), 'public', 'qa_captures');
  mkdirSync(outputDir, { recursive: true });

  // Helper to set viewport
  async function setViewport(width, height) {
    await send('Emulation.setDeviceMetricsOverride', {
      width,
      height,
      deviceScaleFactor: 1,
      mobile: width < 768,
    });
  }

  // Helper to evaluate script
  async function evaluate(expression) {
    const res = await send('Runtime.evaluate', {
      expression,
      returnByValue: true,
      awaitPromise: true,
    });
    return res.result?.value;
  }

  // Helper to capture screenshot
  async function capture(filename) {
    const res = await send('Page.captureScreenshot', { format: 'png' });
    const buffer = Buffer.from(res.data, 'base64');
    const filepath = join(outputDir, filename);
    writeFileSync(filepath, buffer);
    console.log(`Saved screenshot: ${filename} (${buffer.length} bytes)`);
  }

  // 1. First test Desktop 1440x900
  console.log('--- Capturing 1440px Desktop Viewports ---');
  await setViewport(1440, 900);
  await new Promise((r) => setTimeout(r, 1000));

  const sections = [
    { name: '01_hero', selector: '#overview' },
    { name: '02_rooted', selector: '#rooted' },
    { name: '03_architecture', selector: '#architecture' },
    { name: '04_residences', selector: '#residences' },
    { name: '05_terraces', selector: '#terraces' },
    { name: '06_lifestyle', selector: '#lifestyle' },
    { name: '07_amenities', selector: '#amenities' },
    { name: '08_masterplan', selector: '#masterplan' },
    { name: '09_location', selector: '#location' },
    { name: '10_specifications', selector: '#specifications' },
    { name: '11_gallery', selector: '#gallery' },
    { name: '12_private_viewing', selector: '#private-viewing' },
    { name: '13_footer', selector: 'footer' },
  ];

  for (const s of sections) {
    await evaluate(`(() => {
      const el = document.querySelector('${s.selector}');
      if (el) {
        el.scrollIntoView({ behavior: 'instant', block: 'start' });
      }
    })()`);
    await new Promise((r) => setTimeout(r, 1200));
    await capture(`1440_${s.name}.png`);
  }

  // 2. Test Mobile 390x844
  console.log('--- Capturing 390px Mobile Viewports ---');
  await setViewport(390, 844);
  await new Promise((r) => setTimeout(r, 1000));

  for (const s of sections) {
    await evaluate(`(() => {
      const el = document.querySelector('${s.selector}');
      if (el) {
        el.scrollIntoView({ behavior: 'instant', block: 'start' });
      }
    })()`);
    await new Promise((r) => setTimeout(r, 1000));
    await capture(`390_${s.name}.png`);
  }

  // 3. Test Tablet 768x1024
  console.log('--- Capturing 768px Tablet Viewports ---');
  await setViewport(768, 1024);
  await new Promise((r) => setTimeout(r, 1000));

  await evaluate(`(() => {
    const el = document.querySelector('#overview');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
  })()`);
  await new Promise((r) => setTimeout(r, 800));
  await capture(`768_hero.png`);

  await evaluate(`(() => {
    const el = document.querySelector('#residences');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
  })()`);
  await new Promise((r) => setTimeout(r, 800));
  await capture(`768_residences.png`);

  // 4. Test Ultrawide 1920x1080
  console.log('--- Capturing 1920px Ultrawide Viewports ---');
  await setViewport(1920, 1080);
  await new Promise((r) => setTimeout(r, 1000));

  await evaluate(`(() => {
    const el = document.querySelector('#overview');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
  })()`);
  await new Promise((r) => setTimeout(r, 800));
  await capture(`1920_hero.png`);

  await evaluate(`(() => {
    const el = document.querySelector('#architecture');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
  })()`);
  await new Promise((r) => setTimeout(r, 800));
  await capture(`1920_architecture.png`);

  ws.close();
  console.log('Visual QA Captures Completed Successfully!');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
