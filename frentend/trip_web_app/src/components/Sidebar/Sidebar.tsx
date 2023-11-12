import PropTypes from "prop-types";
import React, { useState } from "react";
import { Frame } from "../Frame";
import { FrameWrapper } from "../FrameWrapper";
import "./style.css";
import { BellRinging } from "../BellRinging/BellRinging";
import { MenuIcon } from "../../icons/MenuIcon";
import { PassengerIcon } from "../../icons/PassengerIcon";
import { TripIcon } from "../../icons/TripIcon";
import { GroupsIcon } from "../../icons/GroupsIcon";
import { AnalyticsIcon } from "../../icons/AnalyticsIcon";
import { SupportIcon } from "../../icons/SupportIcon";
import { UserProfileIcon } from "../../icons/UserProfileIcon";
import { NotificationSquare } from "../NotificationSquare/NotificationSquare";
import { NavigationLink } from "../NavigationLink/NavigationLink";
import { NavBar } from "../NavBar/NavBar";

interface Props {
  sideBarName: "sidebar-collapsed" | "side-bar";
  className: any;
  frameExclude: string;
  activeLink: | "dashboard"
  | "chat"
  | "notifications"
  | "agents"
  | "trips"
  | "settings"
  | "passenger"
  | "groups"
  | "analytics"
  | "support";
  frame: string;
  navLinkFrameWrapperExclude: string;
}

export const Sidebar = ({
  sideBarName,
  className,
  frameExclude = "https://c.animaapp.com/uSJvsq4m/img/exclude.svg",
  activeLink = "dashboard",
  frame = "https://c.animaapp.com/uSJvsq4m/img/frame-18-1.svg",
  navLinkFrameWrapperExclude = "/img/exclude-1.svg",
}: Props): JSX.Element => {

  const [sideBar, setSideBar] = useState(sideBarName);
  const [currentLink, setCurrentLink] = useState(activeLink);

  return (
    <>
    <NavBar></NavBar>
    <div className={`sidebar ${sideBar} ${className}`}>
      {sideBar === "side-bar" && (
        <>
          <Frame
            className="frame-28"
            exclude={frameExclude}
            excludeClassName="frame-instance"
            onClick={() => {
              setSideBar("sidebar-collapsed");
            }}
          />
          <div className="frame-4">
            <div className="frame-5">
              <NavigationLink onClicked={() => {
              setCurrentLink("dashboard");
            }} frameWrapperExclude="" activeLink={currentLink} navLink="dashboard" to="/" />
              <NavigationLink onClicked={() => {
              setCurrentLink("passenger");
            }} frameWrapperExclude="" activeLink={currentLink} navLink="passenger" to="/passengers" />
              <NavigationLink onClicked={() => {
               setCurrentLink("trips");
            }} frameWrapperExclude="" activeLink={currentLink}  navLink="trips" to="/trips"/>
              <NavigationLink onClicked={() => {
               setCurrentLink("groups");
            }} frameWrapperExclude="" activeLink={currentLink}  navLink="groups" to="/groups" />
              <NavigationLink onClicked={() => {
               setCurrentLink("analytics");
            }} frameWrapperExclude="" activeLink={currentLink}  navLink="analytics" to="/analytics" />
              <NavigationLink onClicked={() => {
              setCurrentLink("support");
            }} frameWrapperExclude="" activeLink={currentLink}  navLink="support" to="/support" />
              <NavigationLink onClicked={() => {
              setCurrentLink("agents");
            }} frameWrapperExclude="" activeLink={currentLink}  navLink="agents" to="/agents"/>
              <img className="frame-6" alt="Frame" src={frame} />
              <NavigationLink onClicked={() => {
               setCurrentLink("notifications");
            }} frameWrapperExclude="" activeLink={currentLink}  navLink="notifications" to="/notifications"/>
              <NavigationLink onClicked={() => {
             setCurrentLink("chat");
            }} frameWrapperExclude="" activeLink={currentLink}  navLink="chat" to="/chats"/>
            </div>
            <NavigationLink onClicked={() => {
               setCurrentLink("settings");
            }} frameWrapperExclude={navLinkFrameWrapperExclude} activeLink={activeLink}  navLink="settings" to="/settings" />
          </div>
          </>
      )}

      {sideBar === "sidebar-collapsed" && (
        <>
          <img className="line" alt="Line" src="https://c.animaapp.com/uSJvsq4m/img/line-1.svg" />
          <Frame
          excludeClassName={null}
            className="frame-28-instance"
            exclude="https://c.animaapp.com/uSJvsq4m/img/exclude-9.svg"
            onClick={() => {
              setSideBar("side-bar");
            }}
          />
          <div className="collapsed-nav-link">
            <MenuIcon className="frame-6" />
          </div>
          <div className="frame-27-4-instance-wrapper">
            <PassengerIcon className="frame-6" />
          </div>
          <div className="frame-29-5-wrapper">
            <TripIcon className="frame-6" />
          </div>
          <div className="frame-30-5-wrapper">
            <GroupsIcon className="frame-6" />
          </div>
          <div className="frame-31-5-wrapper">
            <AnalyticsIcon className="frame-6" />
          </div>
          <div className="frame-32-5-wrapper">
            <SupportIcon className="frame-6" />
          </div>
          <div className="collapsed-nav-link-2">
            <div className="user-profile-03-5-wrapper">
              <UserProfileIcon className="user-profile-03-5" />
            </div>
          </div>
          <div className="bell-ringing-wrapper">
            <BellRinging className="instance-node-3" />
          </div>
          <div className="notification-square-wrapper">
            <NotificationSquare className="instance-node-3" />
          </div>
          <div className="frame-33-wrapper">
            <FrameWrapper className="instance-node-3" exclude="/img/exclude-3.svg" />
          </div>
        </>
      )}
    </div>
    </>
  );
};

function reducer(state: any, action: any) {
  switch (action) {
    case "click":
      return {
        ...state,
        sideBar: "sidebar-collapsed",
      };

      case "click":
        return {
          ...state,
          sideBar: "sidebar-collapsed",
        };

    case "click_123":
      return {
        ...state,
        sideBar: "side-bar",
      };
  }

  return state;
}

Sidebar.propTypes = {
  sideBar: PropTypes.oneOf(["sidebar-collapsed", "side-bar"]),
  frameExclude: PropTypes.string,
  navLinkInteractiveState: PropTypes.string,
  frame: PropTypes.string,
  navLinkFrameWrapperExclude: PropTypes.string,
};
