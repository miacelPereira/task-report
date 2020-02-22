import { Request, Response } from "express";
import { ApiResponse, MESSAGE } from "../utils/ApiResponse";
import { user as User } from "@prisma/client";
import UserRepository, { Users } from "../repository/User";

class UserController {
  static async index(_: Request, res: Response): Promise<Response> {
    try {
      const users = await UserRepository.getAll();

      return res.json(ApiResponse<Users[]>(MESSAGE.REQUEST_SUCCESSFUL, users));
    } catch (error) {
      return res.json(ApiResponse<string>("error", error.message));
    }
  }

  static async store(req: Request, res: Response): Promise<Response> {
    try {
      const { name, email, password } = req.body;
      const isRegisteredUser = await UserRepository.getOne(email);

      if (isRegisteredUser) {
        return res.json(
          ApiResponse<User>("User already registered", isRegisteredUser)
        );
      }

      const user = await UserRepository.create({ name, email, password });

      return res.json(ApiResponse<User>(MESSAGE.REQUEST_SUCCESSFUL, user));
    } catch (error) {
      return res.json(ApiResponse<string>("error", error.message));
    }
  }
}

export default UserController;
