import Styled from 'styled-components';



export const StyledContainerH = Styled.div`
    height:100vh;
    background:#fff;
    width:100%;
    overflow:hidden;
    position: relative;
    overflow:hidden;
    padding-right: 15px;
    padding-left: 15px;
`

export const StyledRow = Styled.div`
    display:${props => props.slick ? "block" : "flex"};
    height:100%;
    width:100%;
    margin-right:-15px;
    margin-left:-15px;
    align-items:${props => props.align ? "center" : null};
`

export const StyledContainerV = Styled.div`
    min-height:100vh;
    background: #fff;
    width:100%;
    position: relative;
    overflow:hidden;
    padding-right: 15px;
    padding-left: 15px;
`