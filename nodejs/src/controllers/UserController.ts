import { UserService } from "./../services/UserService";
import { Request, Response } from "express";

export default class UserController {
  async store(request: Request, response: Response) {
    const { email } = request.body;
    const userService = new UserService();

    const user = await userService.store(email);

    return response.json(user);
  }
}
