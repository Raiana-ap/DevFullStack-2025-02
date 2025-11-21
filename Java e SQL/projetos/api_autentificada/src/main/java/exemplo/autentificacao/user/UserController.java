package exemplo.autentificacao.user;

import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.Map;

@RestController
@Tag(name = "Users")
@RequestMapping("/users")
public class UserController {

    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/me")
    public Map<String, Object> me(Principal principal) {
        if (principal == null) {
            throw new RuntimeException("Nenhum usuário autenticado no contexto!");
        }

        System.out.println("DEBUG principal.getName() = " + principal.getName());

        var user = userRepository.findByUsername(principal.getName())
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado: " + principal.getName()));

        return Map.of(
                "idUser", user.getIdUser(),
                "name", user.getName(),
                "username", user.getUsername(),
                "roles", user.getRoles()
        );
    }
}
