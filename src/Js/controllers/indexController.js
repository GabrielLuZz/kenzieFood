import { ShowHandler } from "../handlers/ShowHandler.js";
import { AuthHandler } from "../handlers/AuthHandler.js";

const verify = await AuthHandler.userVerify();

ShowHandler.headerMain(verify)
const products = await ShowHandler.getProducts(verify);

ShowHandler.showProducts(products)