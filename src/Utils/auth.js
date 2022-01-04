

export const TOKEN_KEY = "@nextAction-Token";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const login = token => {
  localStorage.setItem(TOKEN_KEY, token);
};
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};


export const auth = {
    isAuthenticated: false,
    login(callBack) {
      auth.isAuthenticated = true
      callBack()
    },
    logout(callBack) {
      auth.isAuthenticated = false
      callBack()
    },
  }
  