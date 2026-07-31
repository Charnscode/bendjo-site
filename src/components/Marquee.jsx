import React from "react";

export default function Marquee({ items }) {
  const track = [...items, ...items];
  return (
    <div className="overflow-hidden py-3" style={{ borderTop: "1px solid rgba(246,240,228,0.12)", borderBottom: "1px solid rgba(246,240,228,0.12)" }}>
      <div className="marquee-track flex gap-10 whitespace-nowrap">
        {track.map((it, i) => (
          <span key={i} className="text-sm font-medium tracking-wide" style={{ color: "#B9C2AE" }}>
            {it}
          </span>
        ))}
      </div>
    </div>
  );
}
