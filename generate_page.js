const fs = require('fs');
const html = fs.readFileSync('test.html', 'utf-8');
const bodyStartIndex = html.indexOf('<body>') + 6;
const bodyEndIndex = html.indexOf('</body>');
const body = html.substring(bodyStartIndex, bodyEndIndex).replace('<script src="barber.js"></script>', '');

const pageContent = `
'use client';
import Script from 'next/script';

export default function Home() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: \`${body.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\` }} />
      <Script src="/barber.js" strategy="afterInteractive" onLoad={() => { if (window.initBarber) window.initBarber(); }} />
    </>
  );
}
`;

fs.writeFileSync('app/page.js', pageContent);
