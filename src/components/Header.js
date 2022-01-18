import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import menu from '../assets/image/menu.png'
import close from '../assets/image/close.png'


function Header() {
    const [headerState, setHeaderState] = useState(false)
    const [menuToggleState,setMenuToggleState] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 0 && headerState === false) { setHeaderState(true) }
            if (window.scrollY === 0) { setHeaderState(false) }
        }
        window.addEventListener('scroll', onScroll)
        return () => {
            window.removeEventListener('scroll', onScroll)
        }
    }, [headerState])

    const scrollToAnchor = (item) => {
        if (item) {
            let anchorElement = document.getElementById(item);
            if (anchorElement) { anchorElement.scrollIntoView({ block: 'start', behavior: 'smooth' }); }
        }
    }

    return (
        <HeaderWrap state={headerState}>
            <Logo state={headerState}>Food<span>.</span></Logo>
            <MenuToggle menuToggleState={menuToggleState} headerState={headerState} onClick={()=>{setMenuToggleState(!menuToggleState)}}></MenuToggle>
            <Navigation headerState={headerState} menuToggleState={menuToggleState}>
                <li onClick={() => { scrollToAnchor('home') ;setMenuToggleState(!menuToggleState)}}>Home</li>
                <li onClick={() => { scrollToAnchor('about') ;setMenuToggleState(!menuToggleState)}}>About</li>
                <li onClick={() => { scrollToAnchor('menu') ;setMenuToggleState(!menuToggleState)}}>Menu</li>
                <li onClick={() => { scrollToAnchor('expert') ;setMenuToggleState(!menuToggleState)}}>Expert</li>
                <li onClick={() => { scrollToAnchor('testimonials') ;setMenuToggleState(!menuToggleState)}}>Testimonials</li>
                <li onClick={() => { scrollToAnchor('contact') ;setMenuToggleState(!menuToggleState)}}>Contact</li>
            </Navigation>
        </HeaderWrap>
    )
}

export default Header

const HeaderWrap = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding:${props => props.state ? '10px 100px' : '40px 100px'};
    z-index: 10;
    display:flex;
    justify-content:space-between;
    align-items:center;
    background:${props => props.state ? '#fff' : 'null'};
    box-shadow:${props => props.state ? '0 5px 20px rgba(0,0,0,.5)' : ''};
    transition:0.5s;
    @media (max-width:991px){
        padding:10px 20px;
    }
`
const Logo = styled.div`
    color:${props => props.state ? '#111' : '#fff'};
    font-weight: 700;
    font-size: 2em;
    span{
        color:#ff0157;
    }
`
const MenuToggle = styled.div`
    display:none;
    @media (max-width:991px){
        display:block;
        position:relative;
        width: 40px;
        height: 40px;
        background-image: ${ props => props.menuToggleState ? `url(${close})` : `url(${menu})`};
        background-size: ${ props => props.menuToggleState ? '25px' : '30px'};
        background-repeat: no-repeat;
        background-position: center;
        cursor:pointer;
        filter: ${ props => props.headerState ? 'invert(1)' : null};
    }
`
const Navigation = styled.div`
    position:relative;
    display:flex;
    li{
        list-style:  none;
        margin-left:30px;
        font-weight: 300;
        color:${props => props.headerState ? '#111' : '#fff'};
        cursor: pointer;

        &:hover{
            color:#ff0157;
        }
    }

    @media (max-width:991px){
        width:${props => props.menuToggleState ? '100%' : null};
        height:${props => props.menuToggleState ? 'calc(100% - 60px)' : null};
        position:${props => props.menuToggleState ? 'fixed' : null};
        top: 60px;
        left: 0;
        display:${props => props.menuToggleState ? 'flex' : 'none'};
        justify-content:${props => props.menuToggleState ? 'center' : null};
        align-items:${props => props.menuToggleState ? 'center' : null};
        flex-direction:${props => props.menuToggleState ? 'column' : null};
        background:${props => props.menuToggleState ? '#fff' : null};
        li{
            color:#111;
            font-size: 1.6em;
            margin-bottom:10px;
        }
    }
`

