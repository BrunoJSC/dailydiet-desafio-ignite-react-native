import { Diet } from "@screens/Home";
import styled, { css } from "styled-components/native";

interface Props {
  variant: Diet;
  isSelected?: boolean;
}

export const Container = styled.View`
  width: 100%;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_100};
  `}
  margin-top: 30px;
`;

export const OptionContainer = styled.View`
  flex-direction: row;

  justify-content: space-between;
`;

export const OptionWrapper = styled.Pressable<Props>`
  ${({ theme, variant, isSelected }) => css`
    background-color: ${isSelected
      ? variant === "inDiet"
        ? theme.COLORS.GREEN_LIGHT
        : theme.COLORS.RED_LIGHT
      : theme.COLORS.GRAY_600};

    border: 1px solid
      ${isSelected
        ? variant === "inDiet"
          ? theme.COLORS.GREEN_DARK
          : theme.COLORS.RED_DARK
        : "transparent"};
  `}
  border-radius: 6px;
  padding: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 40%;

  margin-top: 20px;
`;

export const Icon = styled.View<Props>`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  margin-right: 10px;

  background-color: ${({ theme, variant }) =>
    variant === "inDiet" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;
