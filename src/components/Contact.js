import React from 'react'
import styled from 'styled-components'
import { TitleText } from './atomic'
import bg3 from '../assets/image/bg3.jpg'

function Contact() {
    return (
        <ContactWrap id='contact'>
            <Title>
                <TitleText> <span>C</span>ontact Us</TitleText>
                <p>Lorem ipsum dolor sit amet, consecteur adipisicing elit.</p>
            </Title>
            <ContactForm>
                <h3>Send Message</h3>
                <InputBox>
                    <input type='text' placeholder='Name'></input>
                </InputBox>
                <InputBox>
                    <input type='text' placeholder='Email'></input>
                </InputBox>
                <InputBox>
                    <textarea placeholder='Message'></textarea>
                </InputBox>
                <InputBox>
                    <input type='submit' value='Send'></input>
                </InputBox>
            </ContactForm>
        </ContactWrap>
    )
}

export default Contact

const ContactWrap = styled.div`
    background-image: ${bg3 ? `url(${bg3})` : null};
    background-size: cover;
    padding: 100px;
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
`
const ContactForm = styled.div`
    padding:75px 50px;
    background:#fff;
    box-shadow: 0 15px 50px rgba(0,0,0,.1);
    max-width: 500px;
    margin-top:50px;
    h3{
        color:#111;
        font-size: 1.2em;
        margin-bottom: 20px;
        font-weight: 500;
    }
    @media (max-width:991px){
      padding:35px 40px;
      margin-top: 20px;
      margin-bottom: 30px;
    }

`
const InputBox = styled.div`
    position: relative;
    width: 100%;
    margin-bottom: 20px;
    input,textarea{
        width: 100%;
        border:1px solid #555;
        padding:10px;
        color:#111;
        outline:none;
        font-size: 16px;
        font-weight:300;
        resize:none;
    }
    input[type='submit'] {
        font-size: 1em;
        color:#fff;
        background:#ff0157;
        display:inline-block;
        text-transform:uppercase;
        letter-spacing:2px;
        transition:.5s;
        max-width:100px;
        font-weight:500;
        border:none;
        cursor:pointer;
    }
`