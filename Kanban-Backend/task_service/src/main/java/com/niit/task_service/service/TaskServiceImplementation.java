package com.niit.task_service.service;

import com.niit.task_service.domain.Task;
import com.niit.task_service.exception.TaskAlreadyExistException;
import com.niit.task_service.exception.TaskNotFoundException;
import com.niit.task_service.exception.UserNotFoundException;
import com.niit.task_service.repository.TaskRepository;
import com.niit.user_service.domain.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;

@Service
public class TaskServiceImplementation implements TaskService{
    @Autowired
    private TaskRepository taskRepository;
    @Override
    public User addTaskForUser(String emailId, Task task) throws UserNotFoundException, TaskAlreadyExistException {
        if(taskRepository.findById(emailId).isEmpty()){
            throw new UserNotFoundException();
        }
        User user = taskRepository.findById(emailId).get();
        List<Task> taskList = user.getTaskList();
        Iterator<Task> taskIterator = taskList.iterator();
        while(taskIterator.hasNext()){
            if(taskIterator.next().getTaskId().equalsIgnoreCase(task.getTaskId())){
                throw new TaskAlreadyExistException();
            }
        }
        if(user.getTaskList() == null){
            user.setTaskList(Arrays.asList(task));
        }
        else{
            taskList.add(task);
            user.setTaskList(taskList);
        }
        return taskRepository.save(user);
    }

    @Override
    public User deleteTaskForUser(String emailId, String taskId) throws UserNotFoundException, TaskNotFoundException {
        boolean result;
        if(taskRepository.findById(emailId).isEmpty())
        {
            throw new UserNotFoundException();
        }
        User user = taskRepository.findById(emailId).get();
        List<Task> tasks = user.getTaskList();
        result = tasks.removeIf(obj->obj.getTaskId().equalsIgnoreCase(taskId));
        if(!result)
        {
            throw new TaskNotFoundException();
        }
        user.setTaskList(tasks);
        return taskRepository.save(user);
    }

    @Override
    public List<Task> getAllTasksForUser(String emailId) throws UserNotFoundException {
        if(taskRepository.findById(emailId).isEmpty())
        {
            throw new UserNotFoundException();
        }
        return taskRepository.findById(emailId).get().getTaskList();
    }

    @Override
    public User updateTaskForUser(String emailId, Task task) throws UserNotFoundException {
        if(taskRepository.findById(emailId).isEmpty())
        {
            throw new UserNotFoundException();
        }
        User user = taskRepository.findById(emailId).get();
        List<Task> tasks = user.getTaskList();
        Iterator<Task> iterator = tasks.iterator();
        while (iterator.hasNext()){
            Task task1 = iterator.next();
            if(task1.getTaskId().equalsIgnoreCase(task.getTaskId())){

                task1.setTaskTitle(task.getTaskTitle());
                task1.setTaskDescription(task.getTaskDescription());
                task1.setTaskDeadline(task.getTaskDeadline());
                task1.setTaskPriority(task.getTaskPriority());
                task1.setAssignee(task.getAssignee());
            }
        }
        user.setTaskList(tasks);
        return taskRepository.save(user);
    }

    @Override
    public Task getTaskOfUser(String emailId, String taskId) throws UserNotFoundException {
        if (taskRepository.findById(emailId).isEmpty()){
            throw  new UserNotFoundException();
        }
        User user = taskRepository.findById(emailId).get();
        List<Task> taskList = user.getTaskList();
        for (Task task:taskList) {
            if (task.getTaskId().equalsIgnoreCase(taskId)){
                return task;
            }
        }
        return taskList.get(0);
    }
}
