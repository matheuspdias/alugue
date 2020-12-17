import React from 'react'
import * as S from './styles';
import { Search } from 'react-native-feather';
import { useNavigation } from '@react-navigation/native';

import New from '../../components/New';
import House from '../../components/House';
import Recommended from '../../components/Recommended';

export default () => {
    const navigation = useNavigation();

    return (
        <S.ContainerScroll showsVerticalScrollIndicator={false}>
            <S.Header>                
                <S.InputArea>
                    <Search color="#000" />
                    <S.TextInput placeholder="O que está procurando?" />
                </S.InputArea>
            </S.Header>

            <S.ContentNew>
                <S.Title>Novidades</S.Title>
            </S.ContentNew>

            <S.Scroller horizontal showsHorizontalScrollIndicator={false}>
                <New
                    cover={require('../../assets/images/house1.jpg')}
                    name="Casa de Praia"
                    description="Casa nova uma quadra do mar, lugar seguro e monitorado 24horas."
                    onPress={() => navigation.navigate('Detail')}
                />

                <New
                    cover={require('../../assets/images/house2.jpg')}
                    name="Rancho SP"
                    description="Casa nova uma quadra do mar, lugar seguro e monitorado 24horas."
                    onPress={() => navigation.navigate('Detail')}
                />

                <New
                    cover={require('../../assets/images/house3.jpg')}
                    name="Sitío Morumbi"
                    description="Casa nova uma quadra do mar, lugar seguro e monitorado 24horas."
                    onPress={() => navigation.navigate('Detail')}
                />

                <New
                    cover={require('../../assets/images/house4.jpg')}
                    name="Casa Floripa"
                    description="Casa nova uma quadra do mar, lugar seguro e monitorado 24horas."
                    onPress={() => navigation.navigate('Detail')}
                />
            </S.Scroller>
        
            <S.ViewProx>
                <S.Title style={{marginTop:20}}>Proximo de você</S.Title>
            </S.ViewProx>

            <S.Scroller horizontal showsHorizontalScrollIndicator={false}>
                <House
                    cover={require('../../assets/images/house4.jpg')}
                />

                <House
                    cover={require('../../assets/images/house5.jpg')}
                />

                <House
                    cover={require('../../assets/images/house6.jpg')}
                />
            </S.Scroller>
            
            <S.Title style={{marginTop: 20}}>Dica do dia</S.Title>

            <S.Scroller horizontal showsHorizontalScrollIndicator={false}> 
                <Recommended 
                    cover={require('../../assets/images/house1.jpg')}
                    name="Casa São Paulo"
                    offer="25%"
                />

                <Recommended 
                    cover={require('../../assets/images/house4.jpg')}
                    name="Casa Floripa"
                    offer="15%"
                />

                <Recommended 
                    cover={require('../../assets/images/house6.jpg')}
                    name="Rancho Praia"
                    offer="10%"
                />
            </S.Scroller>
        </S.ContainerScroll>
    )
}
