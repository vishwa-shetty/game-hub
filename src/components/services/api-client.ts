import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: { key: "ec71a87c1022492196d10a928da946c0" },
});
