import React from 'react'
import styled from 'styled-components'
import Portfolio from './Portfolio/Portfolio'
import Promos from './Promos/Promos'

function Main({ address, sanityTokens, thirdWebTokens })
{
    return (
        <Wrapper>
            <Portfolio address={address} sanityTokens={sanityTokens} thirdWebTokens={thirdWebTokens} />
            <Promos address={address} sanityTokens={sanityTokens} thirdWebTokens={thirdWebTokens} />
        </Wrapper>
    )
}

export default Main

const Wrapper = styled.div`
    display: flex;
    max-height: calc(100vh - 64px);
    overflow: hidden;
    overflow-y: scroll;

    & div {
        border-radius: 0.4rem;
    }
`