
export const userStore = (data) => {
    localStorage.setItem("user", JSON.stringify({
        token: data.token,
    }))
};

export const userData = () => {
    const userStringfied = localStorage.getItem("user") || '""';
    return JSON.parse(userStringfied || {});
};