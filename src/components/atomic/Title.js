import styled from 'styled-components'

const Title = styled.div`
    width: 100%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    p{
        color:${props => props.pColor ? props.pColor : '#111'};
    }
    @media (max-width:991px){
        text-align: ${props => props.textAlign ? props.textAlign : ''};
    }
`

export default Title