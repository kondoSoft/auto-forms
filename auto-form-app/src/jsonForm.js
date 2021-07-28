const data = {
    item: {
        question: 'What is your name?',
        isRequired: true,
        validation: () => 'validating...',
        type: 'date',
        name: 'name'
    },
    item2: {
        question: 'Sex',
        isRequired: true,
        validation: () => 'validating...',
        type: 'radio',
        name: 'Sex',
        options: ['Male', 'Female']
    },
    item3: {
        question: "What's your favorite flavor?",
        isRequired: true,
        validation: () => 'validating...',
        type: 'dropdown-list',
        name: 'Ice Cream Flavors',
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
        isRequired: true,
        validation: () => 'validating...',
        type: 'checkbox',
        name: 'colors',
        options: ['Brown', 'Black', 'white', 'Grey', 'Red Hair']
    }
}

export default data