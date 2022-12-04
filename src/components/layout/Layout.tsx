import React from "react";
import styled from "styled-components";
import PageTemplate from "../../templates/PageTemplate";
import Navbar from "../navbar";
import Section from "../section";

type LayoutProps = React.PropsWithChildren<{}>

const Layout = ({ children }: LayoutProps) => {

  return (
    <>
      <PageTemplate>
        <Navbar/>
        {children}
      </PageTemplate>
    </>
  );
}

export default Layout