package exemplo.autentificacao.security;

import exemplo.autentificacao.user.UserRepository;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private final JwtService jwtService;
    private final UserRepository userRepository;

    public JwtAuthenticationFilter(JwtService jwtService, UserRepository userRepository) {
        this.jwtService = jwtService;
        this.userRepository = userRepository;
    }
    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain)
            throws ServletException, IOException {

        // 🔒 Ignora as rotas públicas (sem exigir token)
        String path = request.getRequestURI();
        if (path.startsWith("/auth/") || path.startsWith("/v3/api-docs") ||
                path.startsWith("/swagger") || path.startsWith("/actuator")) {
            filterChain.doFilter(request, response);
            return;
        }

        String authHeader = request.getHeader("Authorization");

        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            filterChain.doFilter(request, response);
            return;
        }

        String token = authHeader.substring(7);
        String username = jwtService.getSubject(token);

        if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            var userOpt = userRepository.findByUsername(username);

            if (userOpt.isPresent() && jwtService.validateToken(token)) {
                var userEntity = userOpt.get();

                var userDetails = User.withUsername(userEntity.getUsername())
                        .password(userEntity.getPassword())
                        .roles(userEntity.getRoles().toArray(new String[0]))
                        .accountLocked(false)
                        .disabled(false)
                        .build();

                var authToken = new UsernamePasswordAuthenticationToken(
                        userDetails, null, userDetails.getAuthorities()
                );
                authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));

                SecurityContextHolder.getContext().setAuthentication(authToken);
            }
        }

        filterChain.doFilter(request, response);
    }
}