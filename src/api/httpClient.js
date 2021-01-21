import axios from "axios";
//import { getJwt } from "../common/storage";

const JWT =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MTEyNDE0NDQsImV4cCI6MTYxMTI0NTA0NCwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJlbWFpbCI6InBlbGxldGllci5qYXNAZ21haWwuY29tIn0.PytPSX1_2gdqSPb909uRJLWmZ02DXo6XrbXULLWHcX4Y48HpJdbwaE4ilOFQ6wwC3ydLLj6sg2BaO0rVs-ux0UldRSr1KCjYuUPuiQZpsBx4n1y2U8Sd7OhOjKX7QmwHMJvuo50nhLa-uc4pXINLHp94PtShKakbo9yLWeaIEiryVW_sWqj6C51zStydUe_1qxd5jRRAtwx7CETefoJrdHao-1jZUVX4kx_yopD0mmhyAoG5WUHeAM7hpzuT0IWZhesPweoJGyr3PVq0Apbn-MY2ngBqcMHR1p9uwQds6B9_Db0Pxo9p1gIX5cBC3Fa7Ytz9_FUtkysImKFErEsP3Wa6Ou3dOA5wsyS1qV80c3g6dwR0HcV6Erwu8CbF2q8N4Bqev3SO1Dyg8omGuDfUY4akxouRmM4qKVkRyZhHVisKjuWv9u7Du-0qN7JU0jWv-kWfy2_rjnI5kSA3XH6U4tP5EFnVkHhf7MevLqo8JwoNC3vSOl0aRk6D7awKGFCPV-Jm1BhzbzRDisfG_KypMdoIDJM_Bbuj8uSeCRwFic9tDcQKQvcdE4zAlO9jNMK7w3Zfmkr_fyeYyGmTXE-0m0j3JeWpeGUT4QTdsKSX9FyvBvD7y8IfLHD3_mOP3n-lNtMhHirvvQ3UEa1xqihxV4qr_pXTWG1g-WKO-wgcrSM";

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
