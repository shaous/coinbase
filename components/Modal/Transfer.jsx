import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { IoIosWallet } from 'react-icons/io'
import { urlFor } from '../../lib/sanity'

function Transfer({ selectedToken, setAction, address, thirdWebTokens })
{

    const [amount, setAmount] = useState(0)
    const [recipient, setRecipient] = useState('')
    const [activeThirdWebToken, setActiveThirdWebToken] = useState()
    const [balance, setBalance] = useState('Fetching...')

    useEffect(() =>
    {
        console.log('transfer token', selectedToken)
        const activeToken = thirdWebTokens.find(token => token.address === selectedToken.contractAddress)
        console.log('active token', activeToken)

        setActiveThirdWebToken(activeToken)
    }, [thirdWebTokens, selectedToken])

    useEffect(() =>
    {
        const getBalance = async () =>
        {
            const balance = await activeThirdWebToken.balanceOf(address)
            setBalance(balance.displayValue)
        }

        if (activeThirdWebToken)
        {
            getBalance()
        }

    }, [activeThirdWebToken])


    const sendToken = async (amount, recipient) =>
    {
        setAction('transferring')
        if (activeThirdWebToken && amount && recipient)
        {
            const tx = await activeThirdWebToken.transfer(recipient, amount.toString().concat('000000000000000000'))
            console.log(tx)

            setAction('transferrd')
        } else
        {
            console.error('We Missed Data!')
        }
    }

    return (
        <Wrapper>
            <Amount>
                <FlexInputContainer>
                    <FlexInput type='number' placeholder='0' value={amount} onChange={(e) => setAmount(e.target.value)} />
                    <span>{selectedToken.symbol}</span>
                </FlexInputContainer>
                <Warning style={{ color: amount && '#00adb5' }}>For Send Process, Amount Field Is Required!</Warning>
            </Amount>

            <TransferForm>
                <Row>
                    <FieldName>To</FieldName>
                    <Icon>
                        <IoIosWallet size={30} />
                    </Icon>
                    <Recipient placeholder='Wallet Address' value={recipient} onChange={(e) => setRecipient(e.target.value)} />
                </Row>
                <Divider />
                <Row>
                    <FieldName>Pay With:</FieldName>
                    <CoinSelectList onClick={() => setAction('select')}>
                        <CoinName>{selectedToken.name}</CoinName>
                        <Icon>
                            <img src={urlFor(selectedToken.logo)} />
                        </Icon>
                    </CoinSelectList>
                </Row>
            </TransferForm>
            <Row>
                <Continue onClick={() => sendToken(amount, recipient)}>Continue</Continue>
            </Row>
            <Row>
                <BalanceTitle>{selectedToken.symbol} Balance:</BalanceTitle>
                <Balance>{balance} {selectedToken.symbol}</Balance>
            </Row>
        </Wrapper>
    )
}

export default Transfer

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
`

const Amount = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`

const Warning = styled.div`
  padding: 1rem 0 2rem 0;
  text-align: center;
  color: #00fff5;
`

const FlexInputContainer = styled.div`
    display: flex;
    align-items: flex-end;
    flex: 1;

    & > span {
        font-size: 3rem;
        margin-bottom: 0.5rem;
        color: #00adb5;
        margin-bottom: 0.8rem;
    }
`

const FlexInput = styled.input`
    border: none;
    outline: none;
    background: none;
    color: #00fff5;
    padding-bottom: 0;
    font-size: 5rem;
    text-wrap: wrap;
    text-align: right;
    max-width: 45%;
    margin-right: 1rem;

    &::-webkit-outer-spin-button,
     ::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }

    &::placeholder{
        color: #00fff5;
    }
`

const Divider = styled.div`
    border-bottom: 2px solid #00adb5;
`

const TransferForm = styled.div`
  border: 2px solid #00fff5;
  border-radius: 0.4rem;
`

const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #00adb5;
    padding: 1rem 0;
    font-size: 1.2rem;
`

const FieldName = styled.div`
    flex: 0.5;
    padding-left: 2rem;
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

const Recipient = styled.input`
    flex: 1;
    border: none;
    outline: none;
    background: none;
    color: #00fff5;
    font-size: 1.2rem;
    text-wrap: wrap;
    margin-right: 0.5rem;

    &::placeholder {
        color: #00fff5;
    }
`

const CoinSelectList = styled.div`
    height: 100%;
    display: flex;
    flex: 1.3;

    &:hover {
        cursor: pointer;
    }
`

const CoinName = styled.div`
    /* flex: 1; */
    border: none;
    outline: none;
    background: none;
    color: #00fff5;
    font-size: 1.2rem;
    text-wrap: wrap;
    margin-right: 0.5rem;
`

const Continue = styled.button`
    width: 100%;
    color: #0a0d11;
    background-color: #00fff5;
    border: none;
    padding: 1rem;
    text-align: center;
    border-radius: 0.5rem;
    font-size: 1.2rem;
    transition: all ease-in-out 0.2s;
    &:hover {
        cursor: pointer;
        transform: scale(1.025);
    }
`

const BalanceTitle = styled.div``

const Balance = styled.div``