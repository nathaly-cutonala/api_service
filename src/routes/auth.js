import express from "express";
import container from "../config";
import User from "../models/user";

/**
 * @type {import('../controllers/auth').default} AuthControllers
 */
const controllers = container.resolve('authControllers')

const router = express.Router();
router.post("/auth", [
    body("code")
      .notEmpty()
      .isLength({ min: 6, max: 9 })
      .isString()
      .custom(async (value) => {
        const existingUser = await User.findOne({ where: { code: value } });
        if (existingUser) {
          throw new Error("The code already exists in the database");
        }
      }),
    body("name").notEmpty().isString().isLength({ min: 2, max: 100 }),
    body("gender").optional().isIn(["Woman", "Man"]),
    body("password").notEmpty().isLength({ min: 6 }).isString(),
    body("email").notEmpty().isEmail().withMessage("Invalid email format"),
    body("birthdate").notEmpty().isLength({ min: 5, max: 8 }).isString(),
    body("status").optional().isIn(["Active", "Inactive"]),
    body("phone").optional().isString().isLength({ min: 10, max: 15 }),
  ],
  controllers.register.bind(controllers)
);



