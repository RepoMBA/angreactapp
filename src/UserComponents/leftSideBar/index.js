import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import "../../css/leftSideBar.css";
import Logo from "../../images/logo.png";
import Img from "../../images/team/team-1.jpg";
import {
  leftSideBarItems,
  leftSideBarItems2,
} from "../../constants/leftSideBarLabels";

function LeftSideBar() {
  const [show, setShow] = useState(false);
  function logout() {
    localStorage.clear();
  }

  return (
    <main className={show ? "space-toggle" : null}>
      {/* <header className={`header ${show ? "space-toggle" : null}`}> */}
      <header className="header">
        {/* <div
          className="header-toggle"
          onClick={() => {
            setShow(!show);
            localStorage.setItem("showLeftsideBar", !show);
            // document.getElementsByClassName('page-wrapper').
          }}
        >
          <i class="fa-solid fa-bars"></i>
        </div> */}
        <div className="col-4 d-flex align-items-center">
          <i className="fa-solid fa-magnifying-glass text-blur"></i>
          <input
            type="text"
            placeholder="Global Search"
            className="header-global-search"
          />
        </div>
        <div className="col-1 d-flex">
          <a className="fa-regular fa-bell m-2 p-0"></a>
          <a
            className="fa fa-power-off black m-2 p-0"
            onClick={logout}
            href="/home"
            title="Log Out"
          ></a>
        </div>
      </header>
      <aside className={`sidebar ${show ? "show" : null}`}>
        <nav className="nav">
          <div>
            <Link to="/dashboard" className="nav-logo">
              {/* <img src={Logo} alt="" className={show ? "d-block" : "d-none"} /> */}
              {/* <h4>{show ? "ANGOOTHA" : "A"}</h4> */}
              <h4>ANGOOTHA</h4>
            </Link>
            <div className="d-flex row">
              <div className="col-3 p-0">
                <img
                  src={Img}
                  alt=""
                  width="80%"
                  className="rounded-circle ml-4"
                />
              </div>
              <div className="col-7">
                <p className="p-0 m-0 font-weight-bold">
                  {localStorage.getItem("userName")}
                </p>
                <p
                  className="text-muted p-0 m-0"
                  style={{ fontSize: "12px", lineHeight: "20px" }}
                >
                  {localStorage.getItem("email")}
                </p>
              </div>
            </div>
            <div className="nav-list">
              {leftSideBarItems.map((item, index) => {
                return (
                  <Link to={item.link} className="nav-link align-items-center">
                    <i className={`${item.icon} nav-link-icon`}></i>
                    <span className="nav-link-name">{item.title}</span>
                  </Link>
                );
              })}

              <hr className="mt-5" />
              {leftSideBarItems2.map((item, index) => {
                return (
                  <Link to={item.link} className="nav-link align-items-center">
                    <i className={`${item.icon} nav-link-icon`}></i>
                    <span className="nav-link-name">{item.title}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </nav>
      </aside>
    </main>
  );
}

export default LeftSideBar;
