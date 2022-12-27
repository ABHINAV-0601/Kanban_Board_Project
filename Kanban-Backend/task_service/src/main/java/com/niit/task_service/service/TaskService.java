package com.niit.task_service.service;

import com.niit.task_service.domain.Task;
import com.niit.task_service.exception.TaskAlreadyExistException;
import com.niit.task_service.exception.TaskNotFoundException;
import com.niit.task_service.exception.UserNotFoundException;
import com.niit.user_service.domain.User;
import java.util.List;

public interface TaskService {
    User addTaskForUser(String emailId,Task task) throws Exception;
    User deleteTaskForUser(String emailId,String taskId) throws UserNotFoundException,TaskNotFoundException;
    List<Task> getAllTasksForUser(String emailId) throws UserNotFoundException;
    User updateTaskForUser(String emailId,Task task) throws UserNotFoundException;

    Task getTaskOfUser(String emailId,String taskId) throws UserNotFoundException;

}
