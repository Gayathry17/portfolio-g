import React from 'react'
import { NavHashLink as Link } from 'react-router-hash-link';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ExtensionOutlinedIcon from '@material-ui/icons/ExtensionOutlined';
import SchoolOutlinedIcon from '@material-ui/icons/SchoolOutlined';
import ContactPhoneOutlinedIcon from '@material-ui/icons/ContactPhoneOutlined';


import SidebarItem from './SidebarItem/SidebarItem'
import './Sidebar.css'

function Sidebar() {
    return (
        <div className="sidebar">
            <Link to="/#home" smooth={true} spy="true" duration={1000}>
                <SidebarItem Icon={HomeOutlinedIcon} title="Home" />
            </Link>
            <Link to="/#about" smooth={true} spy="true" duration={1000}>
                <SidebarItem Icon={PersonOutlineIcon} title="About" />
            </Link>
            <Link to="/#skills" smooth={true} spy="true" duration={1000}>
                <SidebarItem Icon={ExtensionOutlinedIcon} title="Skills" />
            </Link>
            <Link to="/#education" smooth={true} spy="true" duration={1000}>
                <SidebarItem Icon={SchoolOutlinedIcon} title="Education" />
            </Link>
            <Link to="/#contact" smooth={true} spy="true" duration={1000}>
                <SidebarItem Icon={ContactPhoneOutlinedIcon} title="Contact" />
            </Link>
        </div>
    )
}

export default Sidebar
