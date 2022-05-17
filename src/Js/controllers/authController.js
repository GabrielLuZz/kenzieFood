class Authentication {
  static async userVerify() {
    const token = localStorage.getItem("Token");
    let data = null;
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
