import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import * as S from './styles';
import Logo from '../../assets/img/logo.png';
import Isotipo from '../../assets/img/isotipo.png';
import Drawer from '../Drawer/Drawer';

export default function Header(){
    const isMobile = useMediaQuery('(max-width:484px)');
    return (
        <S.Container>
            {isMobile ?
                    <>
                    <S.LogoContainer isMobile={isMobile}>
                        <a href='#home'>
                            <img src={Isotipo} alt='isotipo_constructoradelser'/>
                        </a>
                    </S.LogoContainer>
                    <Drawer />
                    </>
                    :
                    <><S.LogoContainer>
                        <a href='#home'>
                            <img src={Logo} alt='logo_constructoradelser'/>
                        </a>
                    </S.LogoContainer>
                    <nav>
                        <S.NavList>
                            <li><a href='#home'>Home</a></li>
                            <li><a href='#services'>Servicios</a></li>
                            <li><a href='#knowus'>Quienes somos</a></li>
                        </S.NavList>
                    </nav></>
            }
        </S.Container>
    )
}