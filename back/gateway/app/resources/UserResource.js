const BaseResource = require("./BaseResource");

class UserResource extends BaseResource {
  constructor(errMsgConfig) {
    super(errMsgConfig);
  }

  init(app) {
    this.requestLoginUser(app);
  }

  requestLoginUser(app) {
    app.post("/login", (request, response) => {
      const data = { name: 'Seee'};

      response.json({ success: true, data: data });
    });
  }
}

module.exports = UserResource;
