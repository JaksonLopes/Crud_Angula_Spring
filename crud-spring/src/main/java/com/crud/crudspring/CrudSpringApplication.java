package com.crud.crudspring;

import com.crud.crudspring.model.Curso;
import com.crud.crudspring.repository.CursoRepository;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class CrudSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudSpringApplication.class, args);

	}
	/* @Bean
	CommandLineRunner initDatabase(CursoRepository corsoRepositorio){
		return args -> {
			corsoRepositorio.deleteAll();

			Curso c = new Curso();
			c.setNome("angular com spring ");
			c.setCategoria("frontend");

			corsoRepositorio.save(new Curso());
		};
	} */

}
