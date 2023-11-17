import styled from 'styled-components';

const Button = styled.button`
  background-color: ${(props) => (props.$primary ? '#4CAF50' : '#CCCCCC')};
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
`;

export default Button;