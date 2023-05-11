package com.social.media.app.entity.dto.userprofiles;
import com.social.media.app.entity.dto.posts.PostDTO;
import com.social.media.app.entity.dto.posts.PostTransformer;
import com.social.media.app.entity.dto.status.StatusTransformer;
import com.social.media.app.entity.model.Post;
import com.social.media.app.entity.model.UserProfile;
import org.springframework.util.CollectionUtils;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
public class UserProfileTransformer {

    public static UserProfile toCreateUserProfile(final UserProfileDTO profileDTO){

        UserProfile userProfile = new UserProfile();
        userProfile.setUserId(profileDTO.getUserId());
        userProfile.setProfileName(profileDTO.getProfileName());
        userProfile.setPostList(new ArrayList<>());
        userProfile.setAge(profileDTO.getAge());
        userProfile.setGender(profileDTO.getGender());
        userProfile.setMobileNumber(profileDTO.getMobileNumber());
        return userProfile;
    }

    public static UserProfile toUpdateUserProfile(final UserProfileDTO profileDTO, final UserProfile existingProfile){

        UserProfile userProfile = new UserProfile();
        userProfile.setProfileId(profileDTO.getProfileId());
        userProfile.setUserId(profileDTO.getUserId() == null || profileDTO.getUserId().isEmpty() ? existingProfile.getUserId() : profileDTO.getUserId());
        userProfile.setProfileName(profileDTO.getProfileName() == null || profileDTO.getProfileName().isEmpty() ? existingProfile.getProfileName() : profileDTO.getProfileName());
        userProfile.setAge(profileDTO.getAge() == 0 ? existingProfile.getAge() : profileDTO.getAge());
        userProfile.setGender(profileDTO.getGender() == null || profileDTO.getGender().isEmpty() ? existingProfile.getGender() : profileDTO.getGender());
        userProfile.setMobileNumber(profileDTO.getMobileNumber() == null || profileDTO.getMobileNumber().isEmpty() ? existingProfile.getMobileNumber() : profileDTO.getMobileNumber());

        userProfile.setCreatedDate(existingProfile.getCreatedDate());
        if (!CollectionUtils.isEmpty(profileDTO.getPostList())){
            userProfile.getPostList().clear();
            userProfile.getPostList().addAll(toPostList(profileDTO.getPostList()));
        }
        return userProfile;
    }

    public static List<Post> toPostList(List<PostDTO> postDTOList) {

        return postDTOList
            .stream()
            .map(UserProfileTransformer::toPost)
            .collect(Collectors.toList());
    }

    public static Post toPost(PostDTO postDTO) {
        Post post = new Post();
        post.setId(postDTO.getId());
        post.setPostDescription(postDTO.getPostDescription());
        post.setImageData(postDTO.getImageData());

        return post;
    }

    public static UserProfileDTO toUserProfileDTO(final UserProfile userProfile) {
        UserProfileDTO userProfileDTO = new UserProfileDTO();
        if (userProfile.getProfileId() != null) {
            userProfileDTO.setProfileId(userProfile.getProfileId());
        }
        userProfileDTO.setUserId(userProfile.getUserId());
        userProfileDTO.setProfileName(userProfile.getProfileName());
        userProfileDTO.setAge(userProfile.getAge());
        userProfileDTO.setGender(userProfile.getGender());
        userProfileDTO.setMobileNumber(userProfile.getMobileNumber());
        if (!CollectionUtils.isEmpty(userProfile.getPostList())){
            userProfileDTO.setPostList(PostTransformer.toPostResponseDTOList(userProfile.getPostList()));
        } else {
            userProfileDTO.setPostList(new ArrayList<>());
        }
        if (!CollectionUtils.isEmpty(userProfile.getStatusList())){
            userProfileDTO.setStatusList(StatusTransformer.toStatusResponseDTOList(userProfile.getStatusList()));
        } else {
            userProfileDTO.setStatusList(new ArrayList<>());
        }
        return userProfileDTO;
    }
}
