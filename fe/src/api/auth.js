import axios from "./axios";


export const checkLogin = async(email,password) => {
    const response = await axios.get('/user');
    const list_user = response.data;
    for (let index = 0; index < list_user.length; index++) {
        const element = list_user[index];
        if (email === element.email && password === element.email) {
            return true;
        }
    }
    return false;
}

export const loginAPI = async (loginForm) => {
    try {
        const response = await axios.post('/login', loginForm);
        return response.data;
    } catch (error) {
        return {
            success: 'false',
            message: error.message
        }
    }
}

export const registerAPI = async (registerForm) => {
    try {
        const response = await axios.post('/register', registerForm);
        return response.data;
    } catch (error) {
        return {
            success: 'false',
            message: error.message
        }
    }
}

