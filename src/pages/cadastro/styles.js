import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Wrapper = styled.div`
    max-width: 1024px;
    margin: 0 auto;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const Column = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: flex-start;
    margin: 0 auto;

    form{
        max-width: 275px;
        margin: 16px 0 35px 0;

        button{
            margin-top: 25px;
        }
    }
`

export const Heading = styled.h1`
    color: #FFF;
    font-weight: bold;
    font-size: 2rem;
`

export const Title = styled.h2`
    color: #FFF;
    font-size: 1.8rem;
    margin-bottom: 16px;
`
export const SubTitle = styled.span`
    color: #FFF;
    font-size: 1.135rem;
    margin-bottom: 16px;
    max-width: 400px;
`

export const Small = styled.span`
    font-size: 0.875rem;
`

export const LinkLogin =styled.a`
    color: #23DD7A;
    font-weight: bold;
    cursor: pointer;
`
