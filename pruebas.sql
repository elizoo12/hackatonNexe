insert into button (nombre, ruta_imagen,ruta_sonido)
values ("asustado","images/asustado.webp","sounds/asustado.mp3"),
("coche","coche.webp","sounds/enfadado.mp3"),
("feliz","images/feliz.webp","sounds/futbol.mp3"),
("futbol","images/futbol.webp","sounds/futbol.mp3"),
("hamburguesa","images/hamburguesa.webp","sounds/hamburguesa.mp3"),
("juego","images/juego.webp","sounds/juego.mp3"),
("llorar","images/llorar.webp","sounds/llorar.mp3"),
("manzana","images/manzana.webp","sounds/manzana.mp3"),
("pizza","images/pizza.webp","sounds/pizza.mp3"),
("retrete","images/retrete.webp","sounds/retrete.mp3"),
("tren","images/tren.webp","sounds/tren.mp3")

INSERT INTO kid (id, tutor_id, descripcion, nombre) VALUES
(1, null, 'Le gusta pintar y leer cuentos', 'Ana López'),
(2, null, 'Muy bueno en matemáticas', 'Carlos Pérez'),
(3, null, 'Juega al fútbol', 'Lucía García'),
(4,null, 'Aprende música, toca guitarra', 'David Fernández'),
(5, null, 'Le encantan los animales', 'María Torres'),
(6, null, 'Es muy curioso y hace muchas preguntas', 'Jorge Sánchez'),
(7, null, 'Baila danza moderna', 'Paula Ramírez'),
(8, null, 'Muy creativo para dibujar', 'Sofía Jiménez'),
(9, null, 'Fan de los dinosaurios', 'Miguel Díaz'),
(10, null, 'Aprende rápido con juegos de memoria', 'Laura Castillo'),
(11, null, 'Le gusta correr y hacer deporte', 'Andrés Romero'),
(12, null, 'Muy participativa en clase', 'Clara Ruiz'),
(13, null, 'Interesado en ciencia y experimentos', 'Tomás Ortega'),
(14, null, 'Se expresa muy bien contando historias', 'Isabel Moreno'),
(15, null, 'Aficionado a los videojuegos educativos', 'Hugo Navarro'),
(16, null, 'Le encanta cocinar con su familia', 'Valeria Ramos'),
(17, null, 'Muy bueno en música, toca piano', 'Gabriel Herrera'),
(18, null, 'Le gusta bailar y cantar', 'Emma Flores'),
(19, null, 'Muy sociable y hace amigos rápido', 'Mateo Aguilar'),
(20, null, 'Le encanta construir con bloques', 'Daniela Vargas');


INSERT INTO tutor (id, gmail, contraseña, name, kid_id) VALUES
(101, 'tutor1@gmail.com', 'pass123', 'María López', null),
(102, 'tutor2@gmail.com', 'pass123', 'José Pérez', null),
(103, 'tutor3@gmail.com', 'pass123', 'Laura García', null),
(104, 'tutor4@gmail.com', 'pass123', 'Andrés Torres', null),
(105, 'tutor5@gmail.com', 'pass123', 'Sofía Sánchez', null),
(106, 'tutor6@gmail.com', 'pass123', 'Carmen Ramírez',  null),
(107, 'tutor7@gmail.com', 'pass123', 'Pedro Jiménez',  null),
(108, 'tutor8@gmail.com', 'pass123', 'Elena Díaz',  null),
(109, 'tutor9@gmail.com', 'pass123', 'Manuel Castillo',  null),
(110, 'tutor10@gmail.com', 'pass123', 'Lucía Romero',  null);