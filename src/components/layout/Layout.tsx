import React from "react";
import PageTemplate from "../../templates/PageTemplate";
import Navbar from "../navbar";

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