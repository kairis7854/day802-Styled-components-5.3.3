import React from 'react'
import styled from 'styled-components'
import { Wrap, Title, TitleText, ImgBox } from './atomic'
import menu1 from '../assets/image/menu1.jpg'
import menu2 from '../assets/image/menu2.jpg'
import menu3 from '../assets/image/menu3.jpg'
import menu4 from '../assets/image/menu4.jpg'
import menu5 from '../assets/image/menu5.jpg'
import menu6 from '../assets/image/menu6.jpg'



function Menu() {
    return (
        <Wrap id='menu'>
            <Title>
                <TitleText>Our <span>M</span>enu</TitleText>
                <p>dolor sit amet, consectetur adipisicing elit</p>
            </Title>
            <Content>
                <Box>
                    <ImgBox>
                        <img src={menu1} alt="" />
                    </ImgBox>
                    <Text>
                        <h3>Special Salads</h3>
                    </Text>
                </Box>
                <Box>
                    <ImgBox>
                        <img src={menu2} alt="" />
                    </ImgBox>
                    <Text>
                        <h3>Special Soup</h3>
                    </Text>
                </Box>
                <Box>
                    <ImgBox>
                        <img src={menu3} alt="" />
                    </ImgBox>
                    <Text>
                        <h3>Special Pasta</h3>
                    </Text>
                </Box>
                <Box>
                    <ImgBox>
                        <img src={menu4} alt="" />
                    </ImgBox>
                    <Text>
                        <h3>Special Salads</h3>
                    </Text>
                </Box>
                <Box>
                    <ImgBox>
                        <img src={menu5} alt="" />
                    </ImgBox>
                    <Text>
                        <h3>Special Soup</h3>
                    </Text>
                </Box>
                <Box>
                    <ImgBox>
                        <img src={menu6} alt="" />
                    </ImgBox>
                    <Text>
                        <h3>Special Pasta</h3>
                    </Text>
                </Box>
            </Content>
            <Title>
                <Btn>View All</Btn>
            </Title>
        </Wrap>
    )
}

export default Menu

const Content = styled.div`
    display: flex;
    justify-content:center;
    flex-direction:row-reverse;
    flex-wrap:wrap;
    margin-top:40px;
    @media (max-width:991px){
        margin-top:20px;
    }
`
const Box = styled.div`
    width: 340px;
    margin:20px;
    border:15px solid #fff;
    box-shadow:0 5px 35px rgba(0,0,0,.08);
    @media (max-width:991px){
        margin:10px;
    }
`

const Text = styled.div`
    padding:15px 0 5px ;
    h3{
        font-size: 1.17em; 
        margin: .83em 0;
        font-weight:400;
        color:#111;
    }
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