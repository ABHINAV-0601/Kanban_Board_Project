package com.example.notification_service.service;

import com.example.notification_service.config.TaskDTO;
import com.example.notification_service.domain.Notification;

public interface NotificationService {
    Notification getAllNotification(String emailId);
    void  saveNotification(TaskDTO taskDTO);
    Notification getNotification(String emailId);
}
