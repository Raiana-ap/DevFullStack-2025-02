package exemplo.autentificacao.auth;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class LoginSuccessController {
    @GetMapping("/loginSuccess")
    public String loginSuccess(@AuthenticationPrincipal OAuth2User principal, Model model) {
        if (principal != null) {

            String displayName = safeString(principal.getAttribute("name"));
            String usernameLike = safeString(principal.getAttribute("login")); // GitHub usa "login"

            model.addAttribute("name", displayName);
            model.addAttribute("login", usernameLike);
        }

        return "login";
    }

    private String safeString(Object value) {
        return value == null ? "desconhecido" : String.valueOf(value);
    }
}

