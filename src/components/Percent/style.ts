import { Diet } from "@screens/Home";
import styled, { css } from "styled-components/native";

import { ArrowUpRight } from "phosphor-react-native";

export interface Props {
  variant: Diet;
}

export const Container = styled.Pressable<Props>`
  width: 327px;
  height: 102px;

  padding: 20px 16px;

  align-items: center;
  justify-content: center;
  gap: 2px;

  background-color: ${({ theme, variant }) =>
    variant === "inDiet" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};

  border-radius: 8px;
  margin: 0 auto;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XXL}px;
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_300};
  `}
`;

export const Icon = styled(ArrowUpRight).attrs<Props>(({ theme, variant }) => ({
  color: variant === "inDiet" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
}))<Props>`
  align-self: flex-end;
`;
