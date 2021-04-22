import styled from 'styled-components'

export const List = styled.div`
  display:flex;
  position:relative;
  flex-direction:column;
  align-items:center;
  justify-content:center;

  button:hover{
    background: #e1a722;
    cursor: pointer;
  }

  input{
    width: 200px;
    border-radius:15px;
    padding: 15px;
  }
  
  `;

  export const Button = styled.button`
    width: 180px;
    height: 50px;
    margin:35px;

    padding:15px;
    border-radius:15px;


    background:#8257e6;
    color:#fff;
    text-decoration: none;
    border: none;

    transition: background-color 0.3s;
  `;

export const Title = styled.h1`
  margin:25px;
  color:#e1a722;
`;

export const Table = styled.div`
  margin:20px;
  padding:15px;
  border-radius:15px;
  background:#6e6e72;

  p{
    font-weight:10;
    font-size:18px;
    line-height: 35px;
  }
  

`;