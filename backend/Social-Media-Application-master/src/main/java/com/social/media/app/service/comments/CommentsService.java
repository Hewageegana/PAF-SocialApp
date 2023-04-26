package com.social.media.app.service.comments;

import com.social.media.app.entity.dto.comments.CommentsDTO;
public interface CommentsService {

    CommentsDTO createComment(final String profileId, final String postId, final CommentsDTO createCommentDTO);

    void updateComment(final String profileId, final String postId, final String commentId, final CommentsDTO updateCommentDTO);

    void deleteComments(final String profileId, final String postId, final String CommentId);

    CommentsDTO findCommentsById(final String CommentsId);

}
