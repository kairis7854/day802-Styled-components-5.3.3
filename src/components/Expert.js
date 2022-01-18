import React from 'react'
import styled from 'styled-components'
import expert1 from '../assets/image/expert1.jpg'
import expert2 from '../assets/image/expert2.jpg'
import expert3 from '../assets/image/expert3.jpg'
import expert4 from '../assets/image/expert4.jpg'

function Expert() {
    return (
        <ExpertWrap id='expert'>
            <Title>
                <TitleText>Our Kitchen <span>E</span>xpert</TitleText>
                <p>dolor sit amet, consectetur adipisicing elit</p>
            </Title>
            <Content>
                <Box>
                    <ImgBox>
                        <img src={expert1} alt="" />
                    </ImgBox>
                    <Text>
                        <h3>Someone Famous</h3>
                    </Text>
                </Box>
                <Box>
                    <ImgBox>
                        <img src={expert2} alt="" />
                    </ImgBox>
                    <Text>
                        <h3>Someone Famous</h3>
                    </Text>
                </Box>
                <Box>
                    <ImgBox>
                        <img src={expert3} alt="" />
                    </ImgBox>
                    <Text>
                        <h3>Someone Famous</h3>
                    </Text>
                </Box>
                <Box>
                    <ImgBox>
                        <img src={expert4} alt="" />
                    </ImgBox>
                    <Text>
                        <h3>Someone Famous</h3>
                    </Text>
                </Box>
            </Content>
        </ExpertWrap>
    )
}

export default Expert

const ExpertWrap = styled.div`
    padding:100px;
    @media (max-width:991px){
        padding:82px 20px 20px;
    }
`
const Title = styled.div`
    width: 100%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    @media (max-width:991px){
        text-align: center;
    }
`
const TitleText = styled.div`
    color:#111;
    font-size:2em;
    font-weight:300;
    span{
        color:#ff0157;
        font-weight: 700;
        font-size: 1.5em;
    }
    @media (max-width:991px){
        font-size:1.8em;
        line-height: 1.5em;
        margin-bottom: 15px;
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
    width: 250px;
    margin:15px;
`
const ImgBox = styled.div`
    position:relative;
    width: 100%;
    height: 300px;
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
    padding:15px 0 5px ;
    h3{
        font-weight:400;
        color:#111;
    }
`
