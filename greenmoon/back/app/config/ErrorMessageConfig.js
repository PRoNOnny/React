class ErrorMessageConfig {

    constructor(config) {
        this._errorMessage = config.get('error_message')
    }

    getErrorMessage(code) {
        return this._errorMessage[code]
    }
}

module.exports = ErrorMessageConfig;