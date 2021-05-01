import { Router } from "express";
import MessageController from "./controllers/MessageController";
import SettingController from "./controllers/SettingController";
import UserController from "./controllers/UserController";

const routes = Router();

const settingController = new SettingController();
const userController = new UserController();
const messageController = new MessageController();

routes.post("/settings", settingController.store);
routes.post("/users", userController.store);

routes.get("/messages/:user_id", messageController.showByUser);
routes.post("/messages", messageController.store);

export default routes;
