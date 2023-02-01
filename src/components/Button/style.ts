import { Plus } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 327px;
  height: 50px;

  padding: 16px 24px;
  border-radius: 6px;

  margin-vertical: 25px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`;

export const Icon = styled(Plus).attrs(({ theme }) => ({
  color: theme.COLORS.WHITE,
}))`
  margin-right: 12px;
`;
