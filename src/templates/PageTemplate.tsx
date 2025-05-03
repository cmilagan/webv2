import ThemeProvider from '../components/theme/ThemeProvider';
import React from 'react';
import { CssBaseline } from '@mui/material';
import ParticleBackground from '../components/particles/ParticleBackground';


type PageTemplateProps = React.PropsWithChildren<{}>

const PageTemplate = ({ children }: PageTemplateProps) => {
  return (
    <ThemeProvider>
      <CssBaseline />
      <ParticleBackground />
      {children}
    </ThemeProvider>
  )
}

export default PageTemplate