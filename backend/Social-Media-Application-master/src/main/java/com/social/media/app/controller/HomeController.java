package com.social.media.app.controller;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * Handles requests for the application home page.
 */
@RestController
@RequestMapping(produces = MediaType.APPLICATION_JSON_VALUE)
public class HomeController {

    /**
     *
     */
    static final String MESSAGE = "Social media application deployment successful...";

    /**
     * @return the response
     */
    @RequestMapping(path = {"/"}, method = {
        RequestMethod.GET
    })
    public String home() {

        return MESSAGE;
    }
}
