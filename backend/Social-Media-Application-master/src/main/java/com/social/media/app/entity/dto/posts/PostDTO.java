package com.social.media.app.entity.dto.posts;

import com.social.media.app.entity.dto.comments.CommentsDTO;

import java.util.List;
import java.util.Map;

public class PostDTO {

    private String id;

    private String postDescription;

    private byte[] imageData;

    private String postedBy;

    private String userName;

    private List<CommentsDTO> commentsDTOList;

    private Map<String, String> likedUserProfilesMap;

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

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
     * @return value of postDescription
     */
    public String getPostDescription() {
        return postDescription;
    }
    /**
     * @param postDescription
     *     the postDescription to set
     */
    public void setPostDescription(final String postDescription) {
        this.postDescription = postDescription;
    }
    /**
     * @return value of postImageUrl
     */
    public byte[] getImageData() {
        return imageData;
    }
    /**
     * @param imageData
     *     the postImageUrl to set
     */
    public void setImageData(final byte[] imageData) {
        this.imageData = imageData;
    }
    /**
     * @return value of postedBy
     */
    public String getPostedBy() {
        return postedBy;
    }
    /**
     * @param postedBy
     *     the postedBy to set
     */
    public void setPostedBy(final String postedBy) {
        this.postedBy = postedBy;
    }
    /**
     * @return value of commentsDTOList
     */
    public List<CommentsDTO> getCommentsList() {
        return commentsDTOList;
    }
    /**
     * @param commentsDTOList
     *     the commentsDTOList to set
     */
    public void setCommentsList(final List<CommentsDTO> commentsDTOList) {
        this.commentsDTOList = commentsDTOList;
    }
    /**
     * @return value of likedUserProfiles
     */
    public Map<String, String> getLikedUserProfilesMap() {
        return likedUserProfilesMap;
    }
    /**
     * @param likedUserProfilesMap
     *     the likedUserProfiles to set
     */
    public void setLikedUserProfilesMap(final Map<String, String> likedUserProfilesMap) {
        this.likedUserProfilesMap = likedUserProfilesMap;
    }
}
