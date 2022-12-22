package com.example.notification_service.controller;

import com.example.notification_service.service.NotificationService;
import io.jsonwebtoken.Claims;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/api")
public class NotificationController {
    private ResponseEntity responseEntity;
    private final NotificationService notificationService;

    @Autowired
    public NotificationController(NotificationService notificationService) {
        this.notificationService = notificationService;
    }
@PostMapping("/notification")
    public ResponseEntity<?>getNotification(HttpServletRequest request){
        Claims claims = (Claims) request.getAttribute("claims");
        String email = claims.getSubject();

        return new ResponseEntity<>(notificationService.getAllNotification(email), HttpStatus.OK);

    }
}
