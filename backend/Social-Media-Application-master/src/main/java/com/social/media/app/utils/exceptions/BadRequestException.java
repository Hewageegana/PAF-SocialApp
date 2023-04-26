package com.social.media.app.utils.exceptions;
import org.springframework.http.HttpStatus;
public class BadRequestException extends BaseException{

    public BadRequestException(final String statusCode, final String statusMessage) {
        super(HttpStatus.BAD_REQUEST, statusCode, statusMessage);
    }
}
