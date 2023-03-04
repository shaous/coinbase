import styled from 'styled-components'

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

    & > div {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem 2rem;
    }
`

const NameCol = styled.div`
    display: flex;
    align-items: center;
`

const CoinIcon = styled.div`
    width: 1.8rem;
    margin-right: 1rem;
`

const Primary = styled.div`
    margin-bottom: 0.1rem;
    color: #00fff5;
    font-weight: 300;
`

const Secondry = styled.div`
    color: #00adb5;
    font-size: 0.8rem;
    font-weight: 300;
`

const MenuWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
`

const MenuWrap = styled.div`
    width: 250px;
    height: 160px;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #0a0d11;
    border: 1px solid #00fff5;
    border-radius: 0.5rem;
    overflow: hidden;
    margin-left: 920px;
    z-index: 1;
`

const MenuItem = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-align: left;
    padding-left: 1.5rem;
    color: #00fff5;
    cursor: pointer;
    border-radius: 0.5rem;    

    &:hover {
        background-color: #00fff5;
        color: #0a0d11;
    }
`

export { Wrapper, NameCol, CoinIcon, Primary, Secondry, MenuWrapper, MenuWrap, MenuItem }