package com.example.notification_service.service;

import com.example.notification_service.config.TaskDTO;
import com.example.notification_service.domain.Notification;
import com.example.notification_service.repository.NotificationRepository;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class NotificationServiceImpl implements NotificationService {
    private NotificationRepository notificationRepository;
    @Autowired
    public NotificationServiceImpl(NotificationRepository notificationRepository){
        this.notificationRepository = notificationRepository;
    }

    @Override
    public Notification getAllNotification(String emailId) {
        return notificationRepository.findById(emailId).get();
    }
    @RabbitListener(queues="task.queue")
    @Override
    public void saveNotification(TaskDTO taskDTO) {
        Notification notification = new Notification();
        String email = taskDTO.getJsonObject().get("email").toString();
        if(notificationRepository.findById(email).isEmpty()){
            notification.setEmailId(email);
        }
        notification.setNotificationMessage("This list Of not taken tasks");
        notification.setTaskTitle(taskDTO.getJsonObject());
        notificationRepository.save(notification);
    }

    @Override
    public Notification getNotification(String emailId) {

        return notificationRepository.findById(emailId).get();
    }
}
