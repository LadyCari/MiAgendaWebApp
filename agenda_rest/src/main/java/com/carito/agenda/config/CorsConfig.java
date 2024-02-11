package com.carito.agenda.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@Configuration
public class CorsConfig {

    @Bean
    public CorsFilter corsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowCredentials(true);
        // Aquí puedes configurar los orígenes permitidos, métodos HTTP, encabezados, etc.
        config.addAllowedOrigin("*"); // Permitir todas las solicitudes de origen
        config.addAllowedHeader("*"); // Permitir todos los encabezados
        config.addAllowedMethod("*"); // Permitir todos los métodos (GET, POST, PUT, etc.)
        source.registerCorsConfiguration("/**", config);
        return new CorsFilter(source);
    }
}