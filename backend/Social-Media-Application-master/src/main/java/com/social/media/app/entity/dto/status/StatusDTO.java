package com.social.media.app.entity.dto.status;

public class StatusDTO {

    private String id;

    private String statusContent;

    private String userName;

    private byte[] imageData;

    private String postedBy;

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

    public byte[] getImageData() {
        return imageData;
    }

    public void setImageData(byte[] imageData) {
        this.imageData = imageData;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
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
}
