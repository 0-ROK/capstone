import { get, post } from ".";

export const useAuthActions = () => {
  return { login, register };

  /**
   * @param { {username : string, password : string} }
   */
  async function login(req) {
    const res = await post(`auth/signin`, req);
    localStorage.setItem("studyCapstone", res.data.accessToken);

    if (res.status === 201) {
      localStorage.setItem("userID", req.username);
    }

    return res;
  }

  /**
   * @param { {username : string, password : string, nickname : string, introduce : string, area : string, category : string} }
   */
  async function register(req) {
    const res = await post(`auth/signup`, req);

    return res;
  }
};
