import axios from "axios";
//import { getJwt } from "../common/storage";

const JWT =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MTEzMzQ0NzAsImV4cCI6MTYxMTMzODA3MCwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJlbWFpbCI6InBlbGxldGllci5qYXNAZ21haWwuY29tIn0.H5euK6pxyk-e_98xWvw0xjrfd1tPL1jjdnsM1vAp660Jzkv7ux98XLrG7HZJb9nHC0-ZBnR1JtE0XFpwE_DmYUKcTXJEonAnDQ7jS8kmCi0xDCAdHGDOHl2cEgV1xPvA92kmtKG1R01aaczzgHMFcKSbfInw0uCBM9pGbnM82LP_NlNxR_m9RiLHDkIXnZdnhcRrq9fCZ58RpN_4f3-KMTT9C-n5ad-rvovOaQBC7ocsa8T52QZw7q01J7THynYRSQmcy1yTD7qlv2VTjQD6HgSCIuL0SS0rpZBrm3_cVsNx4iafiBl4YTzSildUEFZYnM2y0KNthk3tRJvjvGYyNptTaboT34aKLz-CclXLiCwzvBGoSxzXB3pxvf4YLDWL55ms_Gxbzf7wBxQ8IP0U5hHLxi4-sHc9aCBxG0-ZitXK2DFMoDHsA01h196Qfxg_es10WLTRkaq5nT1VjMgv0tY3Il2u5fuhQ21BchyPBALr4GJOIrv-fB4bbzO338zSA6KmXvl7GllaGv6MstaomOByUs6eCUtP-ZL7WQgIVF0OUs2V-MynAMT8yGPP9o8UtpGCxT_yi0mM-UWFnphsr0n_XWP0b4HdfmXfPXFSJme1Juz-mxdPs7v73CRaSEmtYXXGmeLu5iCDuEuVx_o_3pxu7Ad4bJi4r8m_oaCekpU";

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
