
export const getStorageData = () => {
    return JSON.parse(localStorage.getItem('reviews')) || [];
};

export const setStorageData = (data) => {
    localStorage.setItem('reviews', JSON.stringify(data));
};

