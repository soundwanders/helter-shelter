export default function validate() {

    const constraints = {
        name: {
        presence: { allowEmpty: false }
        },
        email: {
        presence: { allowEmpty: false },
        email: true
        },
        subject: {
        presence: { allowEmpty: false }
        },
        message: {
        presence: { allowEmpty: false }
        }
    };
    
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', function (event) {
        const formValues = {
        name: form.elements.name.value,
        email: form.elements.email.value,
        subject: form.elements.subject.value,
        message: form.elements.message.value
        };
    
        const errors = validate(formValues, constraints);
    
        if (errors) {
        event.preventDefault();
        const errorMessage = Object
            .values(errors)
            .map(function (fieldValues) {
            return fieldValues.join(', ');
            })
            .join('\n');
    
        alert(errorMessage);
        }
        // if no errors are returned, clear contact form
        else {
        document.getElementById('name').value = 'Name...';
        document.getElementById('email').value = 'Email...';
        document.getElementById('subject').value = 'Subject...';
        document.getElementById('message').value = 'Message...';
        alert('Message sent. We will respond shortly, thank you!');
        }
    }, false);
};