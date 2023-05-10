package com.social.media.app.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.social.media.app.entity.dto.posts.PostDTO;
import com.social.media.app.entity.dto.status.StatusDTO;
import com.social.media.app.service.status.StatusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;
@RestController
public class StatusController extends BaseController {

    @Autowired
    private StatusService statusService;

    @RequestMapping(value = "/users/{profileId}/status", method = RequestMethod.POST,
        consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.MULTIPART_FORM_DATA_VALUE})
    @ResponseBody
    public StatusDTO createStatus(HttpServletResponse response,
                                  @PathVariable("profileId") String profileId, @RequestPart String stringStatusDTO,
                                  @RequestPart("image") MultipartFile file) throws IOException {

        ObjectMapper objectMapper = new ObjectMapper();
        StatusDTO statusDTO = objectMapper.readValue(stringStatusDTO, StatusDTO.class);

        final StatusDTO responseDTO = statusService.createStatus(statusDTO, profileId, file);

        setStatusHeadersToSuccess(response);

        return responseDTO;
    }

    @RequestMapping(value = "/users/{profileId}/status/{statusId}", method = RequestMethod.PUT)
    @ResponseBody
    public void updateStatus(HttpServletResponse response, @PathVariable("profileId") String profileId,
        @PathVariable("statusId") String statusId, @RequestPart String stringStatusDTO,
                             @RequestPart(value = "image", required = false) MultipartFile file) throws IOException {

        ObjectMapper objectMapper = new ObjectMapper();
        StatusDTO statusDTO = objectMapper.readValue(stringStatusDTO, StatusDTO.class);
        statusService.updateStatus(profileId, statusId, statusDTO, file);

        setStatusHeadersToSuccess(response);
    }

    @RequestMapping(value = "/users/{profileId}/status", method = RequestMethod.GET)
    @ResponseBody
    public List<StatusDTO> findAllStatus(HttpServletResponse response,
        @PathVariable("profileId") String profileId) {

        final List<StatusDTO> responseDTO = statusService.getStatusByUserProfile(profileId);

        setStatusHeadersToSuccess(response);

        return responseDTO;
    }

    @GetMapping(value = "/status/{statusId}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public ResponseEntity<StatusDTO> findStatus(HttpServletResponse response, @PathVariable("statusId") String statusId) {

        final StatusDTO postResponseDTO = statusService.findStatusById(statusId);

        setStatusHeadersToSuccess(response);

        return ResponseEntity.ok(postResponseDTO);
    }

    @RequestMapping(value = "/users/{profileId}/status/{statusId}", method = RequestMethod.DELETE)
    @ResponseBody
    public void deleteStatus(HttpServletResponse response, @PathVariable("profileId") String profileId,
        @PathVariable("statusId") String statusId) {

        statusService.deleteStatus(profileId, statusId);

        setStatusHeadersToSuccess(response);
    }
}
