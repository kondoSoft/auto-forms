import styled from 'styled-components';
const themeColor = '255, 164, 99'; // this variable must have a RGB value
const white = '#FFFFFF';

// Typography Section
export const Text = styled.p`
font-size: 1.6rem;
color: ${white};

@media(max-width: 450px) {
    font-size: 1.2rem;
    margin-top: 0;
}
`
export const Label = styled.label`
color: ${white};
cursor: pointer;
`
export const Error = styled.p`
color: #FF6363;
font-size: 1.1rem;
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

@media (max-width: 768px) {
    width: 70%;
}

@media (max-width: 450px) {
    display: flex;
    flex-direction: column;
    align-items: center;

}
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
grid-column-gap: .5rem;

@media (max-width: 450px) {
    width: 100%;
    display: ${(props) => {
        if (props.size && props.size > 1) {
            return 'grid'
        }
    }};
    grid-template-columns: 1fr 1fr;
}
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

@media (max-width: 450px) {
    width: auto;
}
`

// Select Container
export const Select = styled.select`
width: 50%;
font-size: 1.1rem;
background-color: rgba(${themeColor}, .3);
border: 3px rgba(${themeColor}) solid;
border-radius: 5px;
color: ${white};
padding: 5px 0;
cursor: pointer;
:focus {
        outline: none;
    }

@media (max-width: 450px) {
    width: 100%;
}
`

// Inputs Section

export const Input = styled.input`
width: 100%;
font-size: 1.6rem;
border: none;
color: rgba(${themeColor});
background-color: transparent;
padding-bottom: 10px;
cursor: text;
border-bottom: 2px solid rgba(${themeColor}) ;
:focus {
        outline: none;
    }
::placeholder {
    color: rgba(${themeColor}, .5);
}
@media (max-width: 768px) {
    font-size: 1.2rem;
}
`
export const Date = styled.input`
font-size: 1.6rem;
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

@media (max-width: 768px) {
    font-size: 1.2rem;
}

@media (max-width: 450px) {
    width: 80%;
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

@media (max-width: 450px) {
    width: 100%;
}
`