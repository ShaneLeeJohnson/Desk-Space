// Save Item to Local Storage Function
export const localStorageSetItem = (key, value) => {
    try {localStorage.setItem(key, JSON.stringify(value))}
    catch (error) {
        console.error ('LocalStorage Save Error:', error);
    }
};

// Get Item from Local Storage Function
export const localStorageGetItem = (key) => {
    try {
        const value = localStorage.getItem (key);
        return value ? JSON.parse(value) : null;
    } catch (error) {
        console.error ('LocalStorage Get Item Error:', error);
        return null;
    }
};

// Remove Item from Local Storage Function
export const localStorageRemoveItem = (key) => {
    try {localStorage.removeItem(key);}
    catch (error) {
        console.error('LocalStorage Remove Item Error:', error);
    }
};