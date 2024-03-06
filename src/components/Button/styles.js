import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  font-weight: 500;
  font-style: normal;

  height: 45px;

  border: none;
  border-radius: 5px;

  padding: 12px 24px;

  &:disabled {
    opacity: 0.5;
  }
`;
