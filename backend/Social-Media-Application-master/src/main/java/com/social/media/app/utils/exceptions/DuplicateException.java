package com.social.media.app.utils.exceptions;
import org.springframework.http.HttpStatus;
public class DuplicateException extends BaseException {

    public DuplicateException(final String statusCode, final String statusMessage) {
        super(HttpStatus.CONFLICT, statusCode, statusMessage);
    }
}
