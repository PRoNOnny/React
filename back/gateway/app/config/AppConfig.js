class AppConfig {

    constructor(config) {
        this._appPort = process.env.APP_PORT | 3001
        this._appLocalHost = config.get('localhost')
    }

    get appLocalHost() {
        return this._appLocalHost
    }

    get appPort() {
        return this._appPort
    }
}

module.exports = AppConfig;