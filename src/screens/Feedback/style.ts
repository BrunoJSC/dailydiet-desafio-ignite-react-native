import { Diet } from "@screens/Home";
import styled, { css } from "styled-components/native";

interface Props {
  variant: Diet;
}

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text<Props>`
  ${({ theme, variant }) => css`
    color: ${variant === "inDiet"
      ? theme.COLORS.GREEN_DARK
      : theme.COLORS.RED_DARK};
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
  margin-bottom: 15px;
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
  margin-bottom: 15px;
`;

export const Button = styled.TouchableOpacity`
  width: 327px;
  height: 50px;
  border-radius: 6px;
  padding: 16px 24px;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_200};
  `}
  align-items: center;
  margin-top: 60px;
`;

export const TextButton = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;
