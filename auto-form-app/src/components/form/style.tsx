import styled from 'styled-components'
const themeColor = '#FFA463'
export const Text = styled.p`
font-size: 25px;
color: white;
`
export const  Test = styled.form`
background-image: url('https://wallpaperaccess.com/full/84248.png');
background-size: cover;
height: 100vh;
overflow: auto;
`
export const  QContainer = styled.div`

width: 40%;
height: 20%;
`
export const Container = styled.div`
background: transparent;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;

`
export const Input = styled.input`
width: 100%;
font-size: 25px;
border: none;
color: ${themeColor};
border-bottom: 2px solid rgba(255, 164, 99, .5);
background: transparent;
:focus {
        outline: none;
        border-bottom: 2px solid ${themeColor} ;
    }
::placeholder {
    color: rgba(255, 164, 99, .5);
}
`
export const OptContainer = styled.div`
width: 25%;
margin-bottom: 10px;
padding: 15px 30px 15px 0;
border: 3px ${themeColor} solid;
border-radius: 5px;
background-color: rgba(255, 164, 99, .3);
`
export const Label = styled.label`
color: ${themeColor};
`