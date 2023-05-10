package com.social.media.app.service.status;

import com.social.media.app.entity.dto.status.StatusDTO;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
public interface StatusService {

    StatusDTO createStatus(final StatusDTO createStatusDTO, final String userProfileId, final MultipartFile file) throws IOException;

    void updateStatus(final String profileId, final String statusId, final StatusDTO updateStatusDTO, final MultipartFile file) throws IOException;

    void deleteStatus(final String profileId, final String statusId);

    List<StatusDTO> getStatusByUserProfile(final String profileId);

    StatusDTO findStatusById(final String statusId);
}
