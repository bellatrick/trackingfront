import React, { useContext } from "react";
import { NavLink as BaseNavLink } from "react-router-dom";
import {
  Dashboard,
  Add,
  MessageRounded,
  Description,
  GroupWork,
} from "@material-ui/icons";
//import logo from "../assets/logo.png";

const navigation1 = [
  { name: "Products", href: "/products", icon: Dashboard, exact: true },
  { name: "Add New Product", href: "/addproduct", icon: Add, exact: true },
];

const secondaryNavigation = [
  { name: "Logout", href: "/support", icon: Description, exact: false },
];

const DeskTopBar = () => {
  // const { logoutHandler } = useContext(Store);
  return (
    <div className="hidden lg:flex lg:flex-shrink-0 font-body">
      <div className="flex flex-col w-64">
        <div className="flex flex-col flex-grow bg-blue-900 pt-5 pb-4 overflow-y-auto relative">
          <div className="flex items-center flex-shrink-0 -ml-10">
            <img className="h-20 w-20 mb-5 mx-auto" src="" alt="logo" />
          </div>
          <nav
            className="mt-5 flex-1 flex flex-col overflow-y-auto"
            aria-label="Sidebar"
          >
            <div className=" -ml-1 pr-2 space-y-2 text-white">
              {navigation1.map((item) => (
                <BaseNavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    [
                      " hover:text-white hover:bg-blue-600 group flex items-center pl-8 px-2 py-4 text-lg  leading-6 font-medium rounded-md",
                      isActive ? " text-blue-200 bg-blue-600" : "bg-white",
                    ]
                      .filter(Boolean)
                      .join()
                  }
                >
                  <item.icon
                    className="mr-4 flex-shrink-0 h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                  {item.name}
                </BaseNavLink>
              ))}
            </div>

            <div className="mt-20 -ml-2 pt-3 absolute bottom-2 w-full">
              <div className=" px-2 space-y-5">
                {secondaryNavigation.map((item, i) => (
                  <div
                    key={i}
                    //onClick={logoutHandler}
                    className="group flex items-center py-2 text-lg leading-6 pl-6 font-light tracking-wider rounded-md text-white  hover:bg-blue-700"
                  >
                    <item.icon
                      className="mr-4 h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default DeskTopBar;
