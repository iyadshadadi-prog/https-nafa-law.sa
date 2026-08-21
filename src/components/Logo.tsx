import React from 'react';

export function Logo({ className = "h-12 w-auto" }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 100 120" 
      className={className}
      fill="none" 
      stroke="#f8f9fa" 
      strokeWidth="4.5"
      strokeLinejoin="miter"
      strokeMiterlimit="10"
      aria-label="شعار شركة نفع للمحاماة"
      role="img"
    >
      <title>شعار شركة نفع للمحاماة</title>
      {/* Square dot at top */}
      <rect x="46.5" y="4" width="7" height="7" fill="#f8f9fa" stroke="none" />
      
      {/* Horizontal bar */}
      <line x1="26" y1="20" x2="74" y2="20" strokeLinecap="round" />
      
      {/* Outer Shield */}
      <path d="M 32 30 L 12 30 L 12 94 L 50 115 L 88 94 L 88 30 L 68 30" strokeLinecap="square" />
      
      <defs>
        <clipPath id="tip-cut">
          <path d="M 0 0 L 34.5 0 L 34.5 38 L 31.5 52 L 31.5 120 L 0 120 Z M 100 0 L 65.5 0 L 65.5 38 L 68.5 52 L 68.5 120 L 100 120 Z" />
        </clipPath>
      </defs>

      {/* Left and Right Columns - Angled bends with top edge longer than bottom edge */}
      <g clipPath="url(#tip-cut)">
        <path d="M 28 102.5 L 28 46 L 40 40" strokeLinecap="butt" />
        <path d="M 72 102.5 L 72 46 L 60 40" strokeLinecap="butt" />
      </g>
      
      {/* U Shape - Edges level with logo body (y=30) */}
      <path d="M 40 30 L 40 88 A 10 10 0 0 0 60 88 L 60 30" strokeLinecap="square" />
      
      {/* Bottom vertical dash connecting U to shield */}
      <line x1="50" y1="105" x2="50" y2="115" strokeLinecap="square" />
      
      {/* Central pillar */}
      <line x1="50" y1="30" x2="50" y2="92" strokeLinecap="square" />
      
      {/* Small horizontal dash above central pillar */}
      <line x1="48" y1="30" x2="52" y2="30" strokeLinecap="round" />
    </svg>
  );
}
