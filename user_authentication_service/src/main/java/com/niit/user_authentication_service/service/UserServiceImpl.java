package com.niit.user_authentication_service.service;

import com.niit.user_authentication_service.domain.User;
import com.niit.user_authentication_service.exception.UserAlreadyExitException;
import com.niit.user_authentication_service.exception.UserNotFoundException;
import com.niit.user_authentication_service.repositroy.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService{

    private UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User saveUser(User user) throws UserAlreadyExitException {
        if (userRepository.findById(user.getEmailId()).isPresent()){
            throw new UserAlreadyExitException();
        }

        return userRepository.save(user);
    }

    @Override
    public User findByEmailIdAndPassword(String emailId, String password) throws UserNotFoundException {
      User login =userRepository.findByEmailIdAndPassword(emailId,password);
      if (login==null){
          throw new UserNotFoundException();
      }
        return login;
    }
}
