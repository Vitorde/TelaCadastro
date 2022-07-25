import styled from "styled-components";

export const Container = styled.div` 
background-color: #FFF;
    width:  400px;
    height:  700px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    position:  absolute;
    top:  50%;
    left:  50%;
    transform: translate(-50%, -50%);
    box-shadow: 0px 5px  20px #777; 


    @media (max-width: 700px) {
        width: 100%;
    }

`

export const Title = styled.h3`
    text-align:  center;
    padding: 10px;
    font-weight: bold;
    font-size: 28px;
    color: #000;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`

export const Input = styled.input`
    padding: 15px;
    width:  300px;
    margin-top: 20px;
    color:  #000;
    font-size: 20px;
    border-radius: 10px;
    background-color: #7274bf;
    border: none;
    cursor: pointer;
    ::placeholder {
        color: #000;
    }

    

`

export const ButtonSingUp = styled.button`
    width:  349px;
    margin-top: 20px;
    padding: 10px;
    font-size: 20px;
    background-color: #333FFF;
    color: #FFF;
    border:  none;
    border-radius: 10px;
    font-weight: 500;
    cursor: pointer;

    :hover {
        background: linear-gradient(to right, rgb(252, 70, 107), rgb(63, 94, 251));
    }
`;

export const IconEmail = styled.span`
    position:  relative;
    top:  70px;
    left: 140px;
    font-size: 20px;
    align-items: center;
`

export const Facebook = styled.button`
   width:  349px;
    margin-top: 20px;
    padding: 10px;
    font-size: 20px;
    background-color: #284f92;
    color: #FFF;
    border:  none;
    border-radius: 10px;
    font-weight: 500;
    cursor: pointer;

`

export const Google = styled.button`
width:  349px;
    margin-top: 20px;
    padding: 10px;
    font-size: 20px;
    background-color: red;
    color: #FFF;
    border:  none;
    border-radius: 10px;
    font-weight: 500;
    cursor: pointer;
`