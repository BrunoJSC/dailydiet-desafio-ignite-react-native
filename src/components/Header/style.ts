import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 150px;

  flex-direction: row;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 0 24px;

  align-items: center;
  justify-content: space-between;
`;

export const Avatar = styled.Image`
  width: 48px;
  height: 48px;
  border-radius: 24px;
  border: 2px solid ${({ theme }) => theme.COLORS.GRAY_100};
`;
