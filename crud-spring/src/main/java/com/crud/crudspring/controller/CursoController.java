package com.crud.crudspring.controller;
import java.util.List;
import com.crud.crudspring.model.Curso;
import com.crud.crudspring.repository.CursoRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/cursos")
@AllArgsConstructor
public class CursoController {

    private final CursoRepository corsoRepositorio;

    @GetMapping
    public List<Curso> list() {
        return corsoRepositorio.findAll();
    }

}
