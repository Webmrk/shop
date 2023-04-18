import React from "react";
import classes from "./Layout.module.css";
import Header from "../Header/Header";
import Menupri from "../Menupri/Menupri";
const Layout = (props) => {
  console.log("ciao");

  const clheader = [classes["Layout"], classes["Layout2"]];

  return (
    <div className={classes.page}>
      <header className={clheader.join(" ")}><Header /></header>
      <div className={classes.top}>
        <div className={classes.title}>title        <div className={classes.menu}><Menupri /></div></div>
 
      </div>
      <div className={classes.search}>search</div>
      <div className={classes.content}>content</div>
    </div>
  );
};

export default Layout;
