import { post } from ".";
import { atom, useRecoilState } from "recoil";

export const authTokenState = atom({
  key: "authToken",
  default: { username: "" },
});

export const useAuthActions = () => {
  const [authToken, setAuthToken] = useRecoilState(authTokenState);

  return { login, register };

  /**
   * @param { {username : string, password : string} }
   */
  async function login(req) {
    const res = await post(`auth/signin`, req);
    if (res.status === 201) {
      localStorage.setItem("studyCapstone", res.data.accessToken);
      setAuthToken({
        ...authToken,
        username: localStorage.getItem("studyCapstone"),
      });
    }

    return res;
  }

  /**
   * @param { {username : string, password : string, nickname : string, introduce : string, area : string, category : string} }
   */
  async function register(req) {
    const res = await post(`auth/signup`, req);
    return res;
    // if (res.status === 201) {
    //   localStorage.setItem("studyCapstoneId", req.username);
    // }
  }
};
