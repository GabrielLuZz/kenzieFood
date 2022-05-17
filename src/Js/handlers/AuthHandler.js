import { UserService } from "../services/UserService.js";

export class Authentication {
  static async userVerify() {
    const token = localStorage.getItem("Token");
    let data = {};
    if (token !== null) {
      data = await UserService.privateProducts(token);
    }
    if (data.message !== undefined) {
      return false;
    } else {
      return true;
    }
  }
}
export const login = async (data) => {
  const user = await UserService.loginUser(data);
  if (user.error !== undefined) {
    return false;
  }
  localStorage.setItem("Token", user);
  return true;
};

export const register = async (data) => {
  const user = await UserService.register(data);
  if (user.id !== undefined) {
    localStorage.setItem("userId", user.id);
    return true;
  }
  return false;
};
