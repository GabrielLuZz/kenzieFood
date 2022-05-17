import { UserService } from "../services/UserService.js";
export class Authentication {
  static async userVerify() {
    const token = localStorage.getItem("Token");
    let data = {};
    if (token !== null) {
      data = await Us.privateProducts(token);
    }
    if (data.message !== undefined) {
      return false;
    } else {
      return true;
    }
  }
}

const login = async (data) => {
  const user = await Api.login(data);
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
