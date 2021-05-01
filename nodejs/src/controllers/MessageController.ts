import { Request, Response } from "express";
import { MessageService } from "../services/MessageService";

export default class MessageController {
  async showByUser(request: Request, response: Response) {
    const { user_id } = request.params;
    const messageService = new MessageService();
    const list = await messageService.index({ user_id });

    return response.json(list);
  }

  async store(request: Request, response: Response) {
    const { admin_id, text, user_id } = request.body;
    const messageService = new MessageService();
    const message = await messageService.store({ admin_id, text, user_id });

    return response.json(message);
  }
}
