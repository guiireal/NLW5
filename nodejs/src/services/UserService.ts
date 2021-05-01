import { UserRepository } from "./../repositories/UserRepository";
import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";
export class UserService {
  private userRepository: Repository<User>;

  constructor() {
    this.userRepository = getCustomRepository(UserRepository);
  }

  async store(email: string) {
    const userExists = await this.userRepository.findOne({ email });

    if (userExists) return userExists;

    const user = this.userRepository.create({ email });
    await this.userRepository.save(user);

    return user;
  }
}
