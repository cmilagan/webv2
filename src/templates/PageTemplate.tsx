import ThemeProvider from '../components/theme';
import React from 'react';
import { CssBaseline } from '@mui/material';


type PageTemplateProps = React.PropsWithChildren<{}>

const PageTemplate = ({ children }: PageTemplateProps) => {
  return (
    <ThemeProvider>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

export default PageTemplate