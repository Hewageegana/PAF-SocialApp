package com.social.media.app.entity.dto.userprofiles;

import com.social.media.app.entity.dto.posts.PostDTO;
import com.social.media.app.entity.dto.status.StatusDTO;

import java.util.List;
import java.util.Set;

public class UserProfileDTO {

    private String profileId;

    private String userId;

    private String profileName;

    private int age;

    private String gender;

    private String mobileNumber;

    private List<PostDTO> postList;

    private List<StatusDTO> statusList;

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
    public List<PostDTO> getPostList() {
        return postList;
    }
    /**
     * @param postList
     *     the postList to set
     */
    public void setPostList(final List<PostDTO> postList) {
        this.postList = postList;
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
    /**
     * @return value of statusList
     */
    public List<StatusDTO> getStatusList() {
        return statusList;
    }
    /**
     * @param statusList
     *     the statusList to set
     */
    public void setStatusList(final List<StatusDTO> statusList) {
        this.statusList = statusList;
    }

    public String getMobileNumber() {
        return mobileNumber;
    }

    public void setMobileNumber(String mobileNumber) {
        this.mobileNumber = mobileNumber;
    }
}
