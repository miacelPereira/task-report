import { Request, Response } from "express";
import { ApiResponse } from "../utils/ApiResponse";
import { PrismaClient, user } from "@prisma/client";
const prisma = new PrismaClient();

class User {
  async index(req: Request, res: Response): Promise<Response> {
    try {
      const users = await prisma.user.findMany();
      return res.json(ApiResponse<user[]>("ok", users));
    } catch (error) {
      return res.json(ApiResponse<string>("error", error.message));
    }
  }
}

export default new User();
