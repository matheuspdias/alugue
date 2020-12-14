import styled from 'styled-components/native';

export const ContainerScroll = styled.ScrollView`
    backgroundColor: #FFF;
`;

export const Header = styled.View`
    paddingHorizontal: 15px;
    flexDirection: row;
    alignItems: center;
    justifyContent: center;
    width: 100%;
    marginVertical: 20px;

`;

export const InputArea = styled.View`
    paddingHorizontal: 15px;
    flexDirection: row;
    alignItems: center;
    width: 95%;
    backgroundColor: #FFF;
    elevation: 2;
    paddingHorizontal: 10px;
    height: 37px;
    borderRadius: 10px;
`;

export const TextInput = styled.TextInput`
    font-family: Montserrat-Medium;
    paddingHorizontal: 10px;
    fontSize: 13px;
    width: 90%;
`;

export const ContentNew = styled.View`
    flexDirection: row;
    width: 100%;
    alignItems: center;
`;

export const Title = styled.Text`
    paddingHorizontal: 15px;
    fontFamily: Montserrat-Bold;
    font-weight: bold;
    fontSize: 18px;
    alignItems: center;
`;

export const Scroller = styled.ScrollView`
    paddingHorizontal: 15px;
`;