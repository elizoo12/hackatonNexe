package com.fundacioNexe.webApi.entities;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity @Getter @Setter
public class Button {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;

    private String rutaImagen;  // ej: /uploads/imagenes/btn1.png
    private String rutaSonido;  // ej: /uploads/sonidos/btn1.mp3

    @ManyToMany
    private List<Kid> kidsUsing;

}
