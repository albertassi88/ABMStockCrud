import styled, {css} from 'styled-components';

export const Div = styled.div`
    width: 100%;
    height: 85vh; 
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const Button = styled.button`
  width: 200px;
  height: 100px; 
  background-color: #e3f6f5;
  margin-left: 100px;
  margin-right: 100px;
  border: none;
  background-color: #272343;
  color: white;
  font-size: 34px;
  border-radius: 5px;
  
  ${props => props.second && css`
    background-color: #2d334a;
  `}
`;

