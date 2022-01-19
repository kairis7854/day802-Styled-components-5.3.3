import React from 'react'
import styled from 'styled-components'
import { Wrap, Title, ImgBox, TitleTextMedia991 } from './atomic'
import expert1 from '../assets/image/expert1.jpg'
import expert2 from '../assets/image/expert2.jpg'
import expert3 from '../assets/image/expert3.jpg'
import expert4 from '../assets/image/expert4.jpg'

function Expert() {
    return (
        <Wrap id='expert'>
            <Title textAlign='center'>
                <TitleTextMedia991>Our Kitchen <span>E</span>xpert</TitleTextMedia991>
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
        </Wrap>
    )
}

export default Expert

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
const Text = styled.div`
    padding:15px 0 5px ;
    h3{
        font-weight:400;
        color:#111;
    }
`
