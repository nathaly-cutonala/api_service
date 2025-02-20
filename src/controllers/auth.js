import { matchedData } from 'express-validator';
import httpStatus from 'http-status';


export default class AuthControllers {


    async register(req, res) {
        const data = matchedData(req);
        const user = await this.authService.authenticate(data);
        
        return res.status(httpStatus.CREATED).json({ ok: true, user });
        
    }

}