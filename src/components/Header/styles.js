import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  height: 104px;
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;

  padding: 0 123px;

  > nav {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 32px;
  }
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  svg {
    font-size: 36px;
  }
`;

export const Logout = styled.button`
  background: none;
  border: none;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-size: 32px;
`;
