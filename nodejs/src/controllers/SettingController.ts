import { SettingService } from "./../services/SettingService";
import { Request, Response } from "express";

export default class SettingController {
  async store(request: Request, response: Response) {
    const { chat, username } = request.body;
    const settingService = new SettingService();

    try {
      const setting = await settingService.store({ chat, username });

      return response.json(setting);
    } catch (error) {
      return response.status(400).json({ message: error.message });
    }
  }
}
