import prisma from "../utils/database";
import { user as User } from "@prisma/client";

export type Users = {
  name: string;
  email: string;
};

class UserRepository {
  static async getAll(): Promise<Users[]> {
    return await prisma.user.findMany({
      select: {
        name: true,
        email: true
      }
    });
  }

  static async getOne(email: string): Promise<User> {
    return await prisma.user.findOne({
      where: {
        email
      }
    });
  }

  static async create({ name, email, password, login, role }): Promise<User> {    
    return await prisma.user.create({
      data: {
        name,
        email,
        password,
        login,
        role_id: { connect: { id: parseInt(role) } },
      }
    });
  }
}

export default UserRepository;
