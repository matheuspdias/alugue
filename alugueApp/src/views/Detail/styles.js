import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    backgroundColor: #FFF;
`;

export const SwiperContent = styled.View`
    flexDirection: row;
    height: 340px;
    width: 100%;
`;

export const HeaderContent = styled.View`
    paddingHorizontal: 20px;
    flexDirection: row;
    alignItems: center;
    width: 100%;
    marginTop: 20px;
`;

export const View = styled.View``;

export const HouseName = styled.Text`
    fontWeight: bold;
    fontSize: 18px;
    color: #4F4A4A;
`;

export const Rating = styled.Text`
    fontWeight: 500;
    fontSize: 9px;
    color: #4F4A4A;
`;

export const Price = styled.Text`
    paddingHorizontal: 20px;
    fontWeight: bold;
    fontSize: 16px;
    color: #000;
`;

export const Description = styled.Text`
    fontWeight: 500;
    paddingHorizontal: 20px;
    color: #B3AEAE;
    fontSize: 14px;
    lineHeight: 20px;
    marginTop: 20px;    
`;

export const Scroller = styled.ScrollView`
    paddingHorizontal: 15px;
    marginTop: 35px;
`;

export const Slide = styled.View`
    alignItems: center;
    justifyContent: center;
    backgroundColor: #FFF;
    height: 90px;
    width: 90px;
    marginRight: 20px;
`;

export const Image = styled.Image`
    width: 90px;
    height: 90px;
    borderRadius: 8px;
`;