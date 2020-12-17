import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    flexDirection: row;
    width: 260px;
    height: 70px;
    backgroundColor: #FFF;
    elevation: 2;
    padding: 6px;
    marginVertical: 5px;
    marginRight: 20px;
    marginLeft: 2px;
    borderRadius: 10px;
`;

export const View = styled.View``;

export const Cover = styled.Image`
    borderRadius: 10px;
    width: 60px;
    height: 60px;
`;

export const Content = styled.View`
    width: 65%;
    justifyContent: flex-end;
    paddingHorizontal: 10px;
    height: 100%;
`;

export const Description = styled.Text`
    fontSize: 9px;
    fontWeight: 500;
`;

export const Price = styled.Text`
    fontSize: 12px;
    fontWeight: bold;
`;