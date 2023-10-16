import axios from "axios";

const axioss = axios.create({
  baseURL: "https://ap-blog-backend.up.railway.app/api/v1",
  // https://ap-blog-backend.up.railway.app
  timeout: 10000,
})

export default axioss