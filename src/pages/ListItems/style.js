import styled from 'styled-components';

export const Div = styled.div`
  margin: auto;
  width: 60vw;
  height: 100vh; 
  border: 1px solid #d1d1e9;
  background-color: #e3f6f5;  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
  
export const Table = styled.table`
  width: 100%;
  height: 85%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Tr = styled.tr`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const Th = styled.th`
    width: 300px;
    font-size: 20px;
    padding-left: 60px;
    border: 1px solid black;
`;

export const Td = styled.td`
    font-size: 20px;
    padding-left: 60px;
    border: 1px solid black;
`;
