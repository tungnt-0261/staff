export const reducer = (state, action) => {
    console.log(state, action);
    switch (action.type) {
        case 'success':
            return {
                ...state,
                logged: true,
                email: "",
                password: ""
            };
        case 'error':
            return {
                ...state,
                error: "Login Invalid"
            }
        case 'logout':
            return {
                ...state,
                error: false,
                logged: false
            }
        case 'email':
            return {
                ...state,
                email: action.value
            }
        case 'password':
            return {
                ...state,
                password: action.value
            }
        default: return state;
    }
}