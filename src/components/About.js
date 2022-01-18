import React from 'react'
import styled from 'styled-components'
import img1 from '../assets/image/img1.jpg'

function About() {
    return (
        <AboutWrap id='about'>
            <Row>
                <Col50>
                    <TitleText>
                        <span>A</span>
                        bout Us
                    </TitleText>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        <br />
                        <br />
                         Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.
                    </p>
                </Col50>
                <Col50>
                    <ImgBox >
                        <img src={img1} alt="" />
                    </ImgBox>
                </Col50>
            </Row>
        </AboutWrap>
    )
}

export default About


const AboutWrap = styled.div`
    padding:100px;
    @media (max-width:991px){
        padding:82px 20px 20px;
    }
`
const Row = styled.div`
    position:relative;
    width: 100%;
    display:flex;
    justify-content: space-between;
    @media (max-width:991px){
       flex-direction: column;
    }
`
const Col50 = styled.div`
    position:relative;
    width: 48%;
    @media (max-width:991px){
        width: 100%;
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
`
const ImgBox = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 300px;
    img{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit:cover;
    }

    @media (max-width:991px){
        height: 300px;
        margin-top: 20px;
    }
`
