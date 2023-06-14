import { UnAuthenticatedError } from "../error/index.js";
const auth = (req, res, next) => {
    const authHeaders = req.headers.authorization
    if (!authHeaders) {
        throw new UnAuthenticatedError('Authentication Invalid');
    }
    next(); 
}
export default auth;