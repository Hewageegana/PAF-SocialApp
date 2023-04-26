package com.social.media.app.entity.model;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
@Entity
public class UserProfile {

    @Id
    @GeneratedValue(generator = "system-uuid")
    @GenericGenerator(name = "system-uuid", strategy = "uuid2")
    @Column(name = "ID")
    private String profileId;

    private String userId;

    private String profileName;

    private int age;

    private String gender;

    @OneToMany(mappedBy = "postedBy", fetch = FetchType.LAZY, cascade = {
        CascadeType.ALL
    }, orphanRemoval = true)
    private List<Post> postList = new ArrayList<>();

    @OneToMany(mappedBy = "postedBy", fetch = FetchType.LAZY, cascade = {
        CascadeType.ALL
    }, orphanRemoval = true)
    private List<Status> statusList = new ArrayList<>();

    @CreationTimestamp
    private Date createdDate;

    @UpdateTimestamp
    private Date updatedDate;

    /**
     * @return value of profileId
     */
    public String getProfileId() {
        return profileId;
    }
    /**
     * @param profileId
     *     the profileId to set
     */
    public void setProfileId(final String profileId) {
        this.profileId = profileId;
    }
    /**
     * @return value of userId
     */
    public String getUserId() {
        return userId;
    }
    /**
     * @param userId
     *     the userId to set
     */
    public void setUserId(final String userId) {
        this.userId = userId;
    }
    /**
     * @return value of profileName
     */
    public String getProfileName() {
        return profileName;
    }
    /**
     * @param profileName
     *     the profileName to set
     */
    public void setProfileName(final String profileName) {
        this.profileName = profileName;
    }
    /**
     * @return value of postList
     */
    public List<Post> getPostList() {
        return postList;
    }
    /**
     * @param postList
     *     the postList to set
     */
    public void setPostList(final List<Post> postList) {
        this.postList.clear();
        if (postList != null) {
            this.postList.addAll(postList);
        }
    }
    /**
     * @return value of statusList
     */
    public List<Status> getStatusList() {
        return statusList;
    }
    /**
     * @param statusList
     *     the statusList to set
     */
    public void setStatusList(final List<Status> statusList) {
        this.statusList.clear();
        if (statusList != null) {
            this.statusList.addAll(statusList);
        }
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
    /**
     * @return value of age
     */
    public int getAge() {
        return age;
    }
    /**
     * @param age
     *     the age to set
     */
    public void setAge(final int age) {
        this.age = age;
    }
    /**
     * @return value of gender
     */
    public String getGender() {
        return gender;
    }
    /**
     * @param gender
     *     the gender to set
     */
    public void setGender(final String gender) {
        this.gender = gender;
    }
}
