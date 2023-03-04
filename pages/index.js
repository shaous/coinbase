import styled from 'styled-components'
import { Web3Button, useAddress, ConnectWallet } from "@thirdweb-dev/react";

import Dashboard from "./Dashboard"

export default function Home()
{

  const address = useAddress()

  return (
    <Wrapper>
      {address ? (
        <Dashboard address={address} />)
        : (
          <>
            <Notice>Please Connect Your Wallet For Continue...</Notice>
            <Web3Button
              contractAddress="0xb413df01580659F671471956e9D2fAe989d1dcd3"
              action={() => ConnectWallet('injected')}
              onSuccess={() => alert('was good...')}
              colorMode='light'
              accentColor='#00adb5'
              btnTitle='Connect Your Wallet'
            >
              Execute Action
            </Web3Button>
          </>)
      }
    </Wrapper>
  )
}


const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #0a0d11;
`

const Notice = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #00fff5;
`

const DetailWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Detail = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #00adb5;
`