import * as yup from "yup";

const data = {
    item: {
        question: 'What is your name?',
        validation:  yup.string().required(),
        type: 'date',
        name: 'date'
    },
    item2: {
        question: 'Gender',
        validation: yup.string().required(),
        type: 'radio',
        name: 'Gender',
        options: ['Male', 'Female']
    },
    item3: {
        question: "What's your favorite flavor?",
        validation: yup.string().matches(/(Chocolate)|(Vanilla)|(Strawberry)|(Capuccino)|(Cookies and Cream)/).required(),
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
        validation: yup.array().of(yup.string('Brown', 'Black', 'white', 'Grey', 'Red Hair')).required(),
        type: 'checkbox',
        name: 'colors',
        options: ['Brown', 'Black', 'white', 'Grey', 'Red Hair']
    }
}

export default data