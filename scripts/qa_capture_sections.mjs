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

  // Reload to ensure freshest bundle
  await send('Page.reload');
  await new Promise((r) => setTimeout(r, 2000));

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

  const sections = [
    { name: '01_hero', selector: '#overview' },
    { name: '02_vision', selector: '#rooted' },
    { name: '03_architecture', selector: '#architecture' },
    { name: '04_residences', selector: '#residences' },
    { name: '05_lifestyle', selector: '#lifestyle' },
    { name: '06_location', selector: '#location' },
    { name: '07_enquiry', selector: '#enquiry' },
    { name: '08_footer', selector: 'footer' },
  ];

  // 1. Desktop 1440x900
  console.log('--- Capturing 1440px Desktop Viewports ---');
  await setViewport(1440, 900);
  await new Promise((r) => setTimeout(r, 1000));

  for (const s of sections) {
    await evaluate(`(() => {
      const el = document.querySelector('${s.selector}');
      if (el) {
        const navHeight = 80;
        const y = el.getBoundingClientRect().top + window.pageYOffset - navHeight;
        window.scrollTo({ top: Math.max(0, y), behavior: 'instant' });
      }
    })()`);
    await new Promise((r) => setTimeout(r, 800));
    await capture(`1440_${s.name}.png`);
  }

  // 2. Mobile 390x844
  console.log('--- Capturing 390px Mobile Viewports ---');
  await setViewport(390, 844);
  await new Promise((r) => setTimeout(r, 1000));

  for (const s of sections) {
    await evaluate(`(() => {
      const el = document.querySelector('${s.selector}');
      if (el) {
        const navHeight = 80;
        const y = el.getBoundingClientRect().top + window.pageYOffset - navHeight;
        window.scrollTo({ top: Math.max(0, y), behavior: 'instant' });
      }
    })()`);
    await new Promise((r) => setTimeout(r, 800));
    await capture(`390_${s.name}.png`);
  }

  // 3. Tablet 768x1024
  console.log('--- Capturing 768px Tablet Viewports ---');
  await setViewport(768, 1024);
  await new Promise((r) => setTimeout(r, 1000));

  for (const s of [sections[0], sections[2], sections[3], sections[5]]) {
    await evaluate(`(() => {
      const el = document.querySelector('${s.selector}');
      if (el) {
        const navHeight = 80;
        const y = el.getBoundingClientRect().top + window.pageYOffset - navHeight;
        window.scrollTo({ top: Math.max(0, y), behavior: 'instant' });
      }
    })()`);
    await new Promise((r) => setTimeout(r, 800));
    await capture(`768_${s.name}.png`);
  }

  ws.close();
  console.log('Refined Visual QA Captures Completed!');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
