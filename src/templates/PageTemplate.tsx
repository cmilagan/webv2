import ThemeProvider from '../components/theme/ThemeProvider';
import React from 'react';
import { CssBaseline } from '@mui/material';
import { Container } from '@mui/system';

type PageTemplateProps = React.PropsWithChildren<{}>

const PageTemplate = ({ children }: PageTemplateProps) => {
  return (
      <ThemeProvider>
        <Container 
          sx={{ 
            height: '100vh', 
            maxWidth: { sm: '100vw', md: '60vw' },
          }}
        >
          <CssBaseline />
          {children}
        </Container>
      </ThemeProvider>
  )
}

export default PageTemplate