import React from 'react'

import { Wrapper, OfferCard, Title, Description, Placeholder, Additional } from "./PromosStyle"

function Promos()
{
    return (
        <Wrapper>
            <OfferCard>
                <Title>
                    Yield earned
                </Title>
                <Description>
                    Crypto has changed a lot today, We suggest you evaluate it!
                </Description>
                <Placeholder />
                <Additional style={{fontSize : '1.8rem'}}>
                    -7.82% <span>In Just 4h</span>
                </Additional>
            </OfferCard>

            <OfferCard>
                <Title>
                    Learn & Earn
                </Title>
                <Description>To have better performance in trading, use the VIP package and take more detail of coins...</Description>
                <Placeholder />
                <Additional style={{color : '#00fff5'}}>
                    Go To VIP!
                </Additional>
            </OfferCard>
        </Wrapper>
    )
}

export default Promos