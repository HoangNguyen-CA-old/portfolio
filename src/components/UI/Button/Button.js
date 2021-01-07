import styled from 'styled-components';

const Button = styled.button`
  outline: 0;
  font-size: 1.1rem;
  cursor: pointer;

  border: 2px solid ${({ theme }) => theme.colors.dark};

  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.light};
  padding: 0.6em 1.3em;
  border-radius: 100px;

  text-transform: uppercase;
  transition: all 0.1s ease-out;

  &:hover{
    transform: translateY(-3px);
    box-shadow: 0px 2px 15px rgba(0,0,0,0.2);
  }

  &:active{
    transform: translateY(-1px);
    box-shadow: 0px 2px 10px rgba(0,0,0,0.2);
  }
`;

export default Button;
