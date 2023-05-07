package com.social.media.app.entity.model;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.util.Date;
@Entity
public class Comments {

    @Id
    @GeneratedValue(generator = "system-uuid")
    @GenericGenerator(name = "system-uuid", strategy = "uuid2")
    @Column(name = "ID")
    private String commentId;

    @ManyToOne
    @JoinColumn(name = "postID")
    private Post post;

    @ManyToOne
    @JoinColumn(name = "userProfileID")
    private UserProfile commentedBy;

    private String commentText;

    private String commentedName;

    @CreationTimestamp
    private Date createdDate;

    @UpdateTimestamp
    private Date updatedDate;

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
     * @return value of post
     */
    public Post getPost() {
        return post;
    }

    /**
     * @param post
     *     the post to set
     */
    public void setPost(final Post post) {
        this.post = post;
    }

    /**
     * @return value of commentedBy
     */
    public UserProfile getCommentedBy() {
        return commentedBy;
    }
    /**
     * @param commentedBy
     *     the commentedBy to set
     */
    public void setCommentedBy(final UserProfile commentedBy) {
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
    /**
     * @return value of createdDate
     */
    public Date getCreatedDate() {
        return createdDate;
    }
    /**
     * @param createdDate
     *     the createdDate to set
     */
    public void setCreatedDate(final Date createdDate) {
        this.createdDate = createdDate;
    }
    /**
     * @return value of updatedDate
     */
    public Date getUpdatedDate() {
        return updatedDate;
    }
    /**
     * @param updatedDate
     *     the updatedDate to set
     */
    public void setUpdatedDate(final Date updatedDate) {
        this.updatedDate = updatedDate;
    }
}
