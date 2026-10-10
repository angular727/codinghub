// Inline text with an optional accent style; plain text, no animation or DOM splitting.
export function Words({ text, className = "" }: { text: string; className?: string }) {
  return <span className={className}>{text}</span>;
}

export function ScrubWords({ text }: { text: string }) {
  return <>{text}</>;
}
