package com.social.media.app.repository;
import com.social.media.app.entity.model.Post;
import com.social.media.app.entity.model.Status;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StatusRepository extends JpaRepository<Status, String> {

    @Query("FROM Status p")
    List<Status> findAllByProfileId(String profileId);

    @Query("FROM Status p WHERE p.id = ?1 AND p.postedBy.profileId = ?2")
    Status findByIdAndProfileId(String postId, String profileId);
}
