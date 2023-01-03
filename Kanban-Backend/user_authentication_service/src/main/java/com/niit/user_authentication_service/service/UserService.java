package com.niit.user_authentication_service.service;

import com.niit.user_authentication_service.domain.User;
import com.niit.user_authentication_service.exception.UserAlreadyExitException;
import com.niit.user_authentication_service.exception.UserNotFoundException;

public interface UserService {
    public User saveUser(User user) throws UserAlreadyExitException;
    public User findByEmailIdAndPassword(String emailId,String password)throws UserNotFoundException;

    User forgotPassword(String emailId) throws UserNotFoundException;
}
