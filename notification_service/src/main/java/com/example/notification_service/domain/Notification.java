package com.example.notification_service.domain;


import org.json.simple.JSONObject;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Notification {
    @Id
    private String emailId;
    private  String notificationMessage;
    private JSONObject taskTitle;

    public Notification() {
    }

    public Notification(String emailId, String notificationMessage, JSONObject taskTitle) {
        this.emailId = emailId;
        this.notificationMessage = notificationMessage;
        this.taskTitle = taskTitle;
    }

    public String getEmailId() {
        return emailId;
    }

    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }

    public String getNotificationMessage() {
        return notificationMessage;
    }

    public void setNotificationMessage(String notificationMessage) {
        this.notificationMessage = notificationMessage;
    }

    public JSONObject getTaskTitle() {
        return taskTitle;
    }

    public void setTaskTitle(JSONObject taskTitle) {
        this.taskTitle = taskTitle;
    }

    @Override
    public String toString() {
        return "Notification{" +
                "emailId='" + emailId + '\'' +
                ", notificationMessage='" + notificationMessage + '\'' +
                ", taskName=" + taskTitle +
                '}';
    }
}
