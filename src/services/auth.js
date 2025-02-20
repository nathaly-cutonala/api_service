import User from "../models/user";

export default class AuthService {


constructor() {
    
}

async authenticate(data) {

    User.create(data).catch((error) => {
        if (error.name === "SequelizeUniqueConstraintError") {
          throw new HttpException(httpStatus.BAD_REQUEST,"Bad Request",error.errors[0]);
        } else {
          throw new Error(error.message);
        }
      });
      

}

}