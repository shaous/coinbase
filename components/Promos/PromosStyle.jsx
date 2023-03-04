import styled from "styled-components";

const Wrapper = styled.div`
    margin-top: 2rem;
    padding-right: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

const OfferCard = styled.div`
    width: 21rem;
    height: 11rem;
    display: flex;
    flex-direction: column;
    border: 1px solid #00adb5;
    border-radius: 0.8rem !important;
    margin-bottom: 1rem;
    padding: 1.5rem;
`

const Title = styled.div`
    font-size: 1.5rem;
    margin-bottom: 0.1rem;
`

const Description = styled.div`
padding-top: 1rem;
    font-size: 1.1rem;
`

const Placeholder = styled.div`
    flex: 1;
`

const Additional = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.1rem;

    & > span {
        color: #00fff5;
        font-size: 1rem;
    }
`

export { Wrapper, OfferCard, Title, Description, Placeholder, Additional }