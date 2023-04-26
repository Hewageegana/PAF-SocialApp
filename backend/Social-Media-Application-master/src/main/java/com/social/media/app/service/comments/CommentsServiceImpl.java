package com.social.media.app.service.comments;

import com.social.media.app.entity.dto.comments.CommentTransformer;
import com.social.media.app.entity.dto.comments.CommentsDTO;
import com.social.media.app.entity.model.Comments;
import com.social.media.app.entity.model.Post;
import com.social.media.app.entity.model.UserProfile;
import com.social.media.app.repository.CommentsRepository;
import com.social.media.app.repository.PostRepository;
import com.social.media.app.repository.UserProfileRepository;
import com.social.media.app.utils.exceptions.ExceptionCodes;
import com.social.media.app.utils.exceptions.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
@Service
public class CommentsServiceImpl implements CommentsService {

    @Autowired
    private CommentsRepository commentsRepository;

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private UserProfileRepository userProfileRepository;

    @Override
    public CommentsDTO createComment(final String profileId, final String postId, final CommentsDTO createCommentDTO) {

        Optional<UserProfile> profile = userProfileRepository.findById(profileId);

        if (profile.isEmpty()) {
            throw new NotFoundException(ExceptionCodes.USER_PROFILE_NOT_FOUND.name(),
                ExceptionCodes.USER_PROFILE_NOT_FOUND.getErrorDescription());
        }

        Optional<Post> post = postRepository.findById(postId);

        if (post.isEmpty()) {
            throw new NotFoundException(ExceptionCodes.POST_NOT_FOUND.name(),
                ExceptionCodes.POST_NOT_FOUND.getErrorDescription());
        }

        Comments comments = CommentTransformer.toCreateComment(createCommentDTO, post.get(), profile.get());
        final Comments savedComment = commentsRepository.save(comments);
        return CommentTransformer.toCommentsResponseDTO(savedComment);
    }
    @Override
    public void updateComment(final String profileId, final String postId, final String commentId, final CommentsDTO updateCommentDTO) {

        Comments existingComments = commentsRepository.findByCommentIdAndPostIdAndUserProfileId(profileId, postId, commentId);

        if (existingComments == null) {
            throw new NotFoundException(ExceptionCodes.COMMENT_NOT_FOUND.name(),
                ExceptionCodes.COMMENT_NOT_FOUND.getErrorDescription());
        }

        Comments newComment = CommentTransformer.toUpdateCommentRequest(existingComments, updateCommentDTO);
        commentsRepository.save(newComment);
    }
    @Override
    public void deleteComments(final String profileId, final String postId, final String commentId) {

        Comments existingComments = commentsRepository.findByCommentIdAndPostIdAndUserProfileId(profileId, postId, commentId);

        if (existingComments == null) {
            throw new NotFoundException(ExceptionCodes.COMMENT_NOT_FOUND.name(),
                ExceptionCodes.COMMENT_NOT_FOUND.getErrorDescription());
        }

        commentsRepository.delete(existingComments);
    }
    @Override
    public CommentsDTO findCommentsById(final String commentsId) {

        final Optional<Comments> comments = commentsRepository.findById(commentsId);

        if (comments.isEmpty()) {
            throw new NotFoundException(ExceptionCodes.COMMENT_NOT_FOUND.name(),
                ExceptionCodes.COMMENT_NOT_FOUND.getErrorDescription());
        }

        return CommentTransformer.toCommentsResponseDTO(comments.get());
    }
}
