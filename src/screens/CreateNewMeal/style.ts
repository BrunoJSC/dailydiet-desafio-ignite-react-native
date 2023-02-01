import { ArrowLeft } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  height: 150px;

  align-items: center;
  justify-content: center;
  padding: 0 24px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`;

export const Button = styled.Pressable`
  align-self: flex-start;
`;

export const Icon = styled(ArrowLeft).attrs(({ theme }) => ({
  color: theme.COLORS.GRAY_100,
}))``;

export const Content = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};

  align-items: center;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;

  margin-top: -30px;
`;

export const Form = styled.View`
  width: 327px;
  height: 600px;
  margin-top: 30px;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`;

export const Input = styled.TextInput`
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_400};
  border-radius: 8px;
  padding: 0 10px;
`;

export const TextArea = styled.TextInput`
  height: 150px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_400};
  border-radius: 8px;
  padding: 0 10px;
`;

export const Box = styled.View`
  width: 100%;
  height: auto;

  margin-bottom: 15px;
`;

export const Hours = styled.TextInput`
  width: 100px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_400};
  border-radius: 8px;
  padding: 0 10px;
`;

export const Data = styled.TextInput`
  width: 100px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_400};
  border-radius: 8px;
  padding: 0 10px;
`;

export const Divide = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonCreate = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  width: 100%;
  height: 50px;
  border-radius: 6px;
  padding: 16px 24px;

  margin-top: 30px;
  align-items: center;
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.WHITE};
  `}
`;
