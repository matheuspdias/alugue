import React from 'react';
import * as S from './styles';

export default (props) => {
    return (
        <S.Container onPress={props.onPress}>
            <S.View>
                <S.Cover 
                    source={props.cover}
                />
            </S.View>

            <S.Content>
                <S.Description>
                    DESCRICAO QUALQUER COISA AQUI
                </S.Description>
                <S.Price>
                    R$ 954,60
                </S.Price>
            </S.Content>
        </S.Container>
    )
}
