import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

export const Header = styled.View`
  border-color: #eee;
  align-items: center;
  padding-bottom: 20px;
  border-bottom-width: 1px;
`;

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  background: #eee;
  border-radius: 50px;
`;

export const Name = styled.Text`
  color: #333;
  font-size: 20px;
  margin-top: 10px;
  font-weight: bold;
  text-align: center;
`;

export const Bio = styled.Text`
  color: #999;
  margin-top: 5px;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
`;

export const Stars = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const Starred = styled.View`
  border-radius: 4px;
  padding: 10px 15px;
  background: #f5f5f5;
  margin-bottom: 20px;
  flex-direction: row;
  align-items: center;
`;

export const OwnerAvatar = styled.Image`
  width: 42px;
  height: 42px;
  background: #eee;
  border-radius: 21px;
`;

export const Info = styled.View`
  flex: 1;
  margin-left: 10px;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 1,
})`
  color: #333;
  font-size: 15px;
  font-weight: bold;
`;

export const Author = styled.Text`
  color: #666;
  font-size: 13px;
  margin-top: 2px;
`;
