import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import WindowSection from '../../components/WindowSection/windowsection';
import * as S from './styles';
import HomeVideo from '../../assets/video/homevideo.mp4';
import HomeImage from '../../assets/img/homeimg.jpg';

export default function Home(){

    const isMobile = useMediaQuery('(max-width:484px)');

    return (
        <WindowSection id='home'>

            {isMobile ? 
                <S.VideoContainer isMobile={isMobile}>
                    <S.HomeImg src={HomeImage} alt='image'/> 
                </S.VideoContainer>       
            :
                <S.VideoContainer isMobile={isMobile}>
                    <S.VideoHome isMobile={isMobile} loop autoPlay muted>
                        <source src={HomeVideo} type='video/mp4'/>
                    </S.VideoHome>
                </S.VideoContainer>
            }

            <S.TextOverlay isMobile={isMobile}>
                <S.HomeText isMobile={isMobile}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </S.HomeText>
            </S.TextOverlay>
        </WindowSection>
    )
}