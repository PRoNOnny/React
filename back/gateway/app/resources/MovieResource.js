const BaseApi = require("../api/BaseApi");
const BaseResource = require("./BaseResource");
const baseApi = new BaseApi();

class MovieResource extends BaseResource {
  constructor(errMsgConfig) {
    super(errMsgConfig);
  }

  init(app) {
    this.requestMovieList(app);
  }

  requestMovieList(app) {
    app.get("/movie", (request, response) => {
      baseApi
        .MovieApi().then((result) => {
          response.json({ success: true, data: result.data });
        })
        .catch(() => {
          response.json({ success: false });
        });
    });
  }
}

module.exports = MovieResource;
