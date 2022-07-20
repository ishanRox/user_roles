import { USER_REPOSITORY } from 'src/config/constants';
import { User } from '../entities/user.entity';

export const usersProviders = [
  {
    provide: USER_REPOSITORY,
    useValue: User,
  },
];