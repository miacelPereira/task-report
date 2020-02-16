import { Request, Response } from "express";
import { ApiResponse, MESSAGE } from "../utils/ApiResponse";
import { user } from "@prisma/client";
import UserRepository, { Users } from "../repository/User";

class User {
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
          ApiResponse<user>("User already registered", isRegisteredUser)
        );
      }

      const user = await UserRepository.create({ name, email, password });

      return res.json(ApiResponse<user>(MESSAGE.REQUEST_SUCCESSFUL, user));
    } catch (error) {
      return res.json(ApiResponse<string>("error", error.message));
    }
  }
}

export default User;
