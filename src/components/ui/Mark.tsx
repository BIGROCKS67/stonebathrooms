export function Mark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 86 108" className={className} aria-hidden>
      <defs>
        <linearGradient id="stone-marble" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f7f4ee" />
          <stop offset="40%" stopColor="#d5cec2" />
          <stop offset="68%" stopColor="#f3eee6" />
          <stop offset="100%" stopColor="#b9b2a4" />
        </linearGradient>
      </defs>
      <path d="M4 24 L22 6 H40 V102 H4 Z" fill="url(#stone-marble)" />
      <rect x="50" y="36" width="30" height="66" fill="url(#stone-marble)" />
    </svg>
  );
}
