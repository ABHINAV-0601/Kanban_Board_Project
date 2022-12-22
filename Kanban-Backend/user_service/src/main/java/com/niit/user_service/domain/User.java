package com.niit.user_service.domain;

import org.springframework.data.annotation.Id;

import org.springframework.data.annotation.Transient;
import org.springframework.stereotype.Component;
import com.niit.task_service.domain.Task;
import java.util.List;


@Component
public class User {
    private String fullName;
    @Id
    private String emailId;
    @Transient
    private String password;
    private long phoneNumber;
    private String address;
    private String department;
    private String position;
    private List<Task> taskList;
    public User() {
    }

    public User(String fullName, String emailId, String password, long phoneNumber, String address, String department, String position, List<Task> taskList) {
        this.fullName = fullName;
        this.emailId = emailId;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.department = department;
        this.position = position;
        this.taskList = taskList;
    }

    public List<Task> getTaskList() {
        return taskList;
    }

    public void setTaskList(List<Task> taskList) {
        this.taskList = taskList;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getEmailId() {
        return emailId;
    }

    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public long getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(long phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    @Override
    public String toString() {
        return "User{" +
                "fullName='" + fullName + '\'' +
                ", emailId='" + emailId + '\'' +
                ", password='" + password + '\'' +
                ", phoneNumber=" + phoneNumber +
                ", address='" + address + '\'' +
                ", department='" + department + '\'' +
                ", position='" + position + '\'' +
                ", taskList=" + taskList +
                '}';
    }
}
