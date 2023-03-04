import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { urlFor } from '../../lib/sanity'
import { TiTick } from 'react-icons/ti'

function CoinItem({ token, sender, selectedToken, setAction, setSelectedToken, sanityTokens, thirdWebTokens })
{

    const [balance, setBalance] = useState('Fetching...')

    useEffect(() =>
    {
        const getBalance = async () =>
        {
            let activeThirdWebToken

            thirdWebTokens.map((thirdWebToken) =>
            {
                if (thirdWebToken.address === token.contractAddress)
                {
                    activeThirdWebToken = thirdWebToken
                }
            })
            const balance = await activeThirdWebToken.balanceOf(sender)
            return await setBalance(balance.displayValue)
        }
        getBalance()
    }, [])

    return (
        <Wrapper
            style={{ backgroundColor: selectedToken.name === token.name && '#00adb5', color: selectedToken.name === token.name && '#0a0d11' }}
            onClick={() =>
            {
                setSelectedToken(token)
                setAction('send')
            }}>
            <Main>
                <Icon>
                    <img src={urlFor(token.logo)} />
                </Icon>
                <NameDetails>
                    <Name>{token.name}</Name>
                    <Symbol>{token.symbol}</Symbol>
                </NameDetails>
            </Main>
            <Balance>
                {balance} {token.symbol}
            </Balance>
            <isSelected>
                {(selectedToken.contractAddress === token.contractAddress) && (
                    <TiTick size={35} color='#0a0d11' />
                )}
            </isSelected>
        </Wrapper>
    )
}

export default CoinItem

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem 0.5rem;
    color: #00fff5;
    margin-bottom: 0.5rem;
    border-radius: 0.5rem;
    transition: all ease-in-out 0.5s;

    &:hover {
        color: #0a0d11;
        background-color: #00adb5;
    }
`

const Main = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
`

const Icon = styled.div`
    width: 1.8rem;
    height: 1.8rem;
    margin-right: 1rem;
    border-radius: 25px;
    overflow: hidden;
    display: grid;
    place-items: center;
     & > img {
        width: 90%;
        height: 90%;
        object-fit: cover;
     }
`

const NameDetails = styled.div``

const Name = styled.div`
    font-size: 1.5;
    margin-bottom: 0.2rem;
`

const Symbol = styled.div`
    font-size: 0.9rem;
`

const Balance = styled.div``

const isSelected = styled.div`
    color: #0a0d11;
    margin-left: 0.5rem;
`