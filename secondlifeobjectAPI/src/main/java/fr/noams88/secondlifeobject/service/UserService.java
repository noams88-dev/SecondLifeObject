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

    public User getByUsername(String username) {
        return userRepository.findByUsername(username)
                .orElseThrow(() -> new UserNotFoundExeption("L'utilisateur avec l'username " + username + " n'a pas été trouvé"));
    }

    public User getById(Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundExeption("L'utilisateur avec l'id " + id + " n'a pas été trouvé"));
    }

    public List<User> getAll() {
        return userRepository.findAll();
    }

    public User add(User user) {
        return userRepository.save(user);
    }

    public User update(User user) {
        this.getById(user.getId());
        return userRepository.save(user);
    }

    public void delete(Long id) {
        this.getById(id);
        userRepository.deleteById(id);
    }
}
