import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    background-color: #fafafa;

    display: flex;
    align-items: center;
    justify-content: center;
`


export const Content = styled.div`
    max-width: 70%;
    background-color: #ccc;
    /* min-height: 350px; */
    padding: 20px;

`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

export const Footer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
    background-color: #cccc;

    a{
        text-decoration: none;
        color: #000;
        margin-left: .5rem;
        transition: opacity .5s ease-in-out;
        &:hover{
            opacity: .6;
        }
    }


`