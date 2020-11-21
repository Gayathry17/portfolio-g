import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


import { NavHashLink as Link } from 'react-router-hash-link';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ExtensionOutlinedIcon from '@material-ui/icons/ExtensionOutlined';
import SchoolOutlinedIcon from '@material-ui/icons/SchoolOutlined';
import ContactPhoneOutlinedIcon from '@material-ui/icons/ContactPhoneOutlined';

import Img from '../../media/nav_svg.svg'
import './NavMenu.css'
import SidebarItem from '../Sidebar/SidebarItem/SidebarItem';


function NavMenu() {

    const [open, setOpen] = useState(false);

    const handleDrawer = (e) => {
        setOpen(!false);
        return false;
    }

    return (
        <div className="navmenu">
            <AppBar position="static" color="transparent" style={{zIndex: '120'}}>
                <Toolbar>
                <IconButton className="nav_toggler" onClick={handleDrawer} edge="start" color="inherit" aria-label="menu" >
                    <MenuIcon fontSize="large"/>
                </IconButton>
                </Toolbar>
            </AppBar>

            
            <SwipeableDrawer open={open} onClose={() => setOpen(!true)} className="drawer" onOpen={() => null}>
                <Link to="/#home" smooth={true} spy={true} duration={1000}>
                    <IconButton onClick={() => setOpen(!true)} color="inherit">
                        <SidebarItem Icon={HomeOutlinedIcon} title="Home" />
                    </IconButton>
                </Link>

                <Link to="/#about" smooth={true} spy={true} duration={1000}>
                    <IconButton onClick={() => setOpen(!true)} color="inherit">
                        <SidebarItem Icon={PersonOutlineIcon} title="About" />
                    </IconButton>
                    
                </Link>
                <Link to="/#skills" smooth={true} spy={true} duration={1000}>
                    <IconButton onClick={() => setOpen(!true)} color="inherit">
                        <SidebarItem Icon={ExtensionOutlinedIcon} title="Skills" />
                    </IconButton>
                </Link>

                <Link to="/#education" smooth={true} spy={true} duration={1000}>
                    <IconButton onClick={() => setOpen(!true)} color="inherit">
                        <SidebarItem Icon={SchoolOutlinedIcon} title="Education" />
                    </IconButton>
                </Link>

                <Link to="/#contact" smooth={true} spy={true} duration={1000}>
                    <IconButton onClick={() => setOpen(!true)} color="inherit">
                        <SidebarItem Icon={ContactPhoneOutlinedIcon} title="Contact" />
                    </IconButton>
                </Link>

                <img src={Img} alt="" className="drawer_img"/>
            </SwipeableDrawer>
        </div>
    )
}

export default NavMenu
