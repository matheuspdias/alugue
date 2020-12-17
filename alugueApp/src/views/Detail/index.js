import React from 'react'
import * as S from './styles'
import Stars from 'react-native-stars';

import SwiperComponent from '../../components/Swiper'
import Star from '../../assets/icons/star.svg';
import StarHalf from '../../assets/icons/star-half-outline.svg';
import StarOutline from '../../assets/icons/star-outline.svg';


export default () => {
    return (
        <S.Container>
            <S.SwiperContent>
                <SwiperComponent />
            </S.SwiperContent>

            <S.HeaderContent>
                <S.View style={{ width: '65%' }}>
                    <S.HouseName>Casa de praia</S.HouseName>
                </S.View>
                    <S.View style={{ width: '35%' }}>
                        <S.Rating>Avaliações</S.Rating>
                        <S.View style={{alignItems: 'center', flexDirection: 'row'}}>
                            <Stars 
                                default={4}
                                count={5}
                                half={true}
                                starSize={20}
                                fullStar={ <Star width={24} height={24} fill="#E7A74E" color="#E7A74E"   /> }
                                emptyStar={ <StarOutline width={24} height={24} fill="#FFF" color="#E7AE4E"  /> }
                                halfStar={ <StarHalf width={24} height={24} fill="#E7A74E" color="#E7A74E"  /> }
                            />
                    </S.View>
                </S.View>                
            </S.HeaderContent>

            <S.Price>R$ 1.200,20</S.Price>
            <S.Description>Casa nova uma quadra do mar, lugar seguro e monitorado 24horas.</S.Description>
            
            <S.Scroller horizontal showsHorizontalScrollIndicator={false}>
                <S.Slide>
                    <S.Image 
                        source={require('../../assets/images/house5.jpg')}
                    />
                </S.Slide>

                <S.Slide>
                    <S.Image 
                        source={require('../../assets/images/house2.jpg')}
                    />
                </S.Slide>

                <S.Slide>
                    <S.Image 
                        source={require('../../assets/images/house3.jpg')}
                    />
                </S.Slide>
            </S.Scroller>
        </S.Container>
    )
}
