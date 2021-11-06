import styled, { css } from 'styled-components';

export const Div = styled.div`
  margin: auto;
  width: 60vw;
  height: 100vh; 
  border: 1px solid #d1d1e9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${props => props.second && css`
    width: 98%;
    height: 90%;
    border: none;
  `}
`;
  
export const Table = styled.table`
  border-collapse: collapse;  
  border: 2px solid #d1d1e9;  
`;

export const Tr = styled.tr` 
  text-align: center;
  padding: 2px;   
`;

export const Th = styled.th`
  font-size: 20px;
  border: 2px solid #d1d1e9;
  padding: 10px;
  color: rgb(32, 32, 32);
`;
    
export const Td = styled.td`
  font-size: 20px;
  padding: 10px;
  border: 2px solid #d1d1e9;
  text-align: center;
  color: rgb(32, 32, 32);
`;
