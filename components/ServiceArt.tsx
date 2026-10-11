// Light, on-brand illustrations for each service (inline SVG, no image files)
const LIME = "#d7ff2f";
const CREAM = "#ece8e1";

function Frame({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <svg viewBox="0 0 800 500" role="img" aria-label={label} className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <pattern id="g" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" fill="none" stroke={CREAM} strokeOpacity=".05" /></pattern>
        <radialGradient id="glow" cx="75%" cy="20%" r="70%"><stop offset="0" stopColor={LIME} stopOpacity=".18" /><stop offset="1" stopColor={LIME} stopOpacity="0" /></radialGradient>
      </defs>
      <rect width="800" height="500" fill="#131316" />
      <rect width="800" height="500" fill="url(#g)" />
      <rect width="800" height="500" fill="url(#glow)" />
      {children}
    </svg>
  );
}

const line = { fill: "none", stroke: CREAM, strokeOpacity: 0.35, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" } as const;
const card = { fill: "#0c0c0f", stroke: CREAM, strokeOpacity: 0.18, strokeWidth: 2 } as const;
const acc = { fill: "none", stroke: LIME, strokeWidth: 3, strokeLinecap: "round", strokeLinejoin: "round" } as const;

const art: Record<string, { label: string; node: React.ReactNode }> = {
  "cloud-web-applications": {
    label: "A web application dashboard connected to the cloud",
    node: (
      <>
        <rect x="120" y="150" width="440" height="290" rx="18" {...card} />
        <path d="M120 190h440" {...line} />
        <circle cx="146" cy="170" r="5" fill={LIME} /><circle cx="166" cy="170" r="5" fill={CREAM} fillOpacity=".35" /><circle cx="186" cy="170" r="5" fill={CREAM} fillOpacity=".35" />
        <path d="M120 190v250" {...line} /><path d="M205 190v250" {...line} />
        {[225, 255, 285, 315].map((y) => <path key={y} d={`M140 ${y}h45`} {...line} />)}
        <rect x="230" y="215" width="150" height="80" rx="10" {...card} /><rect x="395" y="215" width="150" height="80" rx="10" {...card} />
        <path d="M250 270l25-22 25 12 30-34" {...acc} />
        {[0, 1, 2, 3, 4, 5].map((i) => <rect key={i} x={240 + i * 50} y={420 - (30 + i * 14)} width="26" height={30 + i * 14} rx="4" fill={i > 3 ? LIME : CREAM} fillOpacity={i > 3 ? 0.9 : 0.25} />)}
        <path d="M640 120c-28 0-46 20-46 44h-8c-22 0-40 16-40 36 0 21 18 36 40 36h112c24 0 44-16 44-38 0-20-16-36-38-38 0-24-26-40-64-40Z" fill="#0c0c0f" stroke={LIME} strokeWidth="3" />
        <path d="M600 300h86M600 330h86M600 360h86" {...line} />
        <rect x="585" y="285" width="116" height="90" rx="10" {...card} />
        {[300, 330, 360].map((y) => <circle key={y} cx="686" cy={y} r="4" fill={LIME} />)}
        <path d="M560 240l45 20M640 240v45" {...acc} strokeDasharray="6 8" strokeOpacity=".7" />
      </>
    ),
  },
  "cross-platform-mobile-apps": {
    label: "Two phones showing the same app",
    node: (
      <>
        <g transform="rotate(-8 300 280)">
          <rect x="200" y="90" width="200" height="380" rx="30" {...card} />
          <rect x="285" y="104" width="30" height="8" rx="4" fill={CREAM} fillOpacity=".25" />
          <rect x="220" y="140" width="160" height="70" rx="12" fill={LIME} fillOpacity=".9" />
          <path d="M236 232h110M236 256h80" {...line} />
          {[0, 1].map((i) => <rect key={i} x={220 + i * 84} y="290" width="76" height="76" rx="12" {...card} />)}
          <path d="M236 400h128" {...line} />
        </g>
        <g transform="rotate(7 520 280)">
          <rect x="420" y="70" width="200" height="380" rx="30" fill="#0c0c0f" stroke={LIME} strokeWidth="3" />
          <rect x="505" y="84" width="30" height="8" rx="4" fill={CREAM} fillOpacity=".25" />
          <circle cx="470" cy="150" r="22" fill={LIME} fillOpacity=".9" /><path d="M505 140h90M505 160h60" {...line} />
          <path d="M440 210h160M440 240h140M440 270h160" {...line} />
          <rect x="440" y="310" width="160" height="50" rx="25" fill={LIME} />
          <path d="M440 400h160" {...line} />
        </g>
        <path d="M130 120l30 30M150 120l-30 30" {...acc} strokeOpacity=".7" />
      </>
    ),
  },
  "iot-solutions": {
    label: "A central hub connected to sensors and devices",
    node: (
      <>
        {[[160, 130], [640, 120], [130, 360], [660, 370], [400, 70], [400, 440]].map(([x, y], i) => (
          <g key={i}>
            <path d={`M400 250L${x} ${y}`} stroke={LIME} strokeOpacity=".45" strokeWidth="2" strokeDasharray="6 8" />
            <circle cx={x} cy={y} r="34" {...card} /><circle cx={x} cy={y} r="8" fill={i % 2 ? CREAM : LIME} fillOpacity={i % 2 ? 0.5 : 1} />
            <path d={`M${x - 18} ${y - 22}a26 26 0 0 1 36 0`} {...line} />
          </g>
        ))}
        <rect x="335" y="185" width="130" height="130" rx="22" fill="#0c0c0f" stroke={LIME} strokeWidth="3" />
        <rect x="365" y="215" width="70" height="70" rx="10" {...line} />
        {[352, 380, 408, 436].map((x) => <path key={x} d={`M${x} 185v-18M${x} 315v18`} {...line} />)}
        {[212, 240, 268, 296].map((y) => <path key={y} d={`M335 ${y}h-18M465 ${y}h18`} {...line} />)}
        <circle cx="400" cy="250" r="12" fill={LIME} />
        <circle cx="400" cy="250" r="86" fill="none" stroke={LIME} strokeOpacity=".15" strokeWidth="2" />
      </>
    ),
  },
  "ai-integration": {
    label: "A neural network with a spark of intelligence",
    node: (
      <>
        {(() => {
          const cols = [[200, 3], [340, 5], [480, 5], [620, 2]] as const;
          const pts = cols.map(([x, n]) => Array.from({ length: n }, (_, i) => [x, 250 + (i - (n - 1) / 2) * 62]));
          return (
            <>
              {pts.slice(0, -1).map((c, ci) => c.map(([x, y], i) => pts[ci + 1].map(([x2, y2], j) => <path key={`${ci}-${i}-${j}`} d={`M${x} ${y}L${x2} ${y2}`} stroke={CREAM} strokeOpacity=".12" />)))}
              {pts.map((c, ci) => c.map(([x, y], i) => <circle key={`n${ci}-${i}`} cx={x} cy={y} r="13" fill="#0c0c0f" stroke={ci === 3 || (ci === 1 && i === 2) ? LIME : CREAM} strokeOpacity={ci === 3 || (ci === 1 && i === 2) ? 1 : 0.45} strokeWidth="2.5" />))}
              <path d="M340 250L480 250L620 219" stroke={LIME} strokeWidth="3" />
              <circle cx="340" cy="250" r="6" fill={LIME} /><circle cx="480" cy="250" r="6" fill={LIME} /><circle cx="620" cy="219" r="6" fill={LIME} />
            </>
          );
        })()}
        <path d="M690 100l9 22 22 9-22 9-9 22-9-22-22-9 22-9Z" fill={LIME} />
        <path d="M120 400l5 12 12 5-12 5-5 12-5-12-12-5 12-5Z" fill={CREAM} fillOpacity=".4" />
      </>
    ),
  },
  "website-development": {
    label: "A website layout with a headline, image and button",
    node: (
      <>
        <rect x="110" y="90" width="580" height="340" rx="18" {...card} />
        <path d="M110 132h580" {...line} />
        <circle cx="136" cy="111" r="5" fill={LIME} /><circle cx="156" cy="111" r="5" fill={CREAM} fillOpacity=".35" /><circle cx="176" cy="111" r="5" fill={CREAM} fillOpacity=".35" />
        <rect x="260" y="98" width="260" height="26" rx="13" {...line} />
        <rect x="140" y="160" width="200" height="14" rx="7" fill={CREAM} fillOpacity=".55" /><rect x="140" y="188" width="150" height="14" rx="7" fill={CREAM} fillOpacity=".55" />
        <path d="M140 232h200M140 252h170M140 272h190" {...line} />
        <rect x="140" y="304" width="110" height="38" rx="19" fill={LIME} />
        <rect x="380" y="158" width="280" height="184" rx="14" {...card} />
        <path d="M380 322l70-70 60 54 40-36 110 82" {...acc} strokeOpacity=".9" /><circle cx="440" cy="204" r="16" fill={LIME} fillOpacity=".9" />
        {[0, 1, 2].map((i) => <rect key={i} x={140 + i * 172} y="364" width="156" height="50" rx="10" {...card} />)}
      </>
    ),
  },
  "business-automation": {
    label: "Connected steps and a gear showing automated work",
    node: (
      <>
        {[[130, 150], [350, 150], [570, 150]].map(([x, y], i) => (
          <g key={i}>
            <rect x={x} y={y} width="130" height="86" rx="14" {...card} />
            <path d={`M${x + 20} ${y + 30}h70M${x + 20} ${y + 52}h46`} {...line} />
            <circle cx={x + 108} cy={y + 24} r="6" fill={i === 2 ? LIME : CREAM} fillOpacity={i === 2 ? 1 : 0.4} />
          </g>
        ))}
        <path d="M260 193h90M480 193h90" {...acc} /><path d="M342 185l10 8-10 8M562 185l10 8-10 8" {...acc} />
        <path d="M635 236v70q0 24-24 24H300" {...acc} strokeDasharray="6 8" strokeOpacity=".7" />
        <g transform="translate(220 360)">
          <circle r="40" fill="#0c0c0f" stroke={LIME} strokeWidth="3" /><circle r="14" fill={LIME} />
          {Array.from({ length: 8 }, (_, i) => <rect key={i} x="-8" y="-58" width="16" height="22" rx="4" fill={LIME} transform={`rotate(${i * 45})`} />)}
        </g>
        <g transform="translate(330 395) scale(.6)">
          <circle r="40" fill="#0c0c0f" stroke={CREAM} strokeOpacity=".5" strokeWidth="4" /><circle r="14" fill={CREAM} fillOpacity=".5" />
          {Array.from({ length: 8 }, (_, i) => <rect key={i} x="-8" y="-58" width="16" height="22" rx="4" fill={CREAM} fillOpacity=".5" transform={`rotate(${i * 45})`} />)}
        </g>
        <rect x="470" y="350" width="200" height="60" rx="14" {...card} /><path d="M490 380l16 16 30-34" {...acc} /><path d="M556 372h90M556 392h60" {...line} />
      </>
    ),
  },
};

export default function ServiceArt({ slug }: { slug: string }) {
  const a = art[slug];
  if (!a) return null;
  return <Frame label={a.label}>{a.node}</Frame>;
}
