import axios from "axios";
//import { getJwt } from "../common/storage";

const JWT =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MTEyNTc1OTIsImV4cCI6MTYxMTI2MTE5Miwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJlbWFpbCI6InBlbGxldGllci5qYXNAZ21haWwuY29tIn0.qdilRBssvY_--2tPwNxXy_ETPgYGuP6xlbO86X1BP9W3Uf0b9a4P17lV3BpGfJkRFCOKiIZfSyHcBhMen9nt5fRT_BECl_IOMC6KDY6h40j5DJG2KuhMR9UVpsssVMAUHWCbaVmShTd9H3RfvUpxcstIKWCUmuOu5A_ZgHqmIi04B6zOs0XCv2sifr7iFhYiKVSSlvmzKwG8iUg4w8myvaZb1WRNTa9xKsbBubVzGJLnFQMLa-ZcJ7gxT7hiO8r5-3iqx3TGTTFIa5oUygSeo5rjBA2vX1lkIFMjDnD4gqauLu4bW0OR57N89KWDngL6oq0kLxyuIsyGYoCycyTewkAqSzKbNh0YLPrGrvZF_lsI7qOwxcGRH80sIGXY2p5SYew4Bvavrnh8RAxZ7sHpD99aOLBypBJizVe6jEGsmTzZZ00ny5LoXOAxF2blRUjf7ctnvNnPMAlGtUi3IYadI9RD47Th2cuj2PRgbiC2jccisfjoI5CqjgNnnpqCsBRKNoOEakXbodCjdAvq_0AVZhnaOdTvwFzOzLQxyt0DZweh6VsV5E0N1U_Du9BgqGxHvhZrvQM66UrczO06b-oDUsDn2i1KEx86d4XlZwjSn0bYq0JRIQoKXvBAm3PRnZp5af3DzIvmmQUq_FDmBtAd9VrAugdfBjguckLTVGV6Eeg";

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
