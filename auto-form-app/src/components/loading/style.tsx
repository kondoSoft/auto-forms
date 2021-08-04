import styled from 'styled-components';

export const  Spinner = styled.div `
border: 6px solid rgba(0,0,0,.1);
width: 50px;
height: 50px;
border-radius: 50%;
border-left-color: #09f ;
animation: spin 1.3s ease infinite;
@keyframes spin {
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
}
`