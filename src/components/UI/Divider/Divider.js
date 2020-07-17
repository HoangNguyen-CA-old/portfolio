import styled from 'styled-components';

const Divider = styled.hr`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};

  height: 3px;
  border: none;
`;

export default Divider;
