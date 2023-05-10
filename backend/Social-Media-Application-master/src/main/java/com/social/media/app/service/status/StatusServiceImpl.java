package com.social.media.app.service.status;
import com.social.media.app.entity.dto.status.StatusDTO;
import com.social.media.app.entity.dto.status.StatusTransformer;
import com.social.media.app.entity.model.Status;
import com.social.media.app.entity.model.UserProfile;
import com.social.media.app.repository.StatusRepository;
import com.social.media.app.repository.UserProfileRepository;
import com.social.media.app.utils.ImageUtils;
import com.social.media.app.utils.exceptions.ExceptionCodes;
import com.social.media.app.utils.exceptions.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service
public class StatusServiceImpl implements StatusService {

    @Autowired
    private StatusRepository statusRepository;

    @Autowired
    private UserProfileRepository userProfileRepository;
    @Override
    public StatusDTO createStatus(final StatusDTO createStatusDTO, final String userProfileId, final MultipartFile file) throws IOException {

        Optional<UserProfile> profile = getUserProfile(userProfileId);

        createStatusDTO.setImageData(ImageUtils.compressImage(file.getBytes()));

        Status status = StatusTransformer.toCreateStatus(createStatusDTO, profile.get());

        Status savedStatus = statusRepository.save(status);

        return StatusTransformer.toStatusResponseDTO(savedStatus);
    }
    @Override
    public void updateStatus(final String profileId, final String statusId, final StatusDTO updateStatusDTO, final MultipartFile file) throws IOException {

        getStatusById(statusId);

        if (file != null){
            updateStatusDTO.setImageData(ImageUtils.compressImage(file.getBytes()));
        }


        final Status exisitingStatus = getStatusByUserProfile(profileId, statusId);

        final Status status = StatusTransformer.toUpdateStatus(exisitingStatus, updateStatusDTO);

        statusRepository.save(status);

    }
    @Override
    public void deleteStatus(final String profileId, final String statusId) {

        getStatusById(statusId);

        final Status exisitingStatus = getStatusByUserProfile(profileId, statusId);

        statusRepository.delete(exisitingStatus);

    }
    @Override
    public List<StatusDTO> getStatusByUserProfile(final String profileId) {

        final List<Status> statusList = statusRepository.findAllByProfileId(profileId);

        return StatusTransformer.toStatusResponseDTOList(statusList);
    }
    @Override
    public StatusDTO findStatusById(final String statusId) {

        Status status = getStatusById(statusId);

        return StatusTransformer.toStatusResponseDTO(status);
    }

    private Status getStatusByUserProfile(final String profileId, final String statusId) {

        final Status existingStatus = statusRepository.findByIdAndProfileId(statusId, profileId);

        if (existingStatus == null) {
            throw new NotFoundException(ExceptionCodes.STATUS_PERMISSION_DENIED.name(),
                ExceptionCodes.STATUS_PERMISSION_DENIED.getErrorDescription());
        }
        return existingStatus;
    }

    private Status getStatusById(final String StatusId) {

        Optional<Status> status = statusRepository.findById(StatusId);

        if (status.isEmpty()) {
            throw new NotFoundException(ExceptionCodes.STATUS_NOT_FOUND.name(),
                ExceptionCodes.STATUS_NOT_FOUND.getErrorDescription());
        }
        return status.get();
    }

    private Optional<UserProfile> getUserProfile(final String userProfileId) {

        Optional<UserProfile> profile = userProfileRepository.findById(userProfileId);

        if (profile.isEmpty()) {
            throw new NotFoundException(ExceptionCodes.USER_PROFILE_NOT_FOUND.name(),
                ExceptionCodes.USER_PROFILE_NOT_FOUND.getErrorDescription());
        }
        return profile;
    }
}
