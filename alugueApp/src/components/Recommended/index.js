import React from 'react'
import * as S from './styles';

export default (props) => {
    return (
        <S.Touchable onPress={props.onPress}>
                <S.Container            
                source={props.cover}
                blurRadius={3}
            >
                <S.NameHouse>{props.name}</S.NameHouse>
                <S.Offer>{props.offer} OFF</S.Offer>
            </S.Container>
        </S.Touchable>
    )
}
