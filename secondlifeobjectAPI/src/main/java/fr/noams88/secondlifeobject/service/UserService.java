package fr.noams88.secondlifeobject.service;

import fr.noams88.secondlifeobject.exeption.UserNotFoundExeption;
import fr.noams88.secondlifeobject.model.User;
import fr.noams88.secondlifeobject.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User findUserByUsername(String username) {
        return userRepository.findByUsername(username)
                .orElseThrow(() -> new UserNotFoundExeption("L'utilisateur avec l'username " + username + " n'a pas été trouvé"));
    }

    public User findUserById(Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundExeption("L'utilisateur avec l'id " + id + " n'a pas été trouvé"));
    }

    public List<User> findAllUsers() {
        return userRepository.findAll();
    }

    public User addUser(User user) {
        return userRepository.save(user);
    }

    public User updateUser(User user) {
        this.findUserById(user.getId());
        return userRepository.save(user);
    }

    public void deleteUser(Long id) {
        this.findUserById(id);
        userRepository.deleteById(id);
    }
}
