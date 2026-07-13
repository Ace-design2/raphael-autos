import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

// Menu / Menu_Alt_04.svg
export const MenuAlt04 = ({ className, ...props }: IconProps): React.JSX.Element => (
  <svg
    viewBox="0 0 36 36"
    fill="none"
    className={className}
    {...props}
  >
    <path
      d="M7.5 25.5H28.5M7.5 18H28.5M7.5 10.5H19.5"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Menu / Close_MD.svg
export const CloseMD = ({ className, ...props }: IconProps): React.JSX.Element => (
  <svg
    viewBox="0 0 36 36"
    fill="none"
    className={className}
    {...props}
  >
    <path
      d="M26.9999 26.9999L18 18M18 18L9 9M18 18L27.0001 9M18 18L9 27.0001"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Interface / Search_Magnifying_Glass.svg
export const SearchMagnifyingGlass = ({ className, ...props }: IconProps): React.JSX.Element => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    className={className}
    {...props}
  >
    <path
      d="M10 10L14 14M6.66667 11.3333C4.08934 11.3333 2 9.244 2 6.66667C2 4.08934 4.08934 2 6.66667 2C9.244 2 11.3333 4.08934 11.3333 6.66667C11.3333 9.244 9.244 11.3333 6.66667 11.3333Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// User / User_03.svg
export const User03 = ({ className, ...props }: IconProps): React.JSX.Element => (
  <svg
    viewBox="0 0 36 36"
    fill="none"
    className={className}
    {...props}
  >
    <path
      d="M27 28.5C27 25.1863 22.9706 22.5 18 22.5C13.0294 22.5 9 25.1863 9 28.5M18 18C14.6863 18 12 15.3137 12 12C12 8.68629 14.6863 6 18 6C21.3137 6 24 8.68629 24 12C24 15.3137 21.3137 18 18 18Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Navigation / Car_Auto.svg
export const CarAuto = ({ className, ...props }: IconProps): React.JSX.Element => (
  <svg
    viewBox="0 0 14 14"
    fill="none"
    className={className}
    {...props}
  >
    <path
      d="M1.75 6.41669H2.35986M2.35986 6.41669H11.6401M2.35986 6.41669C2.36636 6.38667 2.37403 6.3569 2.38289 6.3275C2.40404 6.25734 2.43391 6.18986 2.49398 6.05471L3.39596 4.02525C3.5743 3.624 3.66361 3.42325 3.80456 3.27614C3.92914 3.14611 4.08195 3.04677 4.25138 2.98574C4.44306 2.91669 4.66279 2.91669 5.10189 2.91669H8.89792C9.33701 2.91669 9.55695 2.91669 9.74863 2.98574C9.91806 3.04677 10.0706 3.14611 10.1952 3.27614C10.3361 3.42316 10.4252 3.62373 10.6033 4.02444L11.5089 6.0621C11.5668 6.19234 11.5963 6.25862 11.6171 6.3275C11.6259 6.3569 11.6336 6.38667 11.6401 6.41669M2.35986 6.41669C2.35259 6.45031 2.34681 6.48425 2.3425 6.51837C2.33333 6.59108 2.33333 6.665 2.33333 6.81289V9.91669M11.6401 6.41669H12.25M11.6401 6.41669C11.6474 6.45031 11.6532 6.48425 11.6576 6.51837C11.6667 6.59064 11.6667 6.66413 11.6667 6.81023V9.91675M11.6667 9.91675L9.33333 9.91674M11.6667 9.91675V10.5C11.6667 11.1443 11.1443 11.6667 10.5 11.6667C9.85567 11.6667 9.33333 11.1444 9.33333 10.5V9.91674M2.33333 9.91669H4.66667L9.33333 9.91674M4.66667 9.91669V10.5C4.66667 11.1444 4.14433 11.6667 3.5 11.6667C2.85567 11.6667 2.33333 11.1444 2.33333 10.5V9.91669"
      stroke="currentColor"
      strokeWidth="0.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Communication / Mail.svg
export const MailIcon = ({ className, ...props }: IconProps): React.JSX.Element => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    className={className}
    {...props}
  >
    <path
      d="M2.66667 4.00004L6.73842 7.07488L6.73978 7.07601C7.1919 7.40756 7.41809 7.57344 7.66584 7.63752C7.88482 7.69416 8.115 7.69416 8.33398 7.63752C8.58195 7.57338 8.8088 7.40702 9.26172 7.07488C9.26172 7.07488 11.8734 5.07067 13.3333 4.00004M2 10.5335V5.46684C2 4.7201 2 4.34645 2.14532 4.06124C2.27316 3.81036 2.47698 3.60653 2.72786 3.4787C3.01308 3.33337 3.38673 3.33337 4.13346 3.33337H11.8668C12.6135 3.33337 12.9864 3.33337 13.2716 3.4787C13.5225 3.60653 13.727 3.81036 13.8548 4.06124C14 4.34618 14 4.71937 14 5.46465V10.5358C14 11.281 14 11.6537 13.8548 11.9386C13.727 12.1895 13.5225 12.3937 13.2716 12.5215C12.9867 12.6667 12.614 12.6667 11.8687 12.6667H4.13127C3.386 12.6667 3.0128 12.6667 2.72786 12.5215C2.47698 12.3937 2.27316 12.1895 2.14532 11.9386C2 11.6534 2 11.2802 2 10.5335Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Communication / Phone.svg
export const PhoneIcon = ({ className, ...props }: IconProps): React.JSX.Element => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    className={className}
    {...props}
  >
    <path
      d="M6.33497 2.83815C6.13249 2.33193 5.64221 2 5.09701 2H3.26316C2.56554 2 2 2.5654 2 3.26302C2 9.19281 6.80719 14 12.737 14C13.4346 14 14 13.4344 14 12.7368L14.0003 10.9026C14.0003 10.3574 13.6685 9.86724 13.1622 9.66475L11.4046 8.96196C10.9499 8.78007 10.4322 8.86193 10.056 9.17546L9.60235 9.55378C9.07258 9.99526 8.29309 9.96015 7.80546 9.47252L6.52815 8.19404C6.04052 7.70641 6.00449 6.92756 6.44596 6.39779L6.82422 5.9442C7.13774 5.56797 7.22033 5.05011 7.03844 4.59539L6.33497 2.83815Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Arrow / Chevron_Left (flipped Chevron_Right)
export const ChevronLeft = ({ className, ...props }: IconProps): React.JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    {...props}
  >
    <path
      d="M15 19L8 12L15 5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Arrow / Chevron_Right.svg
export const ChevronRight = ({ className, ...props }: IconProps): React.JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    {...props}
  >
    <path
      d="M9 5L16 12L9 19"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Arrow / Chevron_Right_Duo.svg
export const ChevronRightDuo = ({ className, ...props }: IconProps): React.JSX.Element => (
  <svg
    viewBox="0 0 14 14"
    fill="none"
    className={className}
    {...props}
  >
    <path
      d="M7.58337 4.66669L9.91671 7.00002L7.58337 9.33335M4.08337 4.66669L6.41671 7.00002L4.08337 9.33335"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Arrow / Chevron_Down.svg
export const ChevronDown = ({ className, ...props }: IconProps): React.JSX.Element => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    className={className}
    {...props}
  >
    <path
      d="M12.6667 6L7.99999 10.6667L3.33333 6"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ChevronUp = ({ className, ...props }: IconProps): React.JSX.Element => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    className={className}
    {...props}
  >
    <path
      d="M3.33333 10L7.99999 5.33333L12.6667 10"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
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
