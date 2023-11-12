/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { Link, NavLink } from 'react-router-dom'
import { useReducer } from "react";
import { FrameWrapper } from "../FrameWrapper";
import "./style.css";
import { MenuIcon } from "../../icons/MenuIcon";
import { PassengerIcon } from "../../icons/PassengerIcon";
import { TripIcon } from "../../icons/TripIcon";
import { GroupsIcon } from "../../icons/GroupsIcon";
import { UserProfileIcon } from "../../icons/UserProfileIcon";
import { BellRinging } from "../BellRinging/BellRinging";
import { NotificationSquare } from "../NotificationSquare/NotificationSquare";
import { AnalyticsIcon } from "../../icons/AnalyticsIcon";
import { SupportIcon } from "../../icons/SupportIcon";
interface Props {
  navLink:
    | "dashboard"
    | "chat"
    | "notifications"
    | "agents"
    | "trips"
    | "settings"
    | "passenger"
    | "groups"
    | "analytics"
    | "support";
  activeLink:
    | "dashboard"
    | "chat"
    | "notifications"
    | "agents"
    | "trips"
    | "settings"
    | "passenger"
    | "groups"
    | "analytics"
    | "support";
  to:string;
  frameWrapperExclude: string;
  onClicked: () => void;
}

export const NavigationLink = ({
  navLink,
 activeLink,
  frameWrapperExclude = "/img/exclude-4.svg",
  to,
  onClicked
}: Props): JSX.Element => {
  return (
    <NavLink className='nav-link-content' to={to}>
    <div 
      className={`nav-link ${navLink} ${ navLink === activeLink ? "active" : "default"}`}
      onMouseLeave={() => {
      }}
      onMouseEnter={() => {
      }}
      onClick={() => {
        onClicked();
        console.log("active link",activeLink);
      }}
    >
      {( navLink === "agents" ||
         navLink === "analytics" ||
         navLink === "chat" ||
         navLink === "dashboard" ||
         navLink === "groups" ||
         navLink === "notifications" ||
         navLink === "support" ||
         navLink === "trips") && (
        <>
          <div className="div">
            {navLink === "dashboard" && <MenuIcon className="instance-node" />}

            { navLink === "trips" && <TripIcon className="instance-node" />}

            { navLink === "groups" && <GroupsIcon className="instance-node" />}

            { navLink === "analytics" && <AnalyticsIcon className="instance-node" />}

            { navLink === "support" && <SupportIcon className="instance-node" />}

            { navLink === "agents" && (
              <div className="user-profile-wrapper">
                <UserProfileIcon className="user-profile" />
              </div>
            )}

            { navLink === "notifications" && <BellRinging className="instance-node-2" />}

            { navLink === "chat" && <NotificationSquare className="instance-node-2" />}
          </div>
          <div className="dashbord-wrapper">
            <div className="div-2">
              { navLink === "dashboard" && <>Dashbord</>}

              { navLink === "trips" && <>Trips</>}

              { navLink === "groups" && <>Groups</>}

              { navLink === "analytics" && <>Analytics</>}

              { navLink === "support" && <>Support</>}

              { navLink === "agents" && <>Agents</>}

              { navLink === "notifications" && <>Notifications</>}

              { navLink === "chat" && <>Chat</>}
            </div>
          </div>
        </>
      )}

      { navLink === "passenger" && (
        <div className="frame-2">
          <div className="frame-27-4-wrapper">
            <PassengerIcon className="instance-node" />
          </div>
          <div className="div-wrapper">
            <div className="div-2">Passenger</div>
          </div>
        </div>
      )}

      { navLink === "settings" && (
        <>
          <FrameWrapper className="instance-node-2" exclude={frameWrapperExclude} />
          <div className="frame-3">
            <div className="div-2">Settings</div>
          </div>
        </>
      )}
    </div>
    </NavLink>
  );
};

NavigationLink.propTypes = {
  navLink: PropTypes.oneOf([
    "dashboard",
    "chat",
    "notifications",
    "agents",
    "trips",
    "settings",
    "passenger",
    "groups",
    "analytics",
    "support",
  ]),
  interactiveState: PropTypes.oneOf(["hover", "active", "default"]),
  frameWrapperExclude: PropTypes.string,
};
