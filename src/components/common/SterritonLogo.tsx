import React from 'react';
import logoWhite from '../../assets/images/logo_white@2x.png';
import logoWhite4x from '../../assets/images/logo_white@4x.png';
import logoColor from '../../assets/images/logo@2x.png';
import logoColor4x from '../../assets/images/logo@4x.png';

export interface SterritonLogoProps {
  size?: number;
  color?: string;
  variant?: 'white' | 'color';
  className?: string;
  style?: React.CSSProperties;
  alt?: string;
}

export const SterritonLogo: React.FC<SterritonLogoProps> = ({
  size = 36,
  variant = 'white',
  className = '',
  style = {},
  alt = 'JEON'
}) => {
  const isWhite = variant === 'white';
  const src = isWhite ? logoWhite : logoColor;
  const srcSet = isWhite
    ? `${logoWhite} 1x, ${logoWhite4x} 2x`
    : `${logoColor} 1x, ${logoColor4x} 2x`;

  return (
    <img
      src={src}
      srcSet={srcSet}
      alt={alt}
      height={size}
      className={`brand-logo ${className}`}
      style={{
        height: `${size}px`,
        width: 'auto',
        maxWidth: '100%',
        objectFit: 'contain',
        display: 'inline-block',
        verticalAlign: 'middle',
        transition: 'transform 0.2s ease, filter 0.2s ease',
        ...style
      }}
    />
  );
};

export const JeonLogo = SterritonLogo;
export default SterritonLogo;

