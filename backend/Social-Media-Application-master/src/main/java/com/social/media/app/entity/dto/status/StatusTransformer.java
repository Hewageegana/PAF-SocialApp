package com.social.media.app.entity.dto.status;
import com.social.media.app.entity.model.Status;
import com.social.media.app.entity.model.UserProfile;
import com.social.media.app.utils.ImageUtils;

import java.util.List;
import java.util.stream.Collectors;
public class StatusTransformer {

    public static Status toCreateStatus(StatusDTO statusDTO, UserProfile profile) {

        Status status = new Status();
        status.setStatusContent(statusDTO.getStatusContent());
        status.setImageData(statusDTO.getImageData());
        status.setPostedBy(profile);
        status.setUserName(profile.getProfileName());
        return status;
    }

    public static Status toUpdateStatus(Status existingStatus, StatusDTO statusDTO) {

        existingStatus.setStatusContent(statusDTO.getStatusContent());
        existingStatus.setImageData(statusDTO.getImageData() == null ? existingStatus.getImageData() : statusDTO.getImageData());
        return existingStatus;
    }

    public static List<StatusDTO> toStatusResponseDTOList(List<Status> statusList) {

        return statusList
            .stream()
            .map(StatusTransformer::toStatusResponseDTO)
            .collect(Collectors.toList());
    }

    public static StatusDTO toStatusResponseDTO(Status status) {

        StatusDTO statusDTO = new StatusDTO();
        statusDTO.setId(status.getId());
        statusDTO.setStatusContent(status.getStatusContent());
        statusDTO.setPostedBy(status.getPostedBy().getProfileId());
        statusDTO.setUserName(status.getPostedBy().getProfileName());
        statusDTO.setImageData(ImageUtils.decompressImage(status.getImageData()));
        return statusDTO;
    }
}
