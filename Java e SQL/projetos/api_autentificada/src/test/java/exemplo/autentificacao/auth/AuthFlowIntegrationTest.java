package exemplo.autentificacao.auth;

import com.fasterxml.jackson.databind.ObjectMapper;
import exemplo.autentificacao.auth.dto.RegisterRequest;
import exemplo.autentificacao.user.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
public class AuthFlowIntegrationTest {

    @Autowired
    MockMvc mockMvc;

    @Autowired
    ObjectMapper objectMapper;

    @Autowired
    UserRepository userRepository;

    @BeforeEach
    void cleanup() {
        userRepository.deleteAll();
    }


    @Test
    void register_login_and_access_protected_resource() throws Exception {
        RegisterRequest register = new RegisterRequest();
        register.setName("Test User");
        register.setUsername("test@example.com");
        register.setPassword("12345678");

        MvcResult registerResult = mockMvc.perform(
                        MockMvcRequestBuilders.post("/auth/register")
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(objectMapper.writeValueAsString(register))
                )
                .andExpect(status().isCreated()) // troque por isOk() se seu endpoint retorna 200
                .andExpect(jsonPath("$.token").exists())
                .andReturn();

        String token = objectMapper
                .readTree(registerResult.getResponse().getContentAsString())
                .get("token")
                .asText();

        assertThat(token).isNotBlank();

        MvcResult meResult = mockMvc.perform(
                        get("/users/me")
                                .header("Authorization", "Bearer " + token)
                )
                .andReturn();

        System.out.println("DEBUG: /users/me status: " + meResult.getResponse().getStatus());
        System.out.println("DEBUG: /users/me body: " + meResult.getResponse().getContentAsString());

        assertThat(meResult.getResponse().getStatus()).isEqualTo(200);
        assertThat(objectMapper.readTree(meResult.getResponse().getContentAsString()).get("name").asText())
                .isEqualTo("Test User");
        assertThat(objectMapper.readTree(meResult.getResponse().getContentAsString()).get("username").asText())
                .isEqualTo("test@example.com");
}
}