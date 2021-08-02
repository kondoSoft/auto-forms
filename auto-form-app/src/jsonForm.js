import * as yup from "yup";

const data = {
    item: {
        question: 'What is your name?',
        validation:  yup.string().required('You must write your name!'),
        type: 'text',
        name: 'name'
    },
    item1: {
        question: 'What is your birthday?',
        validation:  yup.string().required('Your birthday is required!'),
        type: 'date',
        name: 'date'
    },
    item2: {
        question: 'Gender',
        validation: yup.string().required('Please Choose one of the options!').nullable(),
        type: 'radio',
        name: 'Gender',
        options: ['Male', 'Female']
    },
    item3: {
        question: "What's your favorite flavor?",
        validation: yup.string().matches(/(Chocolate)|(Vanilla)|(Strawberry)|(Capuccino)|(Cookies and Cream)/, {message: 'Please enter a valid option!'}).required(),
        type: 'dropdown-list',
        name: 'Ice Cream Flavors',
        defaultOption: 'seleccione un sabor',
        options: [
            'Chocolate',
            'Vanilla',
            'Strawberry',
            'Capuccino',
            'Cookies and Cream'
        ]
    },
    item4: {
        question: 'Colors',
        validation: yup.array().min(1).of(yup.string('Brown', 'Black', 'white', 'Grey', 'Red Hair')).required('You have to choose a valid option!'),
        type: 'checkbox',
        name: 'colors',
        options: ['Brown', 'Black', 'white', 'Grey', 'Red Hair']
    }
}

export default data