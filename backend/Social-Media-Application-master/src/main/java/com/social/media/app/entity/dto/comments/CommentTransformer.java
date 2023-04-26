package com.social.media.app.entity.dto.comments;
import com.social.media.app.entity.model.Comments;
import com.social.media.app.entity.model.Post;
import com.social.media.app.entity.model.UserProfile;

import java.util.List;
import java.util.stream.Collectors;
public class CommentTransformer {

    public static Comments toCreateComment(CommentsDTO commentsDTO, Post post, UserProfile profile) {

        Comments comments = new Comments();
        comments.setCommentText(commentsDTO.getCommentText());
        comments.setPost(post);
        comments.setCommentedBy(profile);
        return comments;
    }

    public static CommentsDTO toCommentsResponseDTO(Comments comments) {

        CommentsDTO commentsDTO = new CommentsDTO();
        commentsDTO.setCommentId(comments.getCommentId());
        commentsDTO.setCommentText(comments.getCommentText());
        commentsDTO.setPostId(comments.getPost().getId());
        commentsDTO.setCommentedBy(comments.getCommentedBy().getProfileId());
        return commentsDTO;
    }

    public static List<CommentsDTO> commentsDTOList(List<Comments> commentsList) {

        return commentsList
            .stream()
            .map(CommentTransformer::toCommentsResponseDTO)
            .collect(Collectors.toList());

    }

    public static Comments toUpdateCommentRequest(Comments existingComment, CommentsDTO commentsDTO) {
        existingComment.setCommentText(commentsDTO.getCommentText());
        return existingComment;
    }

}
