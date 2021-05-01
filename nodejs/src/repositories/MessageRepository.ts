import { Message } from "./../entities/Message";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Message)
export class MessageRepository extends Repository<Message> {}
