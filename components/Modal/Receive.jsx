import { useState, useEffect } from 'react'

import styled from 'styled-components'
import { urlFor } from '../../lib/sanity'
import { BiCopy } from 'react-icons/bi'
import { TiTick } from 'react-icons/ti'


function Receive({ setAction, address, selectedToken })
{

    const [copied, setCopied] = useState(false)

    return (
        <Wrapper>
            <Content>
                <QrContainer>
                    <img src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${address}`} />
                </QrContainer>
                <Divider />
                <Row>
                    <CoinSelectList>
                        <Icon>
                            <img src={urlFor(selectedToken.logo)} />
                        </Icon>
                        <CoinName>{selectedToken.name}</CoinName>
                    </CoinSelectList>
                </Row>
                <Divider />
                <Row>
                    <div>
                        <Title>{selectedToken.symbol} Address</Title>
                        <Address>{address}</Address>
                    </div>
                    <CopyButton onClick={() =>
                    {
                        navigator.clipboard.writeText(address)
                        setCopied(true)
                    }}>
                        {copied ? <TiTick size={35} color='#00fff5' /> : <BiCopy size={35} />}
                    </CopyButton>
                </Row>
            </Content>
        </Wrapper>
    )
}

export default Receive

const Wrapper = styled.div`
    height: 100%;
`

const Content = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    border: 1px solid #00fff5;
    border-radius:0.5rem;
`

const QrContainer = styled.div`
    display: grid;
    place-items: center;
    flex: 1;
`

const Divider = styled.div`
    border-bottom: 1px solid #00adb5;
`

const Row = styled.div`
  display: flex;
  width: 100%;
  padding: 1rem;
  align-items: center;
  justify-content: space-between;
  color: #00adb5;
  font-size: 1.2rem;
`

const Icon = styled.div`
  margin-right: 1rem;
  height: 1.8rem;
  width: 1.8rem;
  border-radius: 50%;
  overflow: hidden;
  display: grid;
  place-items: center;
  & > img {
    height: 90%;
    width: 90%;
    object-fit: cover;
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
  flex: 1;
  border: none;
  background: none;
  outline: none;
  color: #00fff5;
  font-size: 1.2rem;
  text-wrap: wrap;
  margin-right: 0.5rem;
`

const Title = styled.div`
  color: #00fff5;
  margin-bottom: 0.5rem;
`

const Address = styled.div`
  font-size: 0.8rem;
`

const CopyButton = styled.div`
  cursor: pointer;
  transform: translateX(-35px) translateY(5px);
`