import * as yup from "yup";
import { Request, Response, NextFunction } from "express";
import { ApiResponse, MESSAGE } from "./ApiResponse";

class Validator {
  static async ValidateUser(req: Request, res: Response, next: NextFunction) {
    const userSchema = yup.object({
      name: yup.string().required(),
      email: yup
        .string()
        .email()
        .required(),
      password: yup.string().required(),
      login: yup.string().required(),
      role: yup.number().required(),
    });

    try {
      await userSchema.validate(req.body, { abortEarly: false });

      return next();
    } catch (error) {
      return res.json(
        ApiResponse<string[]>(
          MESSAGE.VALIDATION_ERROR,
          error.errors
        )
      );
    }
  }
}

export default Validator;
