package fr.noams88.secondlifeobject.security.jwt;

import fr.noams88.secondlifeobject.security.services.UserPrinciple;
import io.jsonwebtoken.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class JwtProvider {

    private static final Logger logger = LoggerFactory.getLogger(JwtProvider.class);

    @Value("${app.jwtSecret}")
    private String jwtSecret;

    @Value("${app.jwtExpiration}")
    private int jwtExpiration;

    // Génère un token sécurisé avec la clé jwtSecret
    public String generateJwtToken(Authentication authentication) {

        UserPrinciple userPrincipal = (UserPrinciple) authentication.getPrincipal();

        return Jwts.builder()
		                .setSubject((userPrincipal.getUsername()))
                        .claim("roles", userPrincipal.getAuthorities().toString())
		                .setIssuedAt(new Date())
		                .setExpiration(new Date((new Date()).getTime() + (jwtExpiration * 1000)))
		                .signWith(SignatureAlgorithm.HS512, jwtSecret)
		                .compact();
    }

    // Contrôle l'authenticité du token
    public boolean validateJwtToken(String authToken) {

        try {
            Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(authToken);
            return true;
        } catch (SignatureException e) {
            logger.error("Signature JWT invalide -> Message: {} ", e.getMessage());
        } catch (MalformedJwtException e) {
            logger.error("Token JWT invalide -> Message: {}", e.getMessage());
        } catch (ExpiredJwtException e) {
            logger.error("Token JWT expiré -> Message: {}", e.getMessage());
        } catch (UnsupportedJwtException e) {
            logger.error("Token JWT non supporté -> Message: {}", e.getMessage());
        } catch (IllegalArgumentException e) {
            logger.error("Token JWT vide -> Message: {}", e.getMessage());
        }
        
        return false;
    }

    // Récupération de l'username dans le token
    public String getUsernameFromJwtToken(String token) {

        return Jwts.parser()
			                .setSigningKey(jwtSecret)
			                .parseClaimsJws(token)
			                .getBody()
                            .getSubject();
    }
}
