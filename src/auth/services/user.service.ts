import { Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import { User } from "../models/user.model";
import { SigninDto } from "../dtos/signin.dto";



@Injectable()
export class UserService {
    constructor(@Inject('USER_REPOSITORY') private userRepository: typeof User) {}

    async signin(signinDto: SigninDto) {
        const { email, password } = signinDto;
        const user = this.userRepository.findOne({
            where: {
                email,
                password,
            }
        });
        if(!user) throw new UnauthorizedException('Password or Email is wrong');
        return true;
    }
}