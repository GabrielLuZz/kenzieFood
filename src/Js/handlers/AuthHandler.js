import { Authentication } from "../controllers/authController.js";
import { UserService } from "../services/UserService.js";

const login = async (data) => {
  const user = await UserService.login(data);
  if (user.error !== undefined) {
    return false;
  }
  localStorage.setItem("Token", user);
  return true;
};

const register = async (data) => {
  const user = await UserService.register(data);
  if (user.id !== undefined) {
    localStorage.setItem("userId", user.id);
    return true;
  }
  return false;
};
