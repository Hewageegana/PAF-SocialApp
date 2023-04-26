package com.social.media.app.entity.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String id;

    private String email;

    private String userName;

    private String password;

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
     * @return value of email
     */
    public String getEmail() {
        return email;
    }

    /**
     * @param email
     *     the email to set
     */
    public void setEmail(final String email) {
        this.email = email;
    }

    /**
     * @return value of userName
     */
    public String getUserName() {
        return userName;
    }

    /**
     * @param userName
     *     the userName to set
     */
    public void setUserName(final String userName) {
        this.userName = userName;
    }

    /**
     * @return value of password
     */
    public String getPassword() {
        return password;
    }

    /**
     * @param password
     *     the password to set
     */
    public void setPassword(final String password) {
        this.password = password;
    }
}
