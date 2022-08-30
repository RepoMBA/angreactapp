import React from "react";
import { dashboardCardLabels } from "../../constants/dahboardLabels";
import CardComp from "./CardComp";
import { Link, Redirect } from "react-router-dom";
import "../../css/dashboard.css";
import Item from "antd/lib/list/Item";

function Dashboard() {
  return (
    <div className="page-wrapper">
      <div className="d-flex row px-5 px-md-0">
        {dashboardCardLabels.map((cardVal, index) => {
          return (
            <div className="col-xs-12 col-md-3">
              <CardComp key={index} title={cardVal.title} link={cardVal.link} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Dashboard;
