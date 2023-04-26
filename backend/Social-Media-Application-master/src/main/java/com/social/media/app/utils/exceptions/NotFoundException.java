package com.social.media.app.utils.exceptions;
import org.springframework.http.HttpStatus;
public class NotFoundException extends BaseException {

    public NotFoundException(final String statusCode, final String statusMessage) {
        super(HttpStatus.NOT_FOUND, statusCode, statusMessage);
    }
}
