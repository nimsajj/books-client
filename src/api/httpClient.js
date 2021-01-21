import axios from "axios";
//import { getJwt } from "../common/storage";

const JWT =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MTEyNTM4OTUsImV4cCI6MTYxMTI1NzQ5NSwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJlbWFpbCI6InBlbGxldGllci5qYXNAZ21haWwuY29tIn0.iCu5kK1OcsQvsR0DFsEmx545pUTX3LMMwTN6IvZCZkyFnsbk-59DEA31fVBBQLmxgno4DNyIb1jbT_OgwoXoBfrZobEtqooDHJQTySetr1s82ZEyJfkav95mc8JcorlsExD9FBK4spAOLvd2QnzvO9BfaHKu9-Ye7jKuWqw_6GvZsR7ZH35jIQEU_WoG29wiefvUgiPBHiBH7O2dVG8J-vRbvPTYtdx3-1jz4uqUx1DvbHAsdLDd8ANKm2P9cusr2iGEAh-X10-e12ma9nJbpXH0RfMgI143YMMhDMwugdHHIgLSr9NjdQDygym3gz48Jda1sC_Y8m3mE28t1o0hegrPriI6ZwTegbcwB70yUziEJMxC_PKbHHAPGLSMYC9tOQPJfV0WwFdC2hPGUws7Fpg0qg7daRyEjm86XZSfYUtdh1xYnHwA6HL9c6Ruc3J1FtIRqTaHp5MNzlzkdvltVjWmDLJhmeUstFsLaM76_tDUUs5HN7wZ3KYkPNVQ-JmseMendX7lQ0AxV8d3EPdJEMByjP6eCmmgumA1y_lVVxwDNZj3bu4VLd5MTgM1H0Ahz6RwgtFs8sIFoYFv3TjNyoG8S-2sKLqEOseT5FoqZrtup5w2TiM19GiN9-Pv9A3sOrkixYom7e0v0yE8Oqb1ip7V3u8jUMBIYXIZWQlEB3A";

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
