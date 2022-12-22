package com.niit.user_service.service;

import com.niit.user_service.domain.User;
import com.niit.user_service.exception.UserAlreadyExistsException;
import com.niit.user_service.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService{
    @Autowired
    private UserRepository userRepository;
    @Override
    public User saveUser(User user) throws UserAlreadyExistsException {
        if(userRepository.findById(user.getEmailId()).isPresent()){
            throw new UserAlreadyExistsException();
        }
        return userRepository.save(user);
    }
}
