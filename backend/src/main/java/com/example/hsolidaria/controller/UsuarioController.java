package com.example.hsolidaria.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import jakarta.validation.Valid;

import com.example.hsolidaria.model.Usuario;
import com.example.hsolidaria.service.UsuarioService;

/**
 * PARA SWAGGER UI http://localhost:8080/doc/swagger-ui.html
 */

/**
 * Controlador REST para operaciones CRUD de Usuarios.
 */
@RestController
@RequestMapping("/api/usuarios/v1")
public class UsuarioController {
    @Autowired
    private UsuarioService usuarioService;
    
    /**
     * Lista todos los usuarios.
     * @return Lista de usuarios o 204 si está vacía.
     */
    @GetMapping("/listarUsuarios")
    public ResponseEntity<List<Usuario>> findAll() {
        List<Usuario> usuarios = usuarioService.listarUsuarios();
        if (usuarios.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(usuarios);
    }

    /**
     * Busca un usuario por su ID.
     */
    @GetMapping("/buscarUsuario/{id}")
    public ResponseEntity<Usuario> findById(@PathVariable Integer id) {
        return usuarioService.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    /**
     * Elimina un usuario por su ID.
     */
    @GetMapping("/eliminarUsuario/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable Integer id) {
        usuarioService.eliminarUsuario(id);
        return ResponseEntity.noContent().build();
    }

    /**
     * Guarda un nuevo usuario.
     */
    @PostMapping("/guardarUsuario")
    public ResponseEntity<Usuario> save(@Valid @RequestBody Usuario usuario) {
        Usuario nuevoUsuario = usuarioService.guardarUsuario(usuario);
        return ResponseEntity.status(201).body(nuevoUsuario);
    }

    /**
     * Actualiza un usuario existente.
     */
    @PatchMapping(path = "/actualizarUsuario/{id}", consumes = "application/json", produces = "application/json")
    public ResponseEntity<Usuario> updateUsuario(@PathVariable Integer id, @Valid @RequestBody Usuario usuario) {
        usuario.setId(id);
        Usuario nuevoUsuario = usuarioService.actualizarUsuario(usuario);
        return ResponseEntity.ok(nuevoUsuario);
    }

    /**
     * GET a /api/usuarios/v1
     */
    @GetMapping
    public ResponseEntity<List<Usuario>> index() {
        return findAll();
    }
}
