import { MessageRepository } from "./../repositories/MessageRepository";
import { getCustomRepository, Repository } from "typeorm";
import { Message } from "../entities/Message";

interface IMessageCreate {
  admin_id?: string;
  text: string;
  user_id: string;
}

interface IFilterMessage {
  user_id: string;
}

export class MessageService {
  private messageRepository: Repository<Message>;

  constructor() {
    this.messageRepository = getCustomRepository(MessageRepository);
  }

  async index({ user_id }: IFilterMessage) {
    const list = await this.messageRepository.find({
      where: { user_id },
      relations: ["user"],
    });

    return list;
  }

  async store({ admin_id, text, user_id }: IMessageCreate) {
    const message = this.messageRepository.create({
      admin_id,
      text,
      user_id,
    });

    await this.messageRepository.save(message);

    return message;
  }
}
