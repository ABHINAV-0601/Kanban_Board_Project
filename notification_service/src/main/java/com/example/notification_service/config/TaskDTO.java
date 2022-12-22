package com.example.notification_service.config;

import org.json.simple.JSONObject;

public class TaskDTO {
    private JSONObject jsonObject;

    public TaskDTO(){

    }
    public JSONObject getJsonObject() {
        return jsonObject;
    }

    public void setJsonObject(JSONObject jsonObject) {
        this.jsonObject = jsonObject;
    }


}
