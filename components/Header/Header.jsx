import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Modal from 'react-modal'

import TransferModal from '../Modal/TransferModal'

import
{
    Wrapper,
    Title,
    ButtonsContainer,
    Button,
    WalletLink,
    WalletLinkTitle,
    WalletAddress
} from './HeaderStyle'
import { ConnectWallet } from '@3rdweb/react'

Modal.setAppElement('#__next')

function Header({ address, sanityTokens, thirdWebTokens })
{

    const router = useRouter()

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#0a0d11',
            border: '2px solid #00fff5',
            padding: 0,
            border: 'none',
        },
        overlay: {
            backgroundColor: 'rgba(10, 11, 13, 0.75)',
        },
    }

    return (
        <Wrapper>
            <Title>Assets</Title>
            <ButtonsContainer>
                {address ? (
                    <WalletLink>
                        <WalletLinkTitle>Wallet Connected</WalletLinkTitle>
                        <WalletAddress>{address.slice(0, 9)} ... {address.slice(35)}</WalletAddress>
                    </WalletLink>
                ) : (
                    <Button onClick={() => ConnectWallet('injected')}>
                        Connect Wallet
                    </Button>
                )}
                <Button style={{ backgroundColor: '#00adb5', color: '#0a0d11' }}>
                    Buy | Sell
                </Button>
                <Link href={'/?transfer=1'}>
                    <Button>Send | Receive</Button>
                </Link>
            </ButtonsContainer>
            <Modal isOpen={!!router.query.transfer} onRequestClose={() => { router.push('/') }} style={customStyles}>
                <TransferModal address={address} sanityTokens={sanityTokens} thirdWebTokens={thirdWebTokens} />
            </Modal>
        </Wrapper>
    )
}

export default Header