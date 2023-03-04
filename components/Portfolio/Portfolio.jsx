import React, { useEffect, useState } from 'react'

import
{
    Wrapper,
    Content,
    PortfolioTable,
    Table,
    TableRow,
    TableItem,
    Divider,
    Title,
    Chart,
    Balance,
    BalanceTitle,
    BalanceValue
} from "./PortfolioStyle"

import { coins } from '../../static/coins'
import Coin from '../Coin/Coin'
import BalanceChart from '../Balance Chart/BalanceChart'

function Portfolio({ address, sanityTokens, thirdWebTokens })
{

    const tokenToUsd = {}
    const [walletBalance, setWalletBalance] = useState(0)

    for (const token of sanityTokens)
    {
        tokenToUsd[token.contractAddress] = Number(token.usdPrice)
    }

    useEffect(() =>
    {
        const calculateToTotalBalance = async () =>
        {
            const totalBalance = await Promise.all(
                thirdWebTokens.map(async token =>
                {
                    const balance = await token.balanceOf(address)
                    return Number(balance.displayValue) * tokenToUsd[token.address]
                }
                )
            )
            setWalletBalance(totalBalance.reduce((acc , curr) => acc + curr ,0))
        }

        calculateToTotalBalance()
    }, [sanityTokens, thirdWebTokens])

    return (
        <Wrapper>
            <Content>
                <Chart>
                    <div>
                        <Balance>
                            <BalanceTitle>Portfolio Balance</BalanceTitle>
                            <BalanceValue>
                                {'$'}
                                {walletBalance.toLocaleString()}
                            </BalanceValue>
                        </Balance>
                    </div>
                    <BalanceChart />
                </Chart>
                <PortfolioTable>
                    <TableItem>
                        <Title>Your Assets</Title>
                    </TableItem>
                    <Divider />
                    <Table>
                        <TableItem>
                            <TableRow>
                                <div style={{ flex: 9 }}>Name</div>
                                <div style={{ flex: 6 }}>Balance</div>
                                <div style={{ flex: 4 }}>Price</div>
                                <div style={{ flex: 3 }}>Allocation</div>
                                <div style={{ flex: 0 }}>
                                    {/* <BsThreeDotsVertical /> */}
                                </div>
                            </TableRow>
                        </TableItem>
                        <Divider />
                        <div>
                            {coins.map(coin => (
                                <div>
                                    <Coin coin={coin} />
                                    <Divider />
                                </div>
                            ))}
                        </div>
                    </Table>
                </PortfolioTable>
            </Content>
        </Wrapper>
    )
}

export default Portfolio