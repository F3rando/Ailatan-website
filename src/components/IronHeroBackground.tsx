export function IronHeroBackground() {
  return (
    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-[#050505]">
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <defs>
          <pattern id="ironCell" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            <rect
              x="4"
              y="4"
              width="192"
              height="192"
              fill="none"
              stroke="rgba(200,200,210,0.18)"
              strokeWidth="1"
            />
            <line x1="4" y1="4" x2="196" y2="196" stroke="rgba(200,200,210,0.10)" strokeWidth="0.8" />
            <line x1="196" y1="4" x2="4" y2="196" stroke="rgba(200,200,210,0.10)" strokeWidth="0.8" />
            <polygon
              points="100,30 170,100 100,170 30,100"
              fill="none"
              stroke="rgba(200,200,210,0.22)"
              strokeWidth="1"
            />
            <polygon
              points="100,60 140,100 100,140 60,100"
              fill="none"
              stroke="rgba(200,200,210,0.14)"
              strokeWidth="0.8"
            />
            <path d="M4,30 Q4,4 30,4" fill="none" stroke="rgba(200,200,210,0.2)" strokeWidth="1" />
            <path d="M170,4 Q196,4 196,30" fill="none" stroke="rgba(200,200,210,0.2)" strokeWidth="1" />
            <path d="M196,170 Q196,196 170,196" fill="none" stroke="rgba(200,200,210,0.2)" strokeWidth="1" />
            <path d="M30,196 Q4,196 4,170" fill="none" stroke="rgba(200,200,210,0.2)" strokeWidth="1" />
            <circle cx="100" cy="4" r="2.5" fill="rgba(200,200,210,0.25)" />
            <circle cx="196" cy="100" r="2.5" fill="rgba(200,200,210,0.25)" />
            <circle cx="100" cy="196" r="2.5" fill="rgba(200,200,210,0.25)" />
            <circle cx="4" cy="100" r="2.5" fill="rgba(200,200,210,0.25)" />
            <circle cx="100" cy="100" r="3" fill="none" stroke="rgba(200,200,210,0.3)" strokeWidth="1" />
          </pattern>

          <pattern id="rosetteGrid" x="0" y="0" width="400" height="400" patternUnits="userSpaceOnUse">
            <g transform="translate(200,200)">
              <g className="iron-scroll">
                <path
                  d="M0,-80 C20,-40 40,-20 80,0 C40,20 20,40 0,80 C-20,40 -40,20 -80,0 C-40,-20 -20,-40 0,-80 Z"
                  fill="none"
                  stroke="rgba(220,220,230,0.35)"
                  strokeWidth="1"
                />
                <path
                  d="M-57,-57 C-20,-40 -40,-20 0,-80 C20,-40 40,-20 57,-57"
                  fill="none"
                  stroke="rgba(220,220,230,0.15)"
                  strokeWidth="0.8"
                />
                <path
                  d="M57,-57 C40,-20 20,-40 80,0 C40,20 20,40 57,57"
                  fill="none"
                  stroke="rgba(220,220,230,0.15)"
                  strokeWidth="0.8"
                />
                <path
                  d="M57,57 C20,40 40,20 0,80 C-20,40 -40,20 -57,57"
                  fill="none"
                  stroke="rgba(220,220,230,0.15)"
                  strokeWidth="0.8"
                />
                <path
                  d="M-57,57 C-40,20 -20,40 -80,0 C-40,-20 -20,-40 -57,-57"
                  fill="none"
                  stroke="rgba(220,220,230,0.15)"
                  strokeWidth="0.8"
                />
                <circle
                  cx="0"
                  cy="0"
                  r="90"
                  fill="none"
                  stroke="rgba(200,200,210,0.12)"
                  strokeWidth="0.8"
                  strokeDasharray="4 6"
                />
                <circle cx="0" cy="0" r="60" fill="none" stroke="rgba(200,200,210,0.18)" strokeWidth="0.8" />
                <circle cx="0" cy="0" r="20" fill="none" stroke="rgba(220,220,230,0.3)" strokeWidth="1" />
                <line x1="0" y1="-90" x2="0" y2="90" stroke="rgba(200,200,210,0.08)" strokeWidth="0.6" />
                <line x1="-90" y1="0" x2="90" y2="0" stroke="rgba(200,200,210,0.08)" strokeWidth="0.6" />
                <line
                  x1="-64"
                  y1="-64"
                  x2="64"
                  y2="64"
                  stroke="rgba(200,200,210,0.08)"
                  strokeWidth="0.6"
                />
                <line
                  x1="64"
                  y1="-64"
                  x2="-64"
                  y2="64"
                  stroke="rgba(200,200,210,0.08)"
                  strokeWidth="0.6"
                />
              </g>
            </g>
          </pattern>

          <radialGradient id="vignette" cx="50%" cy="50%" r="70%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="100%" stopColor="#050505" />
          </radialGradient>
          <linearGradient id="bottomFade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="40%" stopColor="transparent" />
            <stop offset="100%" stopColor="#050505" />
          </linearGradient>
        </defs>

        <g className="grid-drift">
          <rect width="120%" height="120%" x="-10%" y="-10%" fill="url(#ironCell)" />
        </g>
        <rect width="100%" height="100%" fill="url(#rosetteGrid)" opacity="0.9" />
        <rect width="100%" height="100%" fill="url(#vignette)" />
        <rect width="100%" height="100%" fill="url(#bottomFade)" />
      </svg>
    </div>
  )
}

