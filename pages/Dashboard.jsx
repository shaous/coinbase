import React, { useEffect, useState } from 'react'
import Header from '../components/Header/Header'
import Main from '../components/Main'
import Sidebar from '../components/Sidebar/Sidebar'

import styled from 'styled-components'

import { ThirdwebSDK } from '@3rdweb/sdk'
import { useContract, useContractMetadata, useTokenBalance, useContractRead } from "@thirdweb-dev/react";
import { ethers } from 'ethers'
import { getTokenModule } from '@3rdweb/hooks'

const sdk = new ThirdwebSDK(
    new ethers.Wallet(
        process.env.NEXT_PUBLIC_METAMASK_KEY,
        ethers.getDefaultProvider(
            'https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'
        )
    )
)

function Dashboard({ address })
{

    const [sanityTokens, setSanityTokens] = useState([])
    const [thirdWebTokens, setThirdWebTokens] = useState([])

    // const { contract, status, isFetched } = useContract("0xaDA927b64C6ff1bF2801DCfd0EF4215680734959");
    // const { data: contractMetadata, isLoading } = useContractMetadata(contract);
    // const { data: balance, error } = useTokenBalance(contract);
    // const { data } = useContractRead(contract, "symbol")

    useEffect(() =>
    {
        const getSanityAndThirdwebTokens = async () =>
        {
            const coins = await fetch('https://8cl6eu7r.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22coins%22%5D%20%7B%0A%20%20name%2C%0A%20%20usdPrice%2C%0A%20%20contractAddress%2C%0A%20%20symbol%2C%0A%20%20logo%0A%7D')
            const sanityTokens = (await coins.json()).result
            setSanityTokens(sanityTokens)

            setThirdWebTokens(sanityTokens.map(token => sdk.getTokenModule(token.contractAddress)))
        }

        getSanityAndThirdwebTokens()
    }, [])

    // console.log('Sanity Tokens:', sanityTokens)
    console.log('ThirdWeb Tokens:', thirdWebTokens)
    // console.log('Contract Metadata:', status, isFetched, contractMetadata)
    // console.log('Token Balance:', balance)
    // console.log('Token Symbol:', data)

    return (
        <Wrapper>
            <Sidebar />
            <MainContainer>
                <Header address={address} sanityTokens={sanityTokens} thirdWebTokens={thirdWebTokens} />
                <Main address={address} sanityTokens={sanityTokens} thirdWebTokens={thirdWebTokens} />
            </MainContainer>
        </Wrapper>
    )
}

export default Dashboard

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    color: #00adb5;
    overflow: hidden;
`

const MainContainer = styled.div`
    flex: 1;
`