import styled from "styled-components";

const Divider = styled.div`
  box-sizing: border-box;
  border-bottom: 1px solid ${({ theme }) => theme.colors.N300};
`;

export function MenuDivider() {
  return <Divider />;
}
