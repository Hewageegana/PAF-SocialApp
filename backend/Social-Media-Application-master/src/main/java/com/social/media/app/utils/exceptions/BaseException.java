package com.social.media.app.utils.exceptions;
import org.springframework.http.HttpStatus;
public class BaseException extends RuntimeException {

    private String statusCode;

    private String statusMessage;

    private HttpStatus httpStatus;

    public BaseException(final HttpStatus httpStatus, final String statusCode, final String statusMessage) {
        super(statusCode);
        this.statusCode = statusCode;
        this.httpStatus = httpStatus;
        this.statusMessage = statusMessage;
    }

    /**
     * @return value of statusCode
     */
    public String getStatusCode() {
        return statusCode;
    }
    /**
     * @param statusCode
     *     the statusCode to set
     */
    public void setStatusCode(final String statusCode) {
        this.statusCode = statusCode;
    }
    /**
     * @return value of statusMessage
     */
    public String getStatusMessage() {
        return statusMessage;
    }
    /**
     * @param statusMessage
     *     the statusMessage to set
     */
    public void setStatusMessage(final String statusMessage) {
        this.statusMessage = statusMessage;
    }
    /**
     * @return value of httpStatus
     */
    public HttpStatus getHttpStatus() {
        return httpStatus;
    }
    /**
     * @param httpStatus
     *     the httpStatus to set
     */
    public void setHttpStatus(final HttpStatus httpStatus) {
        this.httpStatus = httpStatus;
    }
}
