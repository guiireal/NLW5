import { getCustomRepository, Repository } from "typeorm";
import { Setting } from "../entities/Setting";
import { SettingRepository } from "../repositories/SettingRepository";

interface ISettingCreate {
  chat: boolean;
  username: string;
}

export class SettingService {
  private settingRepository: Repository<Setting>;

  constructor() {
    this.settingRepository = getCustomRepository(SettingRepository);
  }

  async store({ chat, username }: ISettingCreate) {
    const userAlreadyExists = await this.settingRepository.findOne({
      username,
    });

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    const setting = this.settingRepository.create({ chat, username });

    await this.settingRepository.save(setting);

    return setting;
  }
}
