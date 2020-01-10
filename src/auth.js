const token = "token";

export const auth = {
  get: () => localStorage.getItem(token),
  set: value => localStorage.setItem(token, value),
  check: () => {
    const item = localStorage.getItem(token);
    return item && item === "true";
  }
};
