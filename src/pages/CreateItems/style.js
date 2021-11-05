import styled, { css } from 'styled-components';

export const Div = styled.div`
    margin: auto;
    width: 60vw;
    height: 100vh; 
    border: 1px solid #d1d1e9;
    background-color: #e3f6f5;

    ${props => props.second && css`
        width: 700px;
        height: 85%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: none;
  `}
`;

export const Input = styled.input`    
    width: 400px;
    height: 30px; 
    border: 1px solid #d1d1e9;
    margin: 5px
`;

export const Button = styled.button`    
    width: 400px;
    height: 40px; 
    border: 1px solid #d1d1e9;
    margin: 5px;
    font-size: 20px;
`;