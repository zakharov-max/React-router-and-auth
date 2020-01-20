import { auth } from "./auth";

const signIn = async (login, password) => {
  try {
    return await new Promise((resolve, reject) => {
      fetch("http://localhost:3000/login", {
        method: "GET"
      }).then(() => {
        setTimeout(() => {
          if (login === "admin" && password === "12345") {
            auth.set(true);
            resolve(true);
          } else {
            reject(new Error("Login error"));
          }
        }, 2000);
      });
    });
  } catch (error) {
    console.log(error);
  }
};

const getProfile = async () =>
  await new Promise(resolve => {
    fetch("http://localhost:3000/profile", {
      method: "GET"
    }).then(() => {
      setTimeout(() => {
        const profile = {
          name: "Maksim",
          email: "mn.zaharov@mail.ru"
        };

        resolve(profile);
      }, 2000);
    });
  });

export { signIn, getProfile };
