import React, { useState } from 'react'
import styled from 'styled-components'
import Coin from './CoinItem'

function CoinSelector({ setAction, selectedToken, setSelectedToken, sanityTokens, thirdWebTokens, address, })
{
    return (
        <Wrapper>
            <Title>Select Your <span>Token</span>!</Title>
            <CoinList>
                {sanityTokens.map((token) => (
                    <Coin
                        key={token.name}
                        token={token}
                        sender={address}
                        selectedToken={selectedToken}
                        setAction={setAction}
                        setSelectedToken={setSelectedToken}
                        sanityTokens={sanityTokens}
                        thirdWebTokens={thirdWebTokens}
                    />
                ))}
            </CoinList>
        </Wrapper>
    )
}

export default CoinSelector

const Wrapper = styled.div``

const Title = styled.div`
    width: 100%;
    text-align: center;
    font-size: 1.5rem;
    margin-bottom: 1rem;

    & > span {
        color: #00fff5;
    }
`

const CoinList = styled.div`
    display: flex;
    flex-direction: column;
`