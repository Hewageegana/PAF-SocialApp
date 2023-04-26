package com.social.media.app.controller;

import com.social.media.app.entity.dto.status.StatusDTO;
import com.social.media.app.service.status.StatusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.util.List;
@RestController
public class StatusController extends BaseController {

    @Autowired
    private StatusService statusService;

    @RequestMapping(value = "/users/{profileId}/status", method = RequestMethod.POST,
        consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.MULTIPART_FORM_DATA_VALUE})
    @ResponseBody
    public StatusDTO createStatus(HttpServletResponse response,
        @PathVariable("profileId") String profileId, @RequestBody StatusDTO statusDTO) {

        final StatusDTO responseDTO = statusService.createStatus(statusDTO, profileId);

        setStatusHeadersToSuccess(response);

        return responseDTO;
    }

    @RequestMapping(value = "/users/{profileId}/status/{statusId}", method = RequestMethod.PUT)
    @ResponseBody
    public void updateStatus(HttpServletResponse response, @PathVariable("profileId") String profileId,
        @PathVariable("statusId") String statusId, @RequestBody StatusDTO statusDTO) {

        statusService.updateStatus(profileId, statusId, statusDTO);

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
