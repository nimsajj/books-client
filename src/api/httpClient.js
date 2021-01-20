import axios from "axios";
//import { getJwt } from "../common/storage";

const JWT =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MTExNTcxNDcsImV4cCI6MTYxMTE2MDc0Nywicm9sZXMiOlsiUk9MRV9VU0VSIl0sImVtYWlsIjoicGVsbGV0aWVyLmphc0BnbWFpbC5jb20ifQ.naLYhMlvh8vueZQ_yOEj3DY4763YWyGuYSTCDL-76WYS-7qoJFPia7TQyZGqXu9xj3-9A2_qMq5OImb9ZmuKAy2eJCdW366d4k4BsYkqxJ5MtRfy9hpv-fCzxf7bhw3PzeopTCaUUmEiArV585qdEDcD9qohPwLu6_ilhyWVytcYTfTIlNafTOJx7xa2Uc63pbeLPspMtkRxQ8ggquUfNIJ8Z1jELVKc73WhHsYt2BPjXrWoemhk1t7cv9oUDnP_f3l5poxpwdb4ae__aJI7lZYXcTvdQe7q0X8uoWoRJjUySXlNJNPqUitXsIk-2mHpL2mQamZOwQslxhBocopjjas3WLa18rvPYN0PeMlXCP-jwba6Aq5ZcHII8DEm7XXXyrUEgXbBjGV1IL_PsPqDNq9ytNCadDQxSo4i-CXlVQ9SP9DXnOGi3-nlrYQe9BGyyEvN_FFQfOb0C3p-tw3mpUwU7wceXyL-g4YR_rmcntp2N1v-iJAsSZLaLq8_mkI4ZKoy3MKeWlQthCMShle8bvFbOyO6PTfNpDdiyLovYuGJymKV2wu9F4w9lbT4FWBR5cxNjjZqG80sTYg4E0o3CskyZrjfJKuQ9JfS4Jen2c9duKfYvmcWh21DWrC860TowYWgnGLN0l2yCBkN764J1gJZNeQZ7OChIc99ROybWUc";

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
