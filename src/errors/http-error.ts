import { HttpErrorMessages } from "./http-error-messages";
import { HttpStatusCodes } from "./http-status-codes";


export class HttpError extends Error {
    statusCode: HttpStatusCodes;
    value: string;

    constructor(statusCode: HttpStatusCodes, value: string) {
        const messageTemplate = HttpErrorMessages[statusCode] || "An error occurred!";
        super(HttpError.formatMessage(messageTemplate, value));
        this.statusCode = statusCode;
        this.value = value;
        this.name = "HttpError";
    }

    private static formatMessage(template: string, value: string): string {
        return template.replace("{value}", value);
    }
}
