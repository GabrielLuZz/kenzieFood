export class UserService {
  static baseUrl = "https://api-kenzie-food.herokuapp.com/auth";

  static async registerUser(data) {
    const response = await fetch(`${this.baseUrl}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((data) => data.json())
      .then((data) => data)
      .catch((error) => error);

    return response;
  }

  static async loginUser(data) {
    const response = await fetch(`${this.baseUrl}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((data) => data.json())
      .then((data) => data)
      .catch((error) => error);

    return response;
  }
}

export class Authentication {
  static async userVerify() {
    const token = localStorage.getItem("Token");
    let data = {};
    if (token !== null) {
      data = await Api.privateProducts(token);
    }
    if (data.message !== undefined) {
      return false;
    } else {
      return true;
    }
  }
}
