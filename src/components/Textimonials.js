import React from 'react'
import styled from 'styled-components'
import { Title, TitleText } from './atomic'
import bg2 from '../assets/image/bg2.jpg'
import testi1 from '../assets/image/testi1.jpg'
import testi2 from '../assets/image/testi2.jpg'
import testi3 from '../assets/image/testi3.jpg'

function Textimonials() {
    return (
        <TextimonialsWrap id='testimonials' bg={bg2}>
            <Title pColor='#fff'>
                <TitleText color='white'>They <span>S</span>aid About Us</TitleText>
                <p>Lorem ipsum dolor sit amet, consecteur adipisicing elit.</p>
            </Title>
            <Content>
                <Box>
                    <ImgBox>
                        <img src={testi1} alt="" />
                    </ImgBox>
                    <Text>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</p>
                        <h3>Some Famous</h3>
                    </Text>
                </Box>
                <Box>
                    <ImgBox>
                        <img src={testi2} alt="" />
                    </ImgBox>
                    <Text>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</p>
                        <h3>Some Famous</h3>
                    </Text>
                </Box>
                <Box>
                    <ImgBox>
                        <img src={testi3} alt="" />
                    </ImgBox>
                    <Text>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</p>
                        <h3>Some Famous</h3>
                    </Text>
                </Box>
            </Content>
        </TextimonialsWrap>
    )
}

export default Textimonials

const TextimonialsWrap = styled.div`
    background-image: ${props => props.bg ? `url(${props.bg})` : null};
    background-size: cover;
    padding: 100px;
    @media (max-width:991px){
        padding:82px 20px 20px;
    }
`
const Content = styled.div`
    display: flex;
    justify-content:center;
    flex-direction:row;
    flex-wrap:wrap;
    margin-top:40px;
`
const Box = styled.div`
    width: 340px;
    margin:20px;
    padding:40px;
    background:#fff;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media (max-width:991px){
        margin:10px;
        padding:20px;
    }
`
const ImgBox = styled.div`
    position:relative;
    width: 80px;
    height: 80px;
    margin-bottom: 20px;
    border-radius:50%;
    overflow:hidden;
    img{
        position:absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit:cover;
    }
`
const Text = styled.div`
    text-align: center;
    p{
        color:#666;
        font-style: italic;
    }
    h3{
        margin-top:20px;
        font-size: 1em;
        font-weight:600;
        color:#ff0157;
    }
`