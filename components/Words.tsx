// Word-masked text rendered by React itself (no DOM splitting), animated by Experience via .w-in
export function Words({ text, className = "" }: { text: string; className?: string }) {
  const words = text.split(" ");
  return (
    <>
      {words.map((w, i) => (
        <span key={i}>
          <span className="inline-block overflow-hidden align-bottom" style={{ paddingBottom: ".16em", marginBottom: "-.16em", paddingRight: ".04em", marginRight: "-.04em" }}>
            <span className={`w-in inline-block ${className}`}>{w}</span>
          </span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </>
  );
}

// Words that light up while scrolling (animated via .w-op)
export function ScrubWords({ text }: { text: string }) {
  return (
    <>
      {text.split(" ").map((w, i, a) => (
        <span key={i}><span className="w-op">{w}</span>{i < a.length - 1 ? " " : ""}</span>
      ))}
    </>
  );
}
