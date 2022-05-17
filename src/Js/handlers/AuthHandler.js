import { Authentication } from "../controllers/authController.js";
import { UserService } from "../services/UserService.js";

const login = async (data) => {
  const user = await Api.login(data);
  if (user.error !== undefined) {
    return false;
  }
  localStorage.setItem("Token", user);
  return true;
};
