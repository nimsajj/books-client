import axios from "axios";
//import { getJwt } from "../common/storage";

const JWT =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MTIyNzcxMDIsImV4cCI6MTYxMjI4MDcwMiwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJlbWFpbCI6InBlbGxldGllci5qYXNAZ21haWwuY29tIn0.Up_UTu1pdDVVOaOVg97lmtmbotzngF8f1pYlnDiYo5RFcCiaFRKg3lHudaO5zi2i4Qi4SoxM0Gl0Vw31Bgi3eOQg2vLxKxApGr21gfZVG47pPXTYYYtqIhluFk1VGn-AgsV5tEfYTbelfbEPZsnT3jnhUWF4VDWa_hzxx5NWR11LckoPWQyKY9dJxYBeGTjQTBR5YH367YMGC_yeSE57zWpgLBlWEgThU1Oget8-A2rlId10igFZ3NrCGUowcEHQHGxExYWQRbjwP82nNUgktteEZVXm7fvgbvflISPy--lgE2twLCBZlKkM7UgpBsBted6ivLsZqMFDDoEeTcxK-Y5hOj5M74e-ZHa-jQ_J5_9H0Kb9ccX6iOkluuBsNG_wmws3Y3XeypI57tKloThyxo6tZ6PkiNZnuzXcxGIq6QUlcc8N7B_1Ax7pQ_KOL3BRM-kftPfzw43wDlGsTQVz4YoCZTj5AjS7yVjdX75PgGuwI0EpEj8Sldl5DRqKSOKsXozKGzvbSwUsXEFFTmwgg9GSB6dRfY1r2a2-HfgxLgieQkMK7hV0pCrFdkwRw09WTWbCcYGZTljhD_583hhYHuWKgOljEmfRBIeVz0sAxK6gs3xMq6FaBAoDSQm-yWyFSoDBXdhz6fOhzykA03Pbcp23NyNf7pzctxl-HLF9uY8";
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
