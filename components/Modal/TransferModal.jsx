import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Triangle } from 'react-loader-spinner'
import { TiTick } from 'react-icons/ti'

import Transfer from './Transfer'
import Receive from './Receive'
import CoinSelector from './CoinSelector'

function TransferModal({ address, sanityTokens, thirdWebTokens })
{

  const [action, setAction] = useState('send')
  const [selectedToken, setSelectedToken] = useState(sanityTokens[0])


  console.log(sanityTokens)

  const selectedStyle = {
    color: "#00fff5",
    transition: 'all ease-out 0.8s'
  }

  const unSelectedStyle = {
    color: "#00adb5",
    transition: 'all ease-out 0.8s'
  }

  const selectedModal = option =>
  {
    switch (option)
    {
      case 'send':
        return <Transfer
          selectedToken={selectedToken}
          setAction={setAction}
          address={address}
          thirdWebTokens={thirdWebTokens} />
      case 'receive':
        return <Receive address={address} selectedToken={selectedToken} setAction={setAction} />
      case 'select':
        return (
          <CoinSelector
            setAction={setAction}
            selectedToken={selectedToken}
            setSelectedToken={setSelectedToken}
            sanityTokens={sanityTokens}
            thirdWebTokens={thirdWebTokens}
            address={address}
          />)
      case 'transferring':
        return (
          <div style={{
            width: '100%',
            height: '80%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            fontSize: '1.5rem'
          }}>
            <h2 style={{ color: '#00adb5' }}>Transferring...</h2>
            <Triangle
              height="100"
              width="100"
              color="#00fff5"
              ariaLabel="triangle-loading"
              visible={true}
            />
          </div>
        )
      case 'transferrd':
        return (
          <div style={{
            width: '100%',
            height: '90%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '2rem',
            color: '#00fff5'
          }}>
            Transfer Complete <TiTick size={55} color='#00fff5' />
          </div>
        )
      default:
        return <h2>This is send tab!</h2>
    }
  }

  return (
    <Wrapper>
      <Selector>
        <Option style={action === 'send' ? selectedStyle : unSelectedStyle} onClick={() => setAction('send')}>
          <p>Send</p>
        </Option>
        <Option style={action === 'receive' ? selectedStyle : unSelectedStyle} onClick={() => setAction('receive')}>
          <p>Receive</p>
        </Option>
      </Selector>
      <MainModal>
        {selectedModal(action)}
      </MainModal>
    </Wrapper>
  )
}

export default TransferModal

const Wrapper = styled.div`
  width: 27rem;
  height: 36rem;
  display: flex;
  flex-direction: column;
  color: #00adb5;
  border: 2px solid #00adb5;
  border-radius: 1rem;
`

const Selector = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 5rem;
`

const Option = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  font-size: 1.2rem;
  transition: all ease-out 0.8s;

  &:hover {
    cursor: pointer;
    border-bottom: 1px solid #00adb5;
  }
`

const MainModal = styled.div`
  padding: 1rem;
  flex: 1;
`