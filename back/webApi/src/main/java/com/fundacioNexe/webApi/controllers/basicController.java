package com.fundacioNexe.webApi.controllers;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin // Para hacer peticiones desde otro servidor
@RestController // Para hacer peticiones REST
@RequestMapping("/doc")
public class basicController {

    @GetMapping("/")
    public String basicGet(){

        System.out.println("hola mundo");
        return "funciona";
    }
}
