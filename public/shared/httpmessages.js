class HttpMessage {
    constructor() {
        this.success = 'Success';
        this.created = 'Created successfully';
        this.badRequest = 'Bad Request';
        this.unauthorized = 'Unauthorized';
        this.Forbidden = 'Forbidden';
        this.notFound = 'Service not found';
        this.serverError = 'Internal Server Error';
        this.notificationError = 'Azure Notification Error';
    }
}

module.exports = HttpMessage;