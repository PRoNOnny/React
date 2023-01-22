const log4js = require("log4js")

class BaseResource {
    HTTP_CODE_OK = 200
    HTTP_CODE_CREATED = 201
    HTTP_CODE_BAD_REQ = 400
    HTTP_CODE_UNAUTHORIZED = 401
    HTTP_CODE_NOT_FOUND = 404
    HTTP_CODE_INTERNAL_SERVICE_ERROR = 500


    constructor(errMsgConfig) {
        this._logger = log4js.getLogger();
        this._errMsgConfig = errMsgConfig;
    }

    responseErrorResponse(response, httpCode, errMsgId, loggerText) {
        var errMsg = this._errMsgConfig.getErrorMessage(errMsgId);
        response.status(httpCode)
            .json({
                success: false,
                code: errMsg.code,
                message: errMsg.message
            });
    }
}

module.exports = BaseResource;