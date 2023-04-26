package com.social.media.app.controller;

import com.social.media.app.entity.dto.comments.CommentsDTO;
import com.social.media.app.service.comments.CommentsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
@RestController
@RequestMapping(produces = MediaType.APPLICATION_JSON_VALUE)
public class CommentsController extends BaseController{

    @Autowired
    private CommentsService commentsService;

    @RequestMapping(value = "/users/{profileId}/posts/{postId}/comments", method = RequestMethod.POST)
    @ResponseBody
    public CommentsDTO createComment(HttpServletResponse response,@PathVariable("profileId") String profileId,
        @PathVariable("postId") String postId, @RequestBody CommentsDTO commentsDTO) {

        final CommentsDTO comment = commentsService.createComment(profileId, postId, commentsDTO);

        setStatusHeadersToSuccess(response);

        return comment;
    }

    @RequestMapping(value = "/users/{profileId}/posts/{postId}/comments/{commentId}", method = RequestMethod.PUT)
    @ResponseBody
    public void updateComment(HttpServletResponse response, @PathVariable("profileId") String profileId,
        @PathVariable("postId") String postId, @PathVariable("commentId") String commentId,
        @RequestBody CommentsDTO commentsDTO) {

        setStatusHeadersToSuccess(response);

        commentsService.updateComment(profileId, postId, commentId, commentsDTO);
    }

    @RequestMapping(value = "/comments/{commentId}", method = RequestMethod.GET)
    @ResponseBody
    public CommentsDTO findComment(HttpServletResponse response, @PathVariable("commentId") String commentId) {

        final CommentsDTO commentsDTO = commentsService.findCommentsById(commentId);

        setStatusHeadersToSuccess(response);

        return commentsDTO;
    }

    @RequestMapping(value = "/users/{profileId}/posts/{postId}/comments/{commentId}", method = RequestMethod.DELETE)
    @ResponseBody
    public void deletePost(HttpServletResponse response, @PathVariable("profileId") String profileId,
        @PathVariable("postId") String postId, @PathVariable("commentId") String commentId) {

        setStatusHeadersToSuccess(response);

        commentsService.deleteComments(profileId, postId, commentId);
    }

}
