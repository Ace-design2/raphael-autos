import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export const MenuAlt04 = ({ className, ...props }: IconProps): React.JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M4 8h16M4 16h12" />
  </svg>
);

export const SearchMagnifyingGlass = ({ className, ...props }: IconProps): React.JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

export const User03 = ({ className, ...props }: IconProps): React.JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

export const ChevronLeft = ({ className, ...props }: IconProps): React.JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="m15 18-6-6 6-6" />
  </svg>
);

export const ChevronRight = ({ className, ...props }: IconProps): React.JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);

// Large active dot: outer thin ring with a center dot
export const DummyCircle = ({ className, ...props }: IconProps): React.JSX.Element => (
  <svg
    viewBox="0 0 36 36"
    fill="none"
    className={className}
    {...props}
  >
    <circle cx="18" cy="18" r="16" stroke="#c9a227" strokeWidth="1" />
    <circle cx="18" cy="18" r="4" fill="#c9a227" />
  </svg>
);

// Small inactive dot: simple small dot
export const DummyCircleSmall = ({ className, ...props }: IconProps): React.JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    {...props}
  >
    <circle cx="12" cy="12" r="3" fill="#ffffff" fillOpacity="0.4" />
  </svg>
);
