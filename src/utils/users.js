import axios from "axios";


export const registerUser = async (userInput) => {
    console.log(process.env.REACT_APP_BACKEND_URI);
    return axios.post(`${process.env.REACT_APP_BACKEND_URI}/users/register`, {
        email: userInput.email,
        password: userInput.password,
    });
}