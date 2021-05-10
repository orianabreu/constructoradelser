import React, {useState} from 'react';
import * as S from './styles';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

export default function Drawer(){
    const [isOpen,setIsOpen] = useState(false);
    return (
        <S.IconContainer>
            <MenuIcon onClick={()=>setIsOpen(true)}/>
            <S.Overlay isOpen={isOpen} onClick={()=>setIsOpen(false)} />
            <S.OptionsContainer isOpen={isOpen}>
                <S.Row justify='flex-end'>
                    <CloseIcon onClick={()=>setIsOpen(false)}/>
                </S.Row>
                <S.Row><a href='#home' onClick={()=> {
                    setIsOpen(false);
                }}>Home</a></S.Row>
                <S.Row><a href='#services' onClick={()=> {
                    setIsOpen(false);
                }}>Servicios</a></S.Row>
                <S.Row><a href='#knowus' onClick={()=> {
                    setIsOpen(false);
                }}>Quienes somos</a></S.Row>
            </S.OptionsContainer>
        </S.IconContainer>
    )
}