package com.social.media.app.entity.dto.posts;
import com.social.media.app.entity.dto.comments.CommentTransformer;
import com.social.media.app.entity.model.Post;
import com.social.media.app.entity.model.UserProfile;
import com.social.media.app.utils.ImageUtils;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
public class PostTransformer {

    public static Post toCreatePost(PostDTO postDTO, UserProfile profile) {

        Post post = new Post();
        post.setPostDescription(postDTO.getPostDescription());
        post.setImageData(postDTO.getImageData());
        post.setPostedBy(profile);
        post.setUserName(profile.getProfileName());
        post.setCommentsList(new ArrayList<>());
        post.setLikedUserProfiles(new HashSet<>());
        return post;
    }

    public static Post toUpdatePost(Post existingPost, PostDTO postDTO) {

        existingPost.setPostDescription(postDTO.getPostDescription());
        existingPost.setImageData(postDTO.getImageData() == null ? existingPost.getImageData() : postDTO.getImageData());
        return existingPost;
    }

    public static List<PostDTO> toPostResponseDTOList(List<Post> postList) {

        return postList
            .stream()
            .map(PostTransformer::toPostResponseDTO)
            .collect(Collectors.toList());
    }

    public static PostDTO toPostResponseDTO(Post post) {

        PostDTO postDTO = new PostDTO();
        postDTO.setId(post.getId());
        postDTO.setPostDescription(post.getPostDescription());
        //postDTO.setImageData(post.getImageData());
        postDTO.setPostedBy(post.getPostedBy().getProfileId());
        postDTO.setUserName(post.getUserName());
        postDTO.setCommentsList(CommentTransformer.commentsDTOList(post.getCommentsList()));
        postDTO.setLikedUserProfilesMap(toLikedProfileMap(post));
        postDTO.setImageData(ImageUtils.decompressImage(post.getImageData()));
        return postDTO;
    }

    public static Map<String, String> toLikedProfileMap(Post post) {

        return post.getLikedUserProfiles()
            .stream()
            .collect(Collectors.toMap(UserProfile::getProfileId, UserProfile::getProfileName));
    }
}
