import axios from "axios";
//import { getJwt } from "../common/storage";

const JWT =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MTIzODgzNjEsImV4cCI6MTYxMjM5MTk2MSwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJlbWFpbCI6InBlbGxldGllci5qYXNAZ21haWwuY29tIn0.c-UrScKSvLsqi9q2jYwnP4UeC95XTrTzEKufTEdq2FyCMjzujBSbBTQUWOQKJwFrR8012VjmYFOs9rmiDlbO2eBkMwBQkDdwgeNVMzExxkL8o-KrOB2grk2pGD47PxBFsU8f_zzYuh252GmAYliKPRV5RJqHMV0BexW2KeuODxz-EYZp_1scbAa5kMKQg3dSrlp4Q3xyKtt9cHvz5IhdLSifKCA7ytrKL1yWIZvCbqECWG5hYqZwBQCnWpb5ziyYuBGiJGY1MWmTU1056YHS34eDim64yqc-h1iTSl5r9Zh22Ze8AUw3Duqux0fwXg9w0XpARTJCYIfuOAX4H9sVz2DZbuPqryWHvljoFRHimsnBDvUflLgn4hIfaDaqjAs3aTY9QKs6FFV6lPXYFg_h4jnW-WFU6RMFyyfvmn1EUligSWcfpmS1ucgYeaa_Yy8tpKeBwpnoTchZ2NoMwrEBhR9Ud8EcEenTCto8Wn67S16aDx9p222siUyVzJ0YsBtkzSEzw9FdqptqLYC-ZRXeIv-hei5XaB3yveROUGpntHEpkr7l4KH95gmqDxv6NSv23Rbp0ggzuT87aImCFmh4raOxjGtEitT0AKYsgKm-8g1QoAaf6Cwmzt1ZszwpCOeTu1PfHQATDtA5KksZjpkIHcq2IJlg4SeyxDzZe_bbUrw";

const config = {
  baseURL: "http://localhost:8000/api/",
  responseType: "json",
  headers: {
    Accept: "application/json",
  },
};

const httpClient = axios.create(config);

httpClient.interceptors.request.use(
  function (config) {
    if (JWT !== null) {
      config.headers.Authorization = `Bearer ${JWT}`;
    }

    return config;
  },
  function (err) {
    return Promise.reject(err);
  }
);

export default httpClient;
