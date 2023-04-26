package com.social.media.app.service.status;

import com.social.media.app.entity.dto.status.StatusDTO;

import java.util.List;
public interface StatusService {

    StatusDTO createStatus(final StatusDTO createStatusDTO, final String userProfileId);

    void updateStatus(final String profileId, final String statusId, final StatusDTO updateStatusDTO);

    void deleteStatus(final String profileId, final String statusId);

    List<StatusDTO> getStatusByUserProfile(final String profileId);

    StatusDTO findStatusById(final String statusId);
}
