import React, { useState } from 'react'
import Image from 'next/image'

import { Wrapper, LogoContainer, Logo, NavItemsContainer, NavItem, NavIcon, NavTitle } from './SidebarStyle'
import AppLogo from '../../assets/cb-logo.png'
import { navItems } from '../../static/navItems'

function Sidebar()
{

    const [activeItem, setActiveItem] = useState(navItems[0].title)

    return (
        <Wrapper>
            <LogoContainer>
                <Logo>
                    <Image src={AppLogo} width='150' />
                </Logo>
            </LogoContainer>
            <NavItemsContainer>
                {navItems.map((item, index) => (
                    <NavItem key={index} onClick={() => setActiveItem(item.title)} style={{ backgroundColor: item.title === activeItem && '#00adb5' }}>
                        <NavIcon style={{ backgroundColor: item.title === activeItem && '#00adb5' }}>
                            {item.icon}
                        </NavIcon>
                        <NavTitle style={{ color: item.title === activeItem && '#0a0d11' }}>
                            {item.title}
                        </NavTitle>
                    </NavItem>
                ))}
            </NavItemsContainer>
        </Wrapper>
    )
}

export default Sidebar