
//import axios from 'axios';

export const validate = values => {
    const errors = {}

    if (!values.email) {
        errors.email = 'Введіть e-mail'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Введіть коректний e-mail'
    }

    return errors
};

