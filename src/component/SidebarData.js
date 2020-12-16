import React from "react";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';



const SidebarData = [
    {
        title: "Home",
        path: "/",
        icon: <AiIcons.AiFillHome />,
        cName: "nav-text"
    },
    {
        title: "About",
        path: "/about",
        icon: <IoIcons.IoIosPaper />,
        cName: "nav-text",
        subNav: [
                  {
                    title: 'Teams',
                    itemId: '/management/teams',
                  },
                ],
    },
    {
        title: "Contact",
        path: "/contact",
        icon: <FaIcons.FaCartPlus />,
        cName: "nav-text"
    },
    {
        title: "Team",
        path: "/team",
        icon: <IoIcons.IoMdPeople />,
        cName: "nav-text"
    }
];
export default SidebarData;