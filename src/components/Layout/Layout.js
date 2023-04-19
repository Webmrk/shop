import React from "react";
import classes from "./Layout.module.css";
import Header from "../Header/Header";
import Menupri from "../Menupri/Menupri";
import Search from "../Search/Search";
const Layout = (props) => {
  console.log("ciao");

  const clheader = [classes["Layout"], classes["Layout2"]];

  const onSelectHandler =(target)=>{
    console.log(target);
  }

  return (
    <div className={classes.page}>
      <header className={clheader.join(" ")}><Header /></header>
      <div className={classes.top}>
        <div className={classes.title}>title        <div className={classes.menu}><Menupri onSelect={onSelectHandler}/></div></div>
 
      </div>
      <div className={classes.search}><Search placeholder="cerca"></Search>
      </div>
      <div className={classes.content}>content</div>
    </div>
  );
};

export default Layout;
