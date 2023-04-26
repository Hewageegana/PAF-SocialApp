package com.social.media.app.controller;
import com.social.media.app.utils.exceptions.BaseException;
import org.springframework.web.bind.annotation.ExceptionHandler;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
public class BaseController {

    @ExceptionHandler(BaseException.class)
    public void handleHTTPException(final BaseException ex, final HttpServletRequest request,
        final HttpServletResponse response) {

        final String code = ex.getStatusCode();
        final String message = ex.getStatusMessage();

        final int status = ex.getHttpStatus().value();

        response.setStatus(status);

        this.setStatusHeaders(response, code, message);
    }

    public void setStatusHeaders(final HttpServletResponse response, final String code, final String message) {
        response.setHeader("response-code", code);
        response.setHeader("response-message", message);
    }

    public void setStatusHeadersToSuccess(final HttpServletResponse response) {
        this.setStatusHeaders(response, "SUCCESS", "Success");
    }
}
