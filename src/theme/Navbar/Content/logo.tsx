import React from 'react';
import {useThemeConfig, useColorMode} from '@docusaurus/theme-common';

export default function NavbarLogo() {
  const {navbar} = useThemeConfig();
  const {colorMode} = useColorMode();

  const logoSrc =
    colorMode === 'dark' && navbar.logo.srcDark ? navbar.logo.srcDark : navbar.logo.src;

  return <img src={logoSrc} alt={navbar.logo.alt} style={{height: '32px'}} />;
}
