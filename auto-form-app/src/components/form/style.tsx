import styled from 'styled-components'
const themeColor = '#FFA463'

// Typography Section
export const Text = styled.p`
font-size: 25px;
color: white;
`
export const Label = styled.label`
color: #FFFFFF;
`

// Containers Section

// Background Container
export const  Test = styled.form`
background-image: url('https://wallpaperaccess.com/full/84248.png');
background-size: cover;
height: 100vh;
overflow: auto;
`
// Tile Container
export const Container = styled.div`
background: transparent;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`

// Question Container
export const  QContainer = styled.div`

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
border: 3px ${themeColor} solid;
border-radius: 5px;
background-color: rgba(255, 164, 99, .3);
`

// Select Container
export const Select = styled.select`
width: 50%;
font-size: 18px;
background-color: rgba(255, 164, 99, .3);
border: 3px ${themeColor} solid;
border-radius: 5px;
color: #FFFFFF;
:focus {
        outline: none;
    }
`

// Inputs Section

export const Input = styled.input`
width: 100%;
font-size: 25px;
border: none;
color: ${themeColor};
border-bottom: 2px solid rgba(255, 164, 99, .5);
background: transparent;
padding-bottom: 10px;
:focus {
        outline: none;
        border-bottom: 2px solid ${themeColor} ;
    }
::placeholder {
    color: rgba(255, 164, 99, .5);
}
`
export const Date = styled.input`
font-size: 25px;
width: 45%;
color: #FFFFFF;
padding: 10px;
background: rgba(255, 164, 99, .5);
border: 3px ${themeColor} solid;
border-radius: 5px;
:focus {
        outline: none;
    }
::-webkit-calendar-picker-indicator {
    filter: invert(1);
}
`

// Select option
export const Option = styled.option`
background-color: rgba(255, 164, 99, .9);
color: white;
padding: 20px;
`