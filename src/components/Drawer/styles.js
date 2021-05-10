import styled from 'styled-components';

export const IconContainer = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;

    svg{
      font-size: ${({theme})=>theme.scale.h5};
    }   
`;

export const Overlay = styled.div`
    position:fixed;
    top:0;
    left:0;
    z-index:99;
    width:100vw;
    height:100vh;
    display:${({isOpen})=>isOpen?'flex':'none'};
    background-color: ${({theme})=>theme.palette.primary};
`;

export const OptionsContainer = styled.div`
  position:fixed;
  width:50vw;
  height:100vh;
  background-color: ${({theme})=>theme.palette.primary};
  right:${({isOpen})=>isOpen?'0%':'-100%'};
  top:0;
  z-index:100;
  transition: all 0.2s;
  display:flex;
  flex-direction: column;
`;

export const Row = styled.div`
  width:100%;
  height: ${({theme})=>theme.scale.base*6.6}px;
  display: flex;
  align-items: center;
  justify-content: ${({justify})=>justify || 'flex-start'};
  padding: 0 ${({theme})=>theme.scale.base*2}px;
  
  a {
   text-decoration: none;
   font-family: ${({theme})=>theme.fonts.primary};
   font-size: ${({theme})=>theme.scale.paragraph};
   text-transform: uppercase;
   color: ${({theme})=>theme.palette.dark};
  }
  
  svg{
    font-size: ${({theme})=>theme.scale.h3};
    margin-right: ${({theme})=>theme.scale.base*-1}px;
  }
`;