import ThemeProvider from '../components/theme';
import React from 'react';


type PageTemplateProps = React.PropsWithChildren<{}>

const PageTemplate = ({ children }: PageTemplateProps) => {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}

export default PageTemplate