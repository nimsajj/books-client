import axios from "axios";
//import { getJwt } from "../common/storage";

const JWT =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MTIzNjU5MzMsImV4cCI6MTYxMjM2OTUzMywicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJlbWFpbCI6InBlbGxldGllci5qYXNAZ21haWwuY29tIn0.jMxq0wk2b2M_AkNB7KejfZ87TM-uSqw_Lj28P35bf82n8fISeTBYMvkc_BrCP94qk-wI4GxYplivj5I_UGMLYh9GBF5W7a0hun2RC4wsgCCnBa_1VIIUWkbrWU7IlRZmhm5RhKHFE_oAlRKXapyTEzt2ddUwQJl8x6nOu1WA7qRQum_FFAVYfeDh6NiE6nQsFVTkuLENos9HDyU0CxJa5mvzDD577L1IpBTXNBCFyZhqCPYhB0EIT2iuUfrJQH9gLcTlGBWYKz1wu1WuhBwafVRlyPGosj_sMVzxJz7qwVpoF6pL-6EVrJh3z86xs0aAjA-4NdzM_BCXqpN3HhQ0Xlwig_DnT6-mDjO_SUJ4zinuAtqtbpaBIMYXzdRGIizuMY7Q3gdFdDoBaYFoRqz08qCJhLi-eankJHP_ifi9F6jccBVO11qL8vCQJ2mUL9m9-OS11BZ6-aldZmQ4CUPootxNs_-YnVKdsrJwVDuVO5-9Lwv94j28eBRGg0Bk9nIqa_XSzkYc-sN14VyT1eAAKrJx3dRmnAPrwZTET3bMY7STw-Z1ZBPYtpIya7IY6XS0geE7Gk7X0Iq6jZiaSm6sVZFn_s1rOXv8X9Crs3jzMur3k50mpR9SpQlQCJaOSiiLvJ0aGu28d6daL5DtzjInyvwofCoQLqQ1XXgzcCQkpfY";

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
