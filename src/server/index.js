// import axios from "axios";

// const axioss = axios.create({
//   baseURL: "https://ap-blog-backend.up.railway.app/api/v1",
  
//   timeout: 10000,
  
// })

// export default axioss

import axios from "axios";
import { TOKEN } from "../constants";
import Cookies from "js-cookie";

const axioss = axios.create( {
  baseURL: "https://ap-blog-backend.up.railway.app/api/v1",
  headers: { Authorization: `Bearer ${Cookies.get(TOKEN)}` }, // Use backticks and ${} for interpolation
  timeout: 10000,
} );

export default axioss;
