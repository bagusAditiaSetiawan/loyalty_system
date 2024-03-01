import { User } from "../models/user.model";

export const authProvider = [
  {
    provide: 'USER_REPOSITORY',
    useValue: User,
  },
];