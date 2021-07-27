const data = {
    item: {
        question: 'What is your name?',
        isRequired: true,
        validation: () => 'validating...',
        type: 'date'
    },
    item2: {
        question: 'Sex',
        isRequired: true,
        validation: () => 'validating...',
        type: 'radio',
        groupName: 'Sex',
        options: ['Male', 'Female']
    },
    item3: {
        question: "What's your favorite flavor?",
        isRequired: true,
        validation: () => 'validating...',
        type: 'dropdown-list',
        groupName: 'Ice Cream Flavors',
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
        options: ['Brown', 'Black', 'white', 'Grey', 'Red Hair','Brown', 'Black', 'white', 'Grey', 'Red Hair']
    }
}

export default data