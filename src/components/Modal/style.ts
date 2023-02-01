import styled from "styled-components/native";

export const Overlay = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.25);
  align-items: center;
  justify-content: center;
`;

export const Container = styled.Modal`
  padding: 16px 24px;
`;

export const BodyModal = styled.View`
  width: 327px;
  height: 150px;
  border-radius: 6px;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};
`;
