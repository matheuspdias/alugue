import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    marginTop: 20px;
    backgroundColor: #FFF;
    height: 250px;
    width: 200px;
    elevation: 2;
    borderRadius: 10px;
    padding: 15px;
    marginRight: 30px;
    marginLeft: 2px;
    marginBottom: 5px;
`;

export const Image = styled.Image`
    width: 170px;
    height: 110px;
    borderRadius: 10px;
`;

export const Content = styled.View`
    flexDirection: row;
    alignItems: center;
    marginVertical: 10px;
`;

export const Title = styled.Text`
    fontFamily: Montserrat;
    fontWeight: bold;
    color: #4F4A4A;
`;

export const Dot = styled.View`
    width: 4px;
    height: 4px;
    backgroundColor: red;
    borderRadius: 4px;
    marginHorizontal: 4px;
`;

export const Badge = styled.Text`
    color: red;
    fontSize: 9px;
    fontFamily: Montserrat;
    fontWeight: bold;
`;

export const Description = styled.Text`
    fontFamily: Montserrat-Regular;
    fontWeight: 400;
    fontSize: 10px;
    color: #4F4A4A;
`;

export const Footer = styled.View`
    flexDirection: row;
    marginTop: 5px;
    alignItems: center;
    width: 100%;
`;

export const PriceArea = styled.View`
    width: 80%;
`;

export const PriceText = styled.Text`
    fontSize: 15px;
    fontFamily: Montserrat;
    fontWeight: bold;
`;

export const ButtonInfoArea = styled.View`
    width: 20%;
`;

