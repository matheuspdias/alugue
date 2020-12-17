import styled from  'styled-components/native';

export const Container = styled.ImageBackground`
    height: 130px;
    width: 230px;
    marginRight: 20px;
    marginBottom: 40px;
    opacity: 0.8;
    backgroundColor: #000;
    marginLeft: 3px;
    padding: 12px;
    marginTop: 20px;
`;

export const Touchable = styled.TouchableOpacity``;

export const NameHouse = styled.Text`
    fontWeight: bold;
    color: #FFF;
    fontSize: 15px;
    ${{
        textShadowOffset: '1px 2px',
        textShadowColor: 'black',
        textShadowRadius: 3
    }}
`;

export const Offer = styled.Text`
    fontSize: 12px;
    color: #FFF;
    fontWeight: bold;
    ${{
        textShadowOffset: '1px 2px',
        textShadowColor: 'black',
        textShadowRadius: 3
    }}
`;


