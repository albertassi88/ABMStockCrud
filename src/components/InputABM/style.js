import styled, { css } from "styled-components";

export const Div = styled.div`
    margin: auto;
    width: 60vw;
    height: 100vh; 
    border: 1px solid #d1d1e9;

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
    width: 500px;
    height: 40px; 
    border: 2px solid #0b5ba7;
    margin: 5px;
    font-size: 18px;
    background-color: white;
`;

export const Button = styled.button`    
    width: 500px;
    height: 50px;    
    margin: 5px;
    background-color: #0b5ba7;
    color: white;
    font-size: 25px;
    font-weight: bold;
    border-radius: 5px;
    border: none;
    :hover {
		background-color: #216aad;
		cursor: pointer;
	}

    ${props => props.second && css`
        width: 500px;
        height: 50px;   
        background-color: white;
        color: #0b5ba7;
        border: 2px solid #0b5ba7;
        :hover {
            background-color: #dde6ee;
            cursor: pointer;
        }   
    `}
`;