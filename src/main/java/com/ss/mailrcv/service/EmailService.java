package com.ss.mailrcv.service;

import com.ss.mailrcv.model.Subscriber;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Scanner;

import static org.antlr.v4.runtime.tree.xpath.XPath.findAll;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    public void sendConfirmationEmail(String toEmail) {
        sendEmail(
                toEmail,
                "Welcome to Senior Sense!",
                "Hi there,\n\nThank you for subscribing to Senior Sense updates!\n\n- Team Senior Sense"
        );
    }



    public void sendEmail(String toEmail, String subject, String messageBody) {
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setFrom("rmahapatra471@gmail.com");  // Or get from application.properties
            message.setTo(toEmail);
            message.setSubject(subject);
            message.setText(messageBody);

            mailSender.send(message);
            System.out.println("Email sent to: " + toEmail);
        } catch (Exception e) {
            System.err.println("Failed to send email to " + toEmail + ": " + e.getMessage());
            e.printStackTrace();
        }
    }
}
