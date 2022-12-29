package com.niit.user_service.domain;

import com.niit.task_service.domain.Task;

import java.util.List;

public class TaskList {
    private List<Task> toDo;
    private List<Task> inProgress;
    private List<Task> completed;
    private List<Task> archive;
    public TaskList() {
    }

    public TaskList(List<Task> toDo, List<Task> inProgress, List<Task> completed, List<Task> archive) {
        this.toDo = toDo;
        this.inProgress = inProgress;
        this.completed = completed;
        this.archive = archive;
    }

    public List<Task> getToDo() {
        return toDo;
    }

    public void setToDo(List<Task> toDo) {
        this.toDo = toDo;
    }

    public List<Task> getInProgress() {
        return inProgress;
    }

    public void setInProgress(List<Task> inProgress) {
        this.inProgress = inProgress;
    }

    public List<Task> getCompleted() {
        return completed;
    }

    public void setCompleted(List<Task> completed) {
        this.completed = completed;
    }

    public List<Task> getArchive() {
        return archive;
    }

    public void setArchive(List<Task> archive) {
        this.archive = archive;
    }

    @Override
    public String toString() {
        return "TaskList{" +
                "toDo=" + toDo +
                ", inProgress=" + inProgress +
                ", completed=" + completed +
                ", archive=" + archive +
                '}';
    }
}
