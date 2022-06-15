export const server = 'http://loginbackend.logindesigns.com';


// export const server = 'http://localhost:5000';
// export const imageServer = 
export const token = localStorage.getItem("loginToken")


const parsedToken = JSON.parse(token);

export default parsedToken;


