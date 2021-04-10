import React, { FC } from 'react';
import styles from './logo.module.css';

interface LogoProps {
  url?: string;
}

const Logo: FC<LogoProps> = ({ url }) => {
  const defaultLogo = './images/default-logo.svg';
  return <img className={styles.logo_img} src={url || defaultLogo} alt="logo-img" />;
};

export default Logo;
