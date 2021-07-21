const form = {
    item: {
        question: 'What is your name?',
        isRequired: true,
        validation: () => 'validating...',
        type: 'text'
    },
    item2: {
        question: 'Sex',
        isRequired: true,
        validation: () => 'validating...',
        type: 'checkbox',
        options: ['Male', 'Female']
    }
}

export default form