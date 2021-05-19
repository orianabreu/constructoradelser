import styled from 'styled-components';

export const Container = styled.header`
  position: fixed;
  z-index: 100;
  width:100vw;
  padding: ${({theme})=>theme.scale.base}px ${({theme})=>theme.scale.base*2}px;
  background-color: ${({theme}) => theme.palette.primary};
  display:flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoContainer = styled.div`
  img {
    height: ${({theme})=>theme.scale.base*6}px;    
    cursor: pointer; 
    margin-top: ${({theme, isMobile})=> isMobile && theme.scale.base}px;
  }
`;

export const NavList = styled.ul`
    list-style:none;
    display:flex;
    
    li {
      margin-left: ${({theme})=>theme.scale.base*3}px;
      padding: ${({theme})=>theme.scale.base}px;
      transition: all 0.2s;
      cursor: pointer;
      
      &:hover{
        background-color: ${({theme})=>theme.palette.secondary};
        
        a {
          color: ${({theme})=>theme.palette.light};
        }
      }
      
      a {
        text-decoration: none;
        color: ${({theme})=>theme.palette.light};
        font-family: ${({theme})=>theme.fonts.primary};
        font-size: ${({theme})=>theme.scale.paragraph};
        text-transform: uppercase;
        letter-spacing: 1px;
      }
    }
`;