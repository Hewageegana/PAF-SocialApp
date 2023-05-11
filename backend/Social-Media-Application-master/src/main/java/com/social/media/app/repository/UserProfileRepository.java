package com.social.media.app.repository;
import com.social.media.app.entity.model.UserProfile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserProfileRepository extends JpaRepository<UserProfile, String> {

//    @Query("FROM UserProfile u WHERE u.id = ?1")
//    Optional<UserProfile> findUserByUserId(String userId);

    @Query("FROM UserProfile u WHERE u.userId = ?1")
    Optional<UserProfile> findUserByUserId(String userId);

    @Query("FROM UserProfile u WHERE u.profileId = ?1")
    UserProfile findExistingUserByUserId(String profileId);
}
