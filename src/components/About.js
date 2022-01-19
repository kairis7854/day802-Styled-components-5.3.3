import React from 'react'
import styled from 'styled-components'
import { Wrap, TitleText, ImgBoxMedia991 } from './atomic'
import img1 from '../assets/image/img1.jpg'

function About() {
    return (
        <Wrap id='about'>
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
                    <ImgBoxMedia991 >
                        <img src={img1} alt="" />
                    </ImgBoxMedia991>
                </Col50>
            </Row>
        </Wrap>
    )
}

export default About

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

