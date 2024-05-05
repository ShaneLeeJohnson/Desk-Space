// Store Authentication Token in Local Storage Function
export const setAuthToken = (token) => {
    try {
        localStorage.setItem ('token', token);
    } catch (error) {
        console.error ('Set Auth Token Error:', error);
    }
};

// Get Authentication Token from Local Storage Function
export const getAuthToken = () => {
    try {
        return localStorage.getItem ('token');
    } catch (error) {
        console.error ('Get Auth Token Error:', error);
        return null;
    }
};

// Remove Authentication Token from Local Storage Function
export const removeAuthToken = () => {
    try {
        localStorage.removeItem ('token');
    } catch (error) {
        console.error ('Remove Auth Token Error:', error);
    }
};