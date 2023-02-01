import { Diet } from "@screens/Home";
import styled, { css } from "styled-components/native";

interface Props {
  variant: Diet;
}

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: auto;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-vertical: 7px;
  padding: 20px;

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 8px;
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const Icon = styled.View<Props>`
  width: 8px;
  height: 8px;
  border-radius: 8px;

  background-color: ${({ theme, variant }) =>
    variant === "inDiet" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;
