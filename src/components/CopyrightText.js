import React from 'react'
import styled from 'styled-components'

function CopyrightText() {
    return (
        <CopyRightTextWrap>
            <p>Copyright 2022 <a href='https://kairis7854.github.io/day802-Styled-components-5.3.3/'>Kawauso</a>. All Right Reserved</p>
        </CopyRightTextWrap>
    )
}

export default CopyrightText

const CopyRightTextWrap = styled.div`
    padding:8px 40px;
    border-top: 1px solid rgba(0,0,0,.1);
    text-align: center;
    p{
        color:#333;
    }
    a{
        color:#ff0157;
        font-weight: 500;
    }
`