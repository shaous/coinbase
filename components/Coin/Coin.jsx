import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import { Wrapper, NameCol, CoinIcon, Primary, Secondry, MenuWrapper, MenuWrap, MenuItem } from './CoinStyle'
import { BsThreeDotsVertical, BsCoin, BsClipboardData } from 'react-icons/bs'
import { AiOutlinePushpin, AiOutlineCloseCircle } from "react-icons/ai"
import { CiBookmarkRemove } from 'react-icons/ci'

function Coin({ coin })
{

    const [points, setPoints] = useState({ x: 0, y: 0, })
    const [showMenu, setShowMenu] = useState(false)

    return (
        <Wrapper onContextMenu={(e) =>
        {
            e.preventDefault()
            setPoints({ x: e.pageX, y: e.pageY })
        }}>
            <div>
                <div style={{ flex: 3 }}>
                    <NameCol>
                        <CoinIcon>
                            <Image src={coin.logo} width='40' />
                        </CoinIcon>
                        <div style={{ marginLeft: '10px' }}>
                            <Primary>{coin.name}</Primary>
                            <Secondry>{coin.sign}</Secondry>
                        </div>
                    </NameCol>
                </div>
                <div style={{ flex: 2 }}>
                    <Primary>
                        $ {coin.balanceUsd}
                    </Primary>
                    <Secondry style={{ fontSize: '1rem' }}>{coin.balanceCoin} {coin.sign}</Secondry>
                </div>
                <div style={{ flex: 1.5 }}>
                    <Primary>$ {coin.priceUsd}</Primary>
                    <div style={{ color: coin.change < 0 ? '#f0616d' : '#26ad75' }}>
                        {coin.change > 0 && '+'}
                        {coin.change}%
                    </div>
                </div>
                <div style={{ flex: 1.5 }}>
                    {coin.allocation}%
                </div>
                <div style={{ flex: 0.5, display: 'flex', justifyContent: 'flex-end', zIndex: 1, cursor: 'pointer' }}>
                    {!showMenu ? <BsThreeDotsVertical size={20} onClick={() => setShowMenu(!showMenu)} /> : <AiOutlineCloseCircle size={20} onClick={() => setShowMenu(!showMenu)} />}
                </div>
            </div>
            {showMenu &&
                (
                    <MenuWrapper>
                        <MenuWrap top={points.y} left={points.x}>
                            <MenuItem><AiOutlinePushpin size={20} style={{ paddingRight: '1rem' }} /> Pin</MenuItem>
                            <MenuItem><BsCoin size={20} style={{ paddingRight: '1rem' }} /> {coin.name} Website</MenuItem>
                            <MenuItem><BsClipboardData size={20} style={{ paddingRight: '1rem' }} />Copy Statistics</MenuItem>
                            <MenuItem style={{ color: '#f0616d' }}><CiBookmarkRemove size={23} style={{ paddingRight: '1rem' }} /> Remove</MenuItem>
                        </MenuWrap>
                    </MenuWrapper>
                )
            }
        </Wrapper>
    )
}

export default Coin