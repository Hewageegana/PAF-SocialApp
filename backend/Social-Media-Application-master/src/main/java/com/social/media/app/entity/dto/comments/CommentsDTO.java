package com.social.media.app.entity.dto.comments;

public class CommentsDTO {

    private String commentId;

    private String postId;

    private String commentedBy;

    private String commentedName;

    private String commentText;

    public String getCommentedName() {
        return commentedName;
    }

    public void setCommentedName(String commentedName) {
        this.commentedName = commentedName;
    }

    /**
     * @return value of commentId
     */
    public String getCommentId() {
        return commentId;
    }
    /**
     * @param commentId
     *     the commentId to set
     */
    public void setCommentId(final String commentId) {
        this.commentId = commentId;
    }
    /**
     * @return value of postId
     */
    public String getPostId() {
        return postId;
    }
    /**
     * @param postId
     *     the postId to set
     */
    public void setPostId(final String postId) {
        this.postId = postId;
    }
    /**
     * @return value of commentedBy
     */
    public String getCommentedBy() {
        return commentedBy;
    }
    /**
     * @param commentedBy
     *     the commentedBy to set
     */
    public void setCommentedBy(final String commentedBy) {
        this.commentedBy = commentedBy;
    }
    /**
     * @return value of commentText
     */
    public String getCommentText() {
        return commentText;
    }
    /**
     * @param commentText
     *     the commentText to set
     */
    public void setCommentText(final String commentText) {
        this.commentText = commentText;
    }
}
