import React from 'react'
import styled from 'styled-components'
import bg from '../assets/image/bg.jpg'

function Banner() {
    return (
        <BannerWrap id='home'>
            <Content>
                <Title>Always Choose Good</Title>
                <Describe>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud.
                </Describe>
                <Btn as='a' href="#">Our Menu</Btn>
            </Content>
        </BannerWrap>
    )
}

export default Banner

const BannerWrap = styled.div`
    font-family: 'Poppins',sans-serif;
    position:relative;
    width: 100%;
    min-height:100vh;
    padding:100px;
    display:flex;
    justify-content: center;
    align-items:center;
    background-image:url(${bg});
    background-size: cover;
    @media (max-width:991px){
        padding:20px;
    }
`
const Content = styled.div`
    max-width:850px;
    text-align:center;
`
const Title = styled.h2`
    font-size:5em;
    margin-bottom:.2em;
    color:#fff;
    @media (max-width:991px){
        font-size: 3em;
    }
    @media (max-width:400px){
        font-size: 2.2em;
    }
`
const Describe = styled.div`
    color:#fff;
`
const Btn = styled.div`
    color:#fff;
    background:#ff0157;
    display:inline-block;
    padding:10px 30px;
    margin-top:20px;
    text-transform:uppercase;
    letter-spacing:2px;
    transition:0.5s;

    &:hover{
        letter-spacing:6px;
    }
`

