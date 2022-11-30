import ThemeProvider from '../components/theme';
import React from 'react';
import styled from 'styled-components';

const Page = styled.div`
  main {
    min-height: 100vh;
  }
`

type PageTemplateProps = React.PropsWithChildren<{}>

const PageTemplate = ({ children }: PageTemplateProps) => {
  return (
    <ThemeProvider>
      <Page>
        <p>placeholder</p>
      </Page>
    </ThemeProvider>
  )
}

export default PageTemplate