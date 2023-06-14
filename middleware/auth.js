const auth = (resq, res, next) => {
    console.log('authenticate user');
    next(); 
}
export default auth;