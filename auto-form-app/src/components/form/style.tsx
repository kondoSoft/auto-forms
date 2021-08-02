import styled from 'styled-components';
const themeColor = '255, 164, 99'; // this variable must have a RGB value
const white = '#FFFFFF';

// Typography Section
export const Text = styled.p`
font-size: 25px;
color: ${white};
`
export const Label = styled.label`
color: ${white};
cursor: pointer;
`

// Containers Section

// Background Container
export const  Container = styled.form`
background-image: url('https://wallpaperaccess.com/full/84248.png');
background-size: cover;
height: 100vh;
overflow-y: scroll;
scroll-snap-type: y mandatory;
flex-flow: column nowrap;
`
// Tile Container
export const Tile = styled.section`
background: transparent;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
scroll-snap-align: start;
`

// Question Container
export const  Question = styled.div`

width: 40%;
height: 20%;
`

// Input Container
interface InputContainerProps {
    size?: number
}
export const InputContainer = styled.div<InputContainerProps>`
display: ${(props) => {
    if (props.size && props.size > 3) {
       return 'grid'
    }
}};
grid-template-columns: 1fr 1fr 1fr;
`

// Options Container
interface OptContainerProps {
    size: number
}

export const OptContainer = styled.div<OptContainerProps>`
width: ${props => props.size > 3 ? '50%' : '25%' };
margin-bottom: 10px;
padding: 15px 30px 15px 0;
border: 3px rgba(${themeColor}) solid;
border-radius: 5px;
background-color: rgba(${themeColor}, .3);
cursor: pointer;
`

// Select Container
export const Select = styled.select`
width: 50%;
font-size: 18px;
background-color: rgba(${themeColor}, .3);
border: 3px rgba(${themeColor}) solid;
border-radius: 5px;
color: ${white};
padding: 5px 0;
cursor: pointer;
:focus {
        outline: none;
    }
`

// Inputs Section

export const Input = styled.input`
width: 100%;
font-size: 25px;
border: none;
color: rgba(${themeColor});
background-color: rgba(${themeColor}, .5);
padding-bottom: 10px;
cursor: text;
:focus {
        outline: none;
        border-bottom: 2px solid rgba(${themeColor}) ;
    }
::placeholder {
    color: rgba(${themeColor}, .5);
}
`
export const Date = styled.input`
font-size: 25px;
width: 45%;
color: ${white};
padding: 10px;
background-color: rgba(${themeColor}, .5);
border: 3px rgba(${themeColor}) solid;
border-radius: 5px;
cursor: text;
:focus {
        outline: none;
    }
::-webkit-calendar-picker-indicator {
    filter: invert(1);
    cursor: pointer;
}
`

// Select option
export const Option = styled.option`
background-color: ${white};
color: #000000;
padding: 20px;
`

export const Submit = styled.input`
padding: 20px 60px;
border: solid 4px #A76EC7;
border-radius: 5px;
background: #732E99;
color: ${white};
font-weight: bold;
font-family: inherit;
font-size: inherit;
margin-top: 15px;
transition: background 2s;
:hover {
    cursor: pointer;
    background: #A76EC7;
    border: solid 4px #732E99;
}
`