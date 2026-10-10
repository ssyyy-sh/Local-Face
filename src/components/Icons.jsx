const base = { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round' };

export const SearchIcon = (p) => (
  <svg {...base} {...p}><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
);
export const UserIcon = (p) => (
  <svg {...base} {...p}><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" /></svg>
);
export const HeartIcon = ({ filled, ...p }) => (
  <svg {...base} fill={filled ? 'currentColor' : 'none'} {...p}>
    <path d="M12 20.5s-7.5-4.6-9.3-9.3C1.5 8 3.6 4.5 7.2 4.5c2 0 3.6 1.1 4.8 2.8 1.2-1.7 2.8-2.8 4.8-2.8 3.6 0 5.7 3.5 4.5 6.7-1.8 4.7-9.3 9.3-9.3 9.3Z" />
  </svg>
);
export const BagIcon = (p) => (
  <svg {...base} {...p}><path d="M5 8h14l-1 12H6L5 8Z" /><path d="M9 8V6a3 3 0 0 1 6 0v2" /></svg>
);
export const ChevronDown = (p) => (
  <svg {...base} width={14} height={14} {...p}><path d="m6 9 6 6 6-6" /></svg>
);
export const ChevronLeft = (p) => (
  <svg {...base} width={18} height={18} {...p}><path d="m15 6-6 6 6 6" /></svg>
);
export const ChevronRight = (p) => (
  <svg {...base} width={18} height={18} {...p}><path d="m9 6 6 6-6 6" /></svg>
);
export const MenuIcon = (p) => (
  <svg {...base} width={24} height={24} {...p}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
);
export const CloseIcon = (p) => (
  <svg {...base} width={24} height={24} {...p}><path d="M6 6l12 12M18 6 6 18" /></svg>
);
export const PlusIcon = (p) => (
  <svg {...base} width={14} height={14} {...p}><path d="M12 5v14M5 12h14" /></svg>
);

export const Star = ({ fill = 1 }) => (
  <svg width="13" height="13" viewBox="0 0 24 24" aria-hidden="true">
    <defs>
      <linearGradient id={`sg${fill}`}>
        <stop offset={`${fill * 100}%`} stopColor="var(--accent)" />
        <stop offset={`${fill * 100}%`} stopColor="transparent" />
      </linearGradient>
    </defs>
    <path
      d="M12 2.8l2.8 5.9 6.4.8-4.7 4.4 1.2 6.4L12 17.2l-5.7 3.1 1.2-6.4-4.7-4.4 6.4-.8L12 2.8Z"
      fill={`url(#sg${fill})`}
      stroke="var(--accent)"
      strokeWidth="1.3"
      strokeLinejoin="round"
    />
  </svg>
);

/* social circles in brand colours, like in the design */
const Social = ({ bg, children, label }) => (
  <a href="#" className="social" style={{ background: bg }} aria-label={label} onClick={(e) => e.preventDefault()}>
    <svg width="12" height="12" viewBox="0 0 24 24" fill="#fff">{children}</svg>
  </a>
);
export const Twitter = () => (
  <Social bg="#1d9bf0" label="Twitter"><path d="M22 5.9c-.7.3-1.5.6-2.4.7.9-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1a4.1 4.1 0 0 0-7 3.7A11.6 11.6 0 0 1 3.4 4.7a4.1 4.1 0 0 0 1.3 5.5c-.7 0-1.3-.2-1.9-.5 0 2 1.4 3.7 3.3 4.1-.6.2-1.2.2-1.9.1.5 1.6 2.1 2.8 3.9 2.9A8.3 8.3 0 0 1 2 18.5 11.7 11.7 0 0 0 8.3 20.3c7.5 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2.2Z" /></Social>
);
export const Facebook = () => (
  <Social bg="#1877f2" label="Facebook"><path d="M14 8h3V4h-3c-2.8 0-4 1.8-4 4.3V10H7v4h3v8h4v-8h3l1-4h-4V8.6c0-.4.3-.6 1-.6Z" /></Social>
);
export const LinkedIn = () => (
  <Social bg="#0a66c2" label="LinkedIn"><path d="M5 8.5h3V20H5V8.5ZM6.5 3.5a1.8 1.8 0 1 1 0 3.6 1.8 1.8 0 0 1 0-3.6ZM10 8.5h2.9v1.6c.4-.8 1.5-1.8 3.2-1.8 3.3 0 3.9 2.2 3.9 5V20h-3v-5.9c0-1.4 0-3.2-2-3.2s-2.2 1.5-2.2 3.1v6H10V8.5Z" /></Social>
);
export const Instagram = () => (
  <Social bg="linear-gradient(45deg,#f9a825,#e1306c,#833ab4)" label="Instagram">
    <path d="M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9a4.5 4.5 0 0 1-4.5 4.5h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3Zm0 2A2.5 2.5 0 0 0 5 7.5v9A2.5 2.5 0 0 0 7.5 19h9a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 16.5 5h-9ZM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm4.6-3.4a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" />
  </Social>
);
