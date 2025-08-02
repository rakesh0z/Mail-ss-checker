//package com.ss.mailrcv.controller;
//
//import com.ss.mailrcv.service.EmailService;
//import lombok.RequiredArgsConstructor;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.RestController;
//
//@RestController
//@RequestMapping("/api/email")
//@RequiredArgsConstructor
//public class EmailController {
//
//    private final EmailService emailService;
//
//    @PostMapping("/subscribe")
//    public String subscribe(@RequestParam String email) {
//        emailService.subscribe(email);
//        return "Subscribed successfully!";
//    }
//
//    @PostMapping("/send-update")
//    public String sendUpdate(@RequestParam String subject, @RequestParam String message) {
//        emailService.sendUpdate(subject, message);
//        return "Update sent to all subscribers.";
//    }
//}
