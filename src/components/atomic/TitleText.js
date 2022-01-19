import styled from 'styled-components'

const TitleText = styled.div`
    color:${props => props.color ? props.color : '#111'};
    font-size:2em;
    font-weight:300;
    span{
        color:#ff0157;
        font-weight: 700;
        font-size: 1.5em;
    }
    
`

export default TitleText