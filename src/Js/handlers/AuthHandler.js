import { ProductService } from "../services/ProductService.js";

export class AuthHandler {
  static async userVerify() {
    const token = localStorage.getItem("Token");
    let data = {};
    if (token !== null) {
      data = await ProductService.getPrivateProducts(token);
    }
    if (data.message !== undefined) {
      return false;
    } else {
      return true;
    }
  }
  static async login(data) {
    const user = await UserService.loginUser(data);
    if (user.error !== undefined) {
      return false;
    }
    localStorage.setItem("Token", user);
    return true;
  }

  static async register(data) {
    const user = await UserService.register(data);
    if (user.id !== undefined) {
      localStorage.setItem("userId", user.id);
      return true;
    }
    return false;
  }
}
