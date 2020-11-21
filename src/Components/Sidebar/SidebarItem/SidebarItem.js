import React from 'react'

import './SidebarItem.css'

function SidebarItem({ Icon, title}) {
    return (
        <div className="sidebarItem">
            <Icon />
            <h4 className="border">{title}</h4>
        </div>
    )
}

export default SidebarItem
