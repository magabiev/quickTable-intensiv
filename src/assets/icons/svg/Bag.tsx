import { FC } from 'react';
import { IconProps } from './types.ts';

const Bag: FC<IconProps> = ({
  width = 24,
  strokeWidth = 2,
  height = 24,
  color = '#1E3050',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M36.219 12.7519L39.719 40.7519C39.8682 41.9456 38.9374 43 37.7344 43H10.2656C9.06257 43 8.1318 41.9456 8.28101 40.7519L11.781 12.7519C11.9061 11.7511 12.7569 11 13.7656 11H34.2344C35.2431 11 36.0939 11.7511 36.219 12.7519Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30 11V7C30 5.89543 29.1046 5 28 5H20C18.8954 5 18 5.89543 18 7V11"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.6279 21.9746L23.4247 25.8259C23.7999 25.9388 24.2 25.9391 24.5753 25.8266L37.3738 21.9903"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Bag;
