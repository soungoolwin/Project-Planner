import axios from "axios";
import https from "https";

const axiosInstance = axios.create({
  httpsAgent: new https.Agent({
    rejectUnauthorized: false, // Bypass SSL certificate validation
  }),
});

export default axiosInstance;
