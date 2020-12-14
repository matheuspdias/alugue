import React from 'react'
import * as S from './styles';
import { PlusCircle } from 'react-native-feather';

export default (props) => {
    return (
        <S.Container onPress={props.onPress}>
            <S.Image source={props.cover} />

            <S.Content>
                <S.Title>{props.name}</S.Title>
                <S.Dot></S.Dot>
                <S.Badge>Novo</S.Badge>
            </S.Content>

            <S.Description>
                {props.description}
            </S.Description>

            <S.Footer>
                <S.PriceArea>
                    <S.PriceText>R$ 1.204,90</S.PriceText>
                </S.PriceArea>

                <S.ButtonInfoArea>
                    <PlusCircle color="#000" />
                </S.ButtonInfoArea>
            </S.Footer>
        </S.Container>
    )
}
