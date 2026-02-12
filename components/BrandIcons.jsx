import React from 'react';

// --- Development ---

export const HtmlIcon = ({ size = 24, className }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M1.5 0h21l-1.91 21.563L12 24 1.41 21.563 1.5 0z" fill="#E34F26" />
        <path d="M12 21.825l8.027-2.155L21.558 1.688H12v20.137z" fill="#EF652A" />
        <path d="M12 9.873H7.818l-.29-3.212H12V3.333H4.078l.86 9.873H12V9.873zm0 6.645v3.37l-4.223-1.37-.247-2.74H4.996l.462 5.068 6.542 2.115V16.518z" fill="#fff" />
    </svg>
);

export const CssIcon = ({ size = 24, className }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M1.5 0h21l-1.91 21.563L12 24 1.41 21.563 1.5 0z" fill="#1572B6" />
        <path d="M12 21.825l8.027-2.155L21.558 1.688H12v20.137z" fill="#33A9DC" />
        <path d="M12 9.945H7.873l-.28-3.328H12V3.333H4.15l.848 9.94H12V9.945zm0 6.634v3.355l-4.223-1.36-.252-2.825H4.97l.473 5.158 6.557 2.13V16.58z" fill="#fff" />
    </svg>
);

export const JsIcon = ({ size = 24, className }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <rect width="24" height="24" fill="#F7DF1E" />
        <path d="M16.8 16.906c-.675.825-1.55 1.15-2.738 1.15-2.4 0-3.262-1.763-3.262-3.6 0-2.325 1.337-3.663 3.65-3.663 1.25 0 2.05.5 2.5 1.05l1.638-1.787c-.888-1.075-2.188-1.738-4.138-1.738-3.775 0-6.275 2.538-6.275 6.138 0 3.325 2.1 6.137 6 6.137 2.013 0 3.363-.775 4.313-1.875l-1.7-1.812zm-9.35-.125c0 1.563-.825 2.175-2.225 2.175-.825 0-1.463-.263-1.85-.563L2 20.369c.675.625 1.8.963 3.013.963 2.912 0 4.775-1.575 4.775-4.575V8.506H7.45v8.275z" fill="#000" />
    </svg>
);

export const CppIcon = ({ size = 24, className }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M22.5 12.01l-2.02 2.02h-2.92l3.48-3.48-3.48-3.48h2.92L22.5 9.13v2.88zM6.57 6.57L8.03 5.11 9.49 6.57 10.95 5.11 12.41 6.57 10.95 8.03 12.41 9.49 10.95 10.95 9.49 9.49 8.03 10.95 6.57 9.49 5.11 10.95 3.65 9.49 5.11 8.03 3.65 6.57 5.11 5.11 6.57 6.57z" fill="#00599C" opacity="0.1" />
        <path fill="#00599C" d="M11.92 11.23l-1.42 1.41-1.41-1.41-1.42 1.41 1.42 1.42-1.42 1.41 1.42 1.42 1.41-1.42 1.42 1.42 1.42-1.42-1.42-1.41 1.42-1.42zM19.42 8.41h-2.84l-1.41 1.42 1.41 1.41h2.84v2.84h2.84v-2.84h2.84V8.41h-2.84V5.58h-2.84z" />
        <path fill="#004482" d="M6 22h12l2.5-4H3.5L6 22z" />
        <path d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#00599C" />
        <text x="50%" y="60%" textAnchor="middle" dy=".3em" fill="#00599C" fontSize="10" fontWeight="bold">C++</text>
    </svg>
);

export const VsCodeIcon = ({ size = 24, className }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path fill="#23A9F2" d="M17.8 22.3l4.2-3.7V5.4L17.8 1.7l-12.8 9.8z" />
        <path fill="#0065A9" d="M17.8 22.3L5 14.7l-4-2L17.8 1.7z" />
        <path fill="#007ACC" d="M1 9.4L5 11.5 17.8 1.7z" />
        <path fill="#1F9CF0" d="M17.8 22.3L5 11.5l12.8-9.8z" />
    </svg>
);

export const DevCppIcon = ({ size = 24, className }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        {/* Clean Modern Representation of Dev-C++ */}
        <rect width="24" height="24" rx="4" fill="#0D47A1" />
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="white" strokeWidth="1.5" strokeOpacity="0.3" />
        <path d="M8 8h2v8H8zm6 0h2v8h-2zM5 12h14" stroke="white" strokeWidth="2" opacity="0.8" />
        <text x="50%" y="68%" textAnchor="middle" fill="white" fontSize="9" fontWeight="900" fontFamily="sans-serif" style={{ userSelect: 'none' }}>DEV</text>
    </svg>
);

// --- Automation ---

export const N8nIcon = ({ size = 24, className }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <rect width="24" height="24" rx="4" fill="#EA4B71" />
        {/* n8n simple node representation */}
        <path d="M12.5 7h-4v10h4V13h2.5v4h4V11h-4v2h-2.5V7z" fill="white" />
        <path d="M5 11h2.5v6H5v-6z" fill="white" />
    </svg>
);

export const MakeIcon = ({ size = 24, className }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <rect width="24" height="24" rx="12" fill="#6419E6" />
        <path d="M7 16V8l5 4 5-4v8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const ZapierIcon = ({ size = 24, className }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <rect width="24" height="24" rx="4" fill="#FF4F00" />
        {/* Official Zapier Asterisk/Splat */}
        <circle cx="12" cy="12" r="8" fill="#FF4F00" />
        <path d="M12 5v14M5 12h14M7.05 7.05l9.9 9.9M7.05 16.95l9.9-9.9" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

// --- Voice / Misc ---

export const ElevenLabsIcon = ({ size = 24, className }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <rect width="24" height="24" rx="4" fill="black" />
        <path d="M8 7h2v10H8zm6 0h2v10h-2z" fill="white" />
    </svg>
);

export const TwilioIcon = ({ size = 24, className }) => (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" className={className}>
        <circle cx="20" cy="20" r="20" fill="#F22F46" />
        <circle cx="20" cy="20" r="6" fill="white" />
        <circle cx="11" cy="11" r="3.5" fill="white" />
        <circle cx="29" cy="11" r="3.5" fill="white" />
        <circle cx="11" cy="29" r="3.5" fill="white" />
        <circle cx="29" cy="29" r="3.5" fill="white" />
    </svg>
);

// --- Social Media ---

export const InstagramIcon = ({ size = 24, className }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <rect width="24" height="24" rx="6" fill="url(#ig-grad)" />
        <rect x="5" y="5" width="14" height="14" rx="4" stroke="white" strokeWidth="2" />
        <circle cx="12" cy="12" r="3.5" stroke="white" strokeWidth="2" />
        <circle cx="16.5" cy="7.5" r="1" fill="white" />
        <defs>
            <linearGradient id="ig-grad" x1="2" y1="22" x2="22" y2="2" gradientUnits="userSpaceOnUse">
                <stop stopColor="#f09433" />
                <stop offset="0.25" stopColor="#e6683c" />
                <stop offset="0.5" stopColor="#dc2743" />
                <stop offset="0.75" stopColor="#cc2366" />
                <stop offset="1" stopColor="#bc1888" />
            </linearGradient>
        </defs>
    </svg>
);

export const FacebookIcon = ({ size = 24, className }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <circle cx="12" cy="12" r="12" fill="#1877F2" />
        <path d="M13.5 12h2l.5-3h-2.5V8a1 1 0 0 1 1-1h1.5V4h-2.5a3 3 0 0 0-3 3v2h-2v3h2v8h3.5v-8z" fill="white" />
    </svg>
);

export const LinkedInIcon = ({ size = 24, className }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <rect width="24" height="24" rx="4" fill="#0077B5" />
        <path d="M6.5 19h-3v-9h3v9zm-1.5-10.2c-.96 0-1.74-.78-1.74-1.74S4.04 5.32 5 5.32s1.74.78 1.74 1.74-.78 1.74-1.74 1.74zM20.5 19h-3v-4.5c0-1.07-.02-2.45-1.5-2.45-1.5 0-1.73 1.17-1.73 2.37V19h-3v-9h2.88v1.23h.04c.4-.76 1.38-1.56 2.85-1.56 3.05 0 3.61 2.01 3.61 4.62V19z" fill="white" />
    </svg>
);

export const TwitterIcon = ({ size = 24, className }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <rect width="24" height="24" rx="4" fill="black" />
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.161 15.294h1.833L7.084 4.126H5.117l11.966 13.418z" fill="white" />
    </svg>
);

export const MailIcon = ({ size = 24, className }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <rect width="24" height="24" rx="4" fill="#EA4335" />
        <path d="M4 6l8 5 8-5v12H4V6z" stroke="white" strokeWidth="2" strokeLinejoin="round" fill="none" />
        <path d="M4 6l8 5 8-5" fill="none" stroke="white" strokeWidth="2" strokeLinejoin="round" />
    </svg>
);

export const GithubIcon = ({ size = 24, className }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" fill="currentColor" />
    </svg>
);
