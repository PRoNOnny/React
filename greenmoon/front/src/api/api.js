
import axios from "axios";

const baseApi = "http://localhost:";
const port = 3001;

export default class BaseApi {
  constructor() {
    this.Url = `${baseApi}${port}`;
  }

  loginApi(user: string, pass: string, callback) {
    const url = this.Url + "/login";
    axios
      .post(url)
      .then((result) => {
        callback(result.data);
      })
      .catch(() => {
        callback({ success: false });
      });
  }

  movieApi( callback) {
    const url = this.Url + "/movie";

    axios
      .get(url)
      .then((result) => {
        callback(result.data);
      })
      .catch(() => {
        callback({ success: false });
      });
  }
}
