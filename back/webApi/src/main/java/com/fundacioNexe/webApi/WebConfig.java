package com.fundacioNexe.webApi;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        // Expone la carpeta /upload/ como ruta accesible
        registry.addResourceHandler("/upload/**")
                .addResourceLocations("file:upload/");
        // "file:" le dice que es una ruta en el sistema de archivos
    }
}