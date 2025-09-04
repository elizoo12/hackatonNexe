package com.fundacioNexe.webApi.controllers;


import com.fundacioNexe.webApi.entities.Doctor;
import com.fundacioNexe.webApi.entities.Kid;
import com.fundacioNexe.webApi.repositories.KidRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin // Para hacer peticiones desde otro servidor
@RestController // Para hacer peticiones REST
@RequestMapping("/kid")
public class KidController {
    @Autowired
    private KidRepository kidRepository;

    @GetMapping("/")
    public List<Kid> getKids(){
        return kidRepository.findAll();
    }


    @PostMapping("/")
    public void addKid(@RequestBody Kid kid){
        kidRepository.save(kid);
    }

    @PutMapping("/{id}")
    public void updateKid(@RequestBody Kid kid, @PathVariable("id")Long id) {
        kid.setId(id);
        kidRepository.save(kid);
    }


    @DeleteMapping("/{id}")
    public void deleteKid(@PathVariable("id") Long id) {
        Kid i = new Kid();
        i.setId(id);
        kidRepository.delete(i);
    }


}
