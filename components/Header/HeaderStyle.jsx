import styled from 'styled-components'

const Wrapper = styled.div`
    width: calc(100% - 3rem);
    padding: 1rem 1.5rem;
    border-bottom: 1px solid #00adb5;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Title = styled.div`
    font-size: 2rem;
    color: #00adb5;
    flex: 1;
`

const ButtonsContainer = styled.div`
    display: flex;
    gap: 25px;
`

const Button = styled.button`
    padding: 0.8rem;
    font-size: 1.3rem;
    border: 2px solid #00adb5;
    color: #00adb5;
    background-color: #0a0d11;
    border-radius: 0.8rem;
    transition: all ease-in-out 0.3s;

    &:hover {
        cursor: pointer;
        transform: scale(1.025);
    }
`

const WalletLink = styled.div`
    width: 9rem;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 0.8rem;
    border: 2px solid #00fff5;
    border-radius: 0.8rem;
    padding: 0 1rem;
    display: flex;
`

const WalletLinkTitle = styled.div`
    font-size: 1rem;
    margin-top: 0.3rem;
    color: #00fff5;    
`

const WalletAddress = styled.div`
    font-size: 0.8rem;
`

export { Wrapper, Title, ButtonsContainer, Button, WalletLink, WalletLinkTitle, WalletAddress }