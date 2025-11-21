package exemplo.autentificacao.config;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.enums.SecuritySchemeType;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.security.SecurityScheme;
import org.springframework.context.annotation.Configuration;

@Configuration // Indica que esta classe faz parte da configuração do Spring (um bean de configuração)
@OpenAPIDefinition(
        // Metadados gerais exibidos no topo do Swagger UI e no /v3/api-docs
        info = @Info(
                title = "Demonstration API",           // Título amigável da API
                version = "v1",                         // Versão do contrato (ajude consumidores a versionar)
                description = "API de demonstração com autenticação JWT e recursos de usuários, matrículas e cursos.",
                contact = @Contact(                     // Contato para dúvidas/bugs (não precisa ser real em demo)
                        name = "Equipe de Suporte",
                        email = "naoretornamos@nunca.com"
                    )
            ),
            // Requisito de segurança padrão aplicado “globalmente”
            // => Endpoints herdam que precisam de 'bearerAuth', a menos que outro requisito os substitua.
        security = {
                @SecurityRequirement(name = "bearerAuth")
        }
    )
// Define o ESQUEMA DE SEGURANÇA usado na especificação OpenAPI.
// Isso habilita o botão "Authorize" no Swagger UI, permitindo testar endpoints com JWT.
@SecurityScheme(
        name = "bearerAuth",                // Nome lógico do esquema (referenciado em @SecurityRequirement)
        type = SecuritySchemeType.HTTP,     // Tipo HTTP (em oposição a APIKEY, OAUTH2, OPENIDCONNECT)
        scheme = "bearer",                  // Esquema do header Authorization: "Bearer <token>"
        bearerFormat = "JWT"                // Dica para UIs/clients (formato do token). Não valida nada por si só.
    )
public class OpenApiConfig {
    // Classe propositalmente vazia:
    // As anotações de classe já são suficientes para o springdoc-openapi gerar a documentação.
    // Não é necessário adicionar código aqui.
}
