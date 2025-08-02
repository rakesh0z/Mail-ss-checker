package com.ss.mailrcv.controller;

import com.ss.mailrcv.model.Subscriber;
import com.ss.mailrcv.repository.subscriberRepository;

import com.ss.mailrcv.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api")
public class SubscribeController {

    @Autowired
    private EmailService emailService;

    @PostMapping("/subscribe")
    public ResponseEntity<String> subscribe(@RequestBody Map<String, String> payload) {
        String userEmail = payload.get("email");
        // validate input
        if (userEmail == null || userEmail.isEmpty()) {
            return ResponseEntity.badRequest().body("Email is required");
        }

        emailService.sendEmail(userEmail, "Thanks for subscribing!", "\uD83C\uDF89 Welcome to the Senior Sense Community!\n" +
                "We’re thrilled to have you on board. You’ll now receive timely updates, exclusive resources, and the latest health insights designed specifically for seniors.\n" +
                "Stay tuned and take control of your health journey with Senior Sense!.");
        return ResponseEntity.ok("Subscription successful and email sent to " + userEmail);
    }




}
