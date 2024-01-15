const HttpCode = require('../shared/httpCodes');
const HttpMessage = require('../shared/httpmessages');

class BaseService {
    constructor() {
        this.httpCode = new HttpCode;
        this.httpMessage = new HttpMessage;
    }
}

module.exports = BaseService;