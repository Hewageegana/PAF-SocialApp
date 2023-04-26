package com.social.media.app.controller;

import com.social.media.app.entity.dto.userprofiles.UserProfileDTO;
import com.social.media.app.service.userprofile.UserProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.util.List;
@RestController
@RequestMapping(produces = MediaType.APPLICATION_JSON_VALUE)
public class UserProfileController extends BaseController{

    @Autowired
    private UserProfileService userProfileService;

    @RequestMapping(value = "/users", method = RequestMethod.POST)
    @ResponseBody
    public UserProfileDTO createUser(HttpServletResponse response, @RequestBody UserProfileDTO profileDTO) {

        final UserProfileDTO userProfile = userProfileService.createUserProfile(profileDTO);

        setStatusHeadersToSuccess(response);

        return userProfile;
    }

    @RequestMapping(value = "/users/{profileId}", method = RequestMethod.PUT)
    @ResponseBody
    public void updateUserProfile(HttpServletResponse response,
        @PathVariable("profileId") String profileId, @RequestBody UserProfileDTO profileDTO) {

        setStatusHeadersToSuccess(response);

        userProfileService.updateUserProfile(profileId, profileDTO);
    }

    @RequestMapping(value = "/users", method = RequestMethod.GET)
    @ResponseBody
    public List<UserProfileDTO> findAllUsers(HttpServletResponse response) {

        final List<UserProfileDTO> userProfiles = userProfileService.getUserProfiles();

        setStatusHeadersToSuccess(response);

        return userProfiles;
    }

    @RequestMapping(value = "/users/{profileId}", method = RequestMethod.GET)
    @ResponseBody
    public UserProfileDTO findUserProfile(HttpServletResponse response, @PathVariable("profileId") String profileId) {

        final UserProfileDTO userProfile = userProfileService.findUserProfile(profileId);

        setStatusHeadersToSuccess(response);

        return userProfile;
    }

    @RequestMapping(value = "/users/{profileId}", method = RequestMethod.DELETE)
    @ResponseBody
    public void deleteUserProfile(HttpServletResponse response, @PathVariable("profileId") String profileId) {

        setStatusHeadersToSuccess(response);

        userProfileService.deleteUserProfile(profileId);
    }
}
