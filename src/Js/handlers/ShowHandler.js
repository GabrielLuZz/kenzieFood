import { Authentication } from "./AuthHandler.js";
export const headerMain = async () => {
  let verify = await Authentication.userVerify();
  const container = document.querySelector(".header");
  container.appendChild(headerTitle());
  container.appendChild(headerSub());
  container.appendChild(headerSearch());

  if (verify) {
    container.appendChild(headerUser());
  } else {
    container.appendChild(headerSignIn());
  }
};

const headerTitle = () => {
  const strong = document.createElement("strong");
  strong.classList.add("header__strong");
  strong.innerText = "Kenzie";
  return strong;
};

const headerSub = () => {
  const small = document.createElement("small");
  small.classList.add("header__small");
  small.innerText = "food";
  return small;
};

const headerSearch = () => {
  const input = document.createElement("input");
  input.classList.add("header__search");
  input.type = "text";
  input.name = "searchBar";
  input.placeholder = "Pesquisar por produto";
  return input;
};

const headerSignIn = () => {
  const button = document.createElement("button");
  button.classList.add("header__singup");
  button.innerText = "Sign in";
  return button;
};

const headerUser = (userImg) => {
  const img = document.createElement("img");
  img.classList.add("header__user");
  img.src = userImg;
  img.addEventListener("click", (event) => {
    event.preventDefault();
    headerUserPopUp();
  });
  return img;
};

const headerUserPopUp = (event) => {};
