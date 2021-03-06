import styled from 'styled-components'

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

export default ImgBox