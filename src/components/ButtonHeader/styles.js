import styled from "styled-components";

export const Container = styled.button`
  width: fit-content;
  height: 56px;
  white-space: nowrap;

  display: flex;
  align-items: center;
  gap: 8px;

  padding: 12px 32px;

  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  border: none;
  border-radius: 5px;

  font-weight: 500;
  font-style: normal;

  &:disabled {
    opacity: 0.5;
  }

  > svg {
    font-size: 26px;
  }
`;
