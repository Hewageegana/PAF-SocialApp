package com.social.media.app.service.userprofile;
import com.social.media.app.entity.dto.userprofiles.UserProfileTransformer;
import com.social.media.app.entity.dto.userprofiles.UserProfileDTO;
import com.social.media.app.entity.model.UserProfile;
import com.social.media.app.repository.UserProfileRepository;
import com.social.media.app.utils.exceptions.ExceptionCodes;
import com.social.media.app.utils.exceptions.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UserProfileServiceImpl implements UserProfileService {

    @Autowired
    private UserProfileRepository userProfileRepository;

    @Override
    public UserProfileDTO createUserProfile(final UserProfileDTO profileDTO) {

        UserProfile userProfile = UserProfileTransformer.toCreateUserProfile(profileDTO);
        final UserProfile savedUserProfile = userProfileRepository.save(userProfile);
        return UserProfileTransformer.toUserProfileDTO(savedUserProfile);
    }

    @Override
    public void updateUserProfile(final String profileId, final UserProfileDTO profileDTO) {

        final Optional<UserProfile> optional = userProfileRepository.findById(profileId);

        if (optional.isEmpty()) {
            throw new NotFoundException(ExceptionCodes.USER_PROFILE_NOT_FOUND.name(),
                ExceptionCodes.USER_PROFILE_NOT_FOUND.getErrorDescription());
        }

        profileDTO.setProfileId(profileId);
        userProfileRepository.save(UserProfileTransformer.toUpdateUserProfile(profileDTO));

    }

    @Override
    public void deleteUserProfile(final String profileId) {

        Optional<UserProfile> profile = userProfileRepository.findById(profileId);

        if (profile.isEmpty()) {
            throw new NotFoundException(ExceptionCodes.USER_PROFILE_NOT_FOUND.name(),
                ExceptionCodes.USER_PROFILE_NOT_FOUND.getErrorDescription());
        }

        userProfileRepository.deleteById(profileId);
    }

    @Override
    public List<UserProfileDTO> getUserProfiles() {
        final List<UserProfile> userProfileList = userProfileRepository.findAll();
        return userProfileList.stream().map(UserProfileTransformer::toUserProfileDTO)
            .collect(Collectors.toList());
    }

    @Override
    public UserProfileDTO findUserProfile(final String profileId) {

        Optional<UserProfile> profile = userProfileRepository.findById(profileId);

        if (profile.isEmpty()) {
            throw new NotFoundException(ExceptionCodes.USER_PROFILE_NOT_FOUND.name(),
                ExceptionCodes.USER_PROFILE_NOT_FOUND.getErrorDescription());
        }

        return UserProfileTransformer.toUserProfileDTO(profile.get());
    }
}
