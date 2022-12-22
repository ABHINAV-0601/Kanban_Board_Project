package com.niit.user_service.service;

import com.niit.user_service.domain.User;
import com.niit.user_service.exception.UserAlreadyExistsException;

public interface UserService {
    User saveUser(User user) throws UserAlreadyExistsException;
}
