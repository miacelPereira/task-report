import { Request, Response } from "express";
import { ApiResponse, API_RESPONSE_MESSAGE } from "../utils/ApiResponse";
import { user, PrismaClient, PrismaClientRequestError } from "@prisma/client";

class User {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  public async index(req: Request, res: Response): Promise<Response> {
    try {
      const users = await this.prisma.user.findMany();
      return res.json(
        ApiResponse<user[]>(API_RESPONSE_MESSAGE.REQUEST_SUCCESSFUL, users)
      );
    } catch (error) {
      console.log(error);

      return res.json(ApiResponse<string>("error", error.message));
    }
  }

  public async store(req: Request, res: Response): Promise<Response> {
    try {
      const { name, email, password } = req.body;

      const isRegisteredUser = await this.prisma.user.findOne({
        where: { email }
      });

      if (isRegisteredUser) {
        return res.json(
          ApiResponse<user>("User already registered", isRegisteredUser)
        );
      }

      const user = await this.prisma.user.create({
        data: {
          name,
          email,
          password
        }
      });

      return res.json(
        ApiResponse<user>(API_RESPONSE_MESSAGE.REQUEST_SUCCESSFUL, user)
      );
    } catch (error) {
      const err = new PrismaClientRequestError(error);

      console.dir(err.message);

      return res.json(ApiResponse<string>("error", err.message));
    }
  }
}

export default new User();
