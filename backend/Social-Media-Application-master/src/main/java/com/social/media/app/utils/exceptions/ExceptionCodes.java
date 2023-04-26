package com.social.media.app.utils.exceptions;
public enum ExceptionCodes {

    USER_PROFILE_NOT_FOUND("User not found"),

    POST_NOT_FOUND("Post not found"),

    POST_PERMISSION_DENIED("Post permission denied"),

    COMMENT_NOT_FOUND("Comment not found"),

    STATUS_NOT_FOUND("Status not found"),

    STATUS_PERMISSION_DENIED("Post permission denied");

    private final String errorDescription;

    ExceptionCodes(final String errorDescription) {
        this.errorDescription = errorDescription;
    }

    public String getErrorDescription() {
        return errorDescription;
    }
}
