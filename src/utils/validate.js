export const checkValidData = (email, password) => {
    const isEmailValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    if (!isEmailValid) return 'Email or password is not valid';
    if (!isPasswordValid) return 'Email or password is not valid';
    if (email === '') return 'Email is required.'
    if (password === '') return 'Password is required'
    return null
};

export const validEmail = (email) => {
    const isEmailValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
    if (!isEmailValid) return 'Email is not valid';
    if (email === '') return 'Email required';
    return null;
}