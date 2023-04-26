package com.social.media.app.repository;
import com.social.media.app.entity.model.Comments;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface CommentsRepository extends JpaRepository<Comments, String> {

    @Query("FROM Comments c WHERE c.commentId= ?3 AND c.post.id = ?2 AND c.commentedBy.profileId = ?1")
    Comments findByCommentIdAndPostIdAndUserProfileId(String profileId, String postId, String commentId);
}
