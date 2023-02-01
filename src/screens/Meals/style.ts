import { Diet } from "@screens/Home";
import { ArrowLeft, PencilLine, Trash } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

interface Props {
  variant?: Diet;
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
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
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

  margin-top: -30px;
  padding: 24px;
`;

export const Box = styled.View`
  width: 327px;
  height: auto;

  margin-vertical: 10px;
`;

export const Card = styled.View`
  width: 150px;
  height: 50px;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const Circle = styled.View<Props>`
  ${({ theme, variant }) => css`
    background-color: ${variant === "inDiet"
      ? theme.COLORS.GREEN_DARK
      : theme.COLORS.RED_DARK};
  `}
  width: 10px;
  height: 10px;
  border-radius: 5px;
`;

export const ButtonEdit = styled.TouchableOpacity`
  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_200};
  `}
  border-radius: 6px;
  width: 327px;
  height: 50px;
  padding: 16px 24px;
  flex-direction: row;
  margin-top: 200px;
  justify-content: center;
`;

export const ButtonRemove = styled.TouchableOpacity`
  ${({ theme }) => css`
    background-color: ${theme.COLORS.WHITE};
    border: 1px solid ${theme.COLORS.GRAY_200};
    border-radius: 6px;
  `}

  width: 327px;
  height: 50px;
  padding: 16px 24px;
  flex-direction: row;
  margin-top: 15px;
  justify-content: center;
`;

export const EditIcon = styled(PencilLine).attrs(({ theme }) => ({
  color: theme.COLORS.WHITE,
}))`
  margin-right: 15px;
`;

export const TrashIcon = styled(Trash).attrs(({ theme }) => ({
  color: theme.COLORS.GRAY_100,
}))`
  margin-right: 15px;
`;

export const ButtonExclude = styled.TouchableOpacity`
  width: 135px;
  height: 50px;
  border-radius: 6px;

  padding: 16px 24px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  align-items: center;
`;

export const ButtonCancel = styled.TouchableOpacity`
  width: 135px;
  height: 50px;
  border-radius: 6px;

  padding: 16px 24px;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};

  align-items: center;
`;
