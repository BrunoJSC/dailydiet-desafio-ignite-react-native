import { Diet } from "@screens/Home";
import { ArrowLeft } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

export interface Props {
  variant: Diet;
}

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View<Props>`
  width: 100%;
  height: 150px;
  align-items: center;
  justify-content: center;

  padding: 0 24px;

  background-color: ${({ theme, variant }) =>
    variant === "inDiet" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
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

export const Button = styled.Pressable`
  align-self: flex-start;
`;

export const Icon = styled(ArrowLeft).attrs<Props>(({ theme, variant }) => ({
  color: variant === "inDiet" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
}))<Props>``;

export const Content = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};

  align-items: center;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;

  margin-top: -15px;
`;

export const Info = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_300};
  `}

  text-align: center;
  margin-top: 15px;
`;

export const Cards = styled.View`
  width: 327px;
  height: 200px;
  margin-vertical: 25px;
  align-items: center;

  justify-content: space-between;
`;

export const Card = styled.View`
  width: 100%;
  height: 89px;

  align-items: center;
`;

export const Boxes = styled.View`
  width: 327px;
  height: 200px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Box = styled.View<Props>`
  width: 157.5px;
  height: 107px;
  border-radius: 8px;
  padding: 16px;
  align-items: center;

  background-color: ${({ theme, variant }) =>
    variant === "inDiet" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;
