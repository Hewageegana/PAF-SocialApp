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
public class Status {

    @Id
    @GeneratedValue(generator = "system-uuid")
    @GenericGenerator(name = "system-uuid", strategy = "uuid2")
    @Column(name = "statusId")
    private String id;

    private String statusContent;

    @ManyToOne
    @JoinColumn(name = "userProfileID")
    private UserProfile postedBy;

    @CreationTimestamp
    private Date createdDate;

    @UpdateTimestamp
    private Date updatedDate;

    /**
     * @return value of id
     */
    public String getId() {
        return id;
    }
    /**
     * @param id
     *     the id to set
     */
    public void setId(final String id) {
        this.id = id;
    }
    /**
     * @return value of statusContent
     */
    public String getStatusContent() {
        return statusContent;
    }
    /**
     * @param statusContent
     *     the statusContent to set
     */
    public void setStatusContent(final String statusContent) {
        this.statusContent = statusContent;
    }
    /**
     * @return value of postedBy
     */
    public UserProfile getPostedBy() {
        return postedBy;
    }
    /**
     * @param postedBy
     *     the postedBy to set
     */
    public void setPostedBy(final UserProfile postedBy) {
        this.postedBy = postedBy;
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
