import React from 'react'
import Swiper from 'react-native-swiper';
import * as S from './styles';

export default () => {
    return (
        <Swiper
            dot={<S.SwipeDot />}
            activeDot={<S.SwipeDotActive />}
            autoplay={true}
        >
            <S.Slide>
                <S.ImageSlide 
                    source={require('../../assets/images/house1.jpg')}
                />
            </S.Slide>

            <S.Slide>
                <S.ImageSlide 
                    source={require('../../assets/images/house2.jpg')}
                />
            </S.Slide>

            <S.Slide>
                <S.ImageSlide 
                    source={require('../../assets/images/house3.jpg')}
                />
            </S.Slide>
            
        </Swiper>
    )
}
