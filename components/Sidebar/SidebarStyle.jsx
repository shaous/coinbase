import styled from "styled-components";

const Wrapper = styled.div`
    width: calc(22rem - 16px - 16px);
    height: calc(100vh);
    border-right: 1px solid #00adb5;
    padding: 0 1rem;
`

const LogoContainer = styled.div`
    margin: 1.5rem 0;
`

const Logo = styled.div`
    width: 45%;
    object-fit: contain;
    margin-left: 1.5rem;
`

const NavItemsContainer = styled.div`
    margin-top: 3rem;
    cursor: pointer;
`

const NavItem = styled.div`
    height: 4rem;
    display: flex;
    align-items: center;
    font-size: 2rem;
    font-weight: 500;
    border-radius: 0.5rem;
    margin-bottom: 1.5rem;
    transition: all ease-in-out 0.3s;

    &:hover {
        color: #0a0d11;
        background-color: #00adb5;
    }

    &:hover div {
        color: #0a0d11;
    }
`

const NavIcon = styled.div`
    color: #0a0d11;
    background-color: #00adb5;
    padding: 0.7rem;    
    border-radius: 50%;
    margin: 0 1rem;
    display: grid;
    place-items: center;
`

const NavTitle = styled.div`
    font-size: 1.5rem;
    color: #00adb5;
`

export { Wrapper, LogoContainer, Logo, NavItemsContainer, NavItem, NavIcon, NavTitle }