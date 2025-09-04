package com.fundacioNexe.webApi.controllers;

import com.fundacioNexe.webApi.entities.Button;

import com.fundacioNexe.webApi.repositories.ButtonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin // Para hacer peticiones desde otro servidor
@RestController // Para hacer peticiones REST
@RequestMapping("/button")
public class ButtonController {


    @Autowired
    private ButtonRepository buttonRepository;


    @GetMapping("/")
    public List<Button> getButton(){
        return buttonRepository.findAll();
    }


    @PostMapping("/")
    public void addButton(@RequestBody Button button){
        buttonRepository.save(button);
    }

    @PutMapping("/{id}")
    public void updateButton(@RequestBody Button button, @PathVariable("id")Long id) {
        button.setId(id);
        buttonRepository.save(button);
    }


    @DeleteMapping("/{id}")
    public void deleteButton(@PathVariable("id") Long id) {
        Button i = new Button();
        i.setId(id);
        buttonRepository.delete(i);
    }
}
