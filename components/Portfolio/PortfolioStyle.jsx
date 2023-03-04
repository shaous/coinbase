import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex: 1;
`

const Content = styled.div`
    width: 95%;
    height:1220px ;
    padding: 2rem 1rem;
`

const Chart = styled.div`
    border: 2px solid #00adb5;
    border-radius: 0.5rem;
    padding: 1rem 2rem;
    height: 450px;
`

const Balance = styled.div``

const BalanceTitle = styled.div`
    color: #00fff5;
    font-size: 0.9rem;
`

const BalanceValue = styled.div`
    font-size: 1.8rem;
    margin: 0.5rem 0;
`

const PortfolioTable = styled.div`
    margin-top: 1rem;
    border: 2px solid #00adb5;
    margin-top: 2rem;
`

const Table = styled.table`
    width: 100%;
`

const TableRow = styled.tr`
    width: 87%;
    display: flex;
    justify-content: center;

    & > th {
        text-align: left;
    }
`

const TableItem = styled.div`
    padding: 1rem 2rem;
`

const Divider = styled.div`
    border-bottom: 1px solid #00adb5;
`

const Title = styled.div`
    font-size: 1.5rem;
`

export { Wrapper, Content, PortfolioTable, Table, TableRow, TableItem, Divider, Title, Chart, Balance, BalanceTitle, BalanceValue }