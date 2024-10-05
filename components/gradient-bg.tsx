import React from 'react'

export default function GradientBg({ className }: { [x: string]: any }) {
    return (
        <div className={`${className} inset-0 bg-[linear-gradient(145deg,var(--tw-gradient-stops))] from-violet-500/25 to-gray-200/0 to-50% pointer-events-none -z-10`} aria-hidden="true">
            <svg className="absolute -top-[200px] left-1/2 -translate-x-1/2 -ml-[520px]" xmlns="http://www.w3.org/2000/svg" width="674" height="596" fill="none">
                <g filter="url(#sh1a)">
                    <path fill="url(#sh1b)" fill-rule="evenodd" d="m93 93 488 329.105L303.687 503 93 93Z" clip-rule="evenodd">
                    </path>
                </g>
                <defs>
                    <linearGradient id="sh1b" x1="-2.47" x2="149.396" y1="227.957" y2="586.484" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FB7185" stopOpacity=".32">
                        </stop>
                        <stop offset="1" stop-color="#FB7185" stopOpacity=".01">
                        </stop>
                    </linearGradient>
                    <filter id="sh1a" width="672.843" height="594.843" x=".578" y=".578" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                        <feFlood floodOpacity="0" result="BackgroundImageFix">
                        </feFlood>
                        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape">
                        </feBlend>
                        <feGaussianBlur result="effect1_foregroundBlur_2006_5" stdDeviation="46.211">
                        </feGaussianBlur>
                    </filter>
                </defs>
            </svg>
        </div>
    )
}
