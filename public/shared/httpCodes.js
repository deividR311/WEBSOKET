class HttpCode {
    constructor() {
        this.success = 200;
        this.created = 201;
        this.badRequest = 400;
        this.unauthorized = 401;
        this.Forbidden = 403;
        this.notFound = 404;
        this.serverError = 500;
    }
}

module.exports = HttpCode;