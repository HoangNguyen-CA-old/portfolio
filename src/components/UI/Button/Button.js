import styled from 'styled-components';

const Button = styled.button`
  outline: 0;
  font-size: 1.1rem;
  cursor: pointer;

  border: 2px solid ${({ theme }) => theme.colors.dark};

  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.light};
  padding: 0.4em 0.7em;
  border-radius: 1em;
`;

export default Button;
