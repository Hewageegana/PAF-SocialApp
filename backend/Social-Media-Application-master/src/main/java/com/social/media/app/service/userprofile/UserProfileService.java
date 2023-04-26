package com.social.media.app.service.userprofile;
import com.social.media.app.entity.dto.userprofiles.UserProfileDTO;

import java.util.List;
public interface UserProfileService {

    UserProfileDTO createUserProfile(UserProfileDTO profileDTO);

    void updateUserProfile(String profileId, UserProfileDTO profileDTO);

    void deleteUserProfile(String profileId);

    List<UserProfileDTO> getUserProfiles();

    UserProfileDTO findUserProfile(String profileId);

}
