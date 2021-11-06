import styled, {css} from "styled-components";

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
  background-color: #0b5ba7;
  color: white;
  font-size: 34px;
  font-weight: bold;
  border-radius: 5px;
  :hover {
		background-color: #216aad;
		cursor: pointer;
	}
  
  ${props => props.second && css`
    background-color: white;
    color: #0b5ba7;
    border: 4px solid #0b5ba7;
    :hover {
      background-color: #dde6ee;
      cursor: pointer;
    }    
  `}
`;

