import { Diet } from "@screens/Home";
import { ArrowLeft, FloppyDisk } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

interface Props {
  variant: Diet;
}

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

export const Icon = styled(ArrowLeft).attrs(({ theme }) => ({
  color: theme.COLORS.GRAY_100,
}))``;

export const Text = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`;

export const Content = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};

  border-top-right-radius: 15px;
  border-top-left-radius: 15px;

  margin-top: -30px;
  padding: 24px;
`;

export const Input = styled.TextInput`
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_400};
  border-radius: 8px;
  padding: 0 10px;
`;

export const ButtonSave = styled.TouchableOpacity`
  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_200};
  `}
  border-radius: 6px;
  width: 327px;
  height: 50px;
  padding: 16px 24px;
  flex-direction: row;
  margin-top: 100px;
  justify-content: center;
`;

export const IconSave = styled(FloppyDisk).attrs(({ theme }) => ({
  color: theme.COLORS.WHITE,
}))`
  margin-right: 10px;
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

  margin-vertical: 15px;
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
