package com.example.hsolidaria.assemblers;

import com.example.hsolidaria.model.Usuario;

/**
 * Assembler para convertir Usuario a modelos de respuesta.
 * Nota: HATEOAS desactivado por compatibilidad; puede reactivarse con Spring Boot < 3.5.x
 */
public class UsuarioModelAssembler {
    public Usuario toModel(Usuario usuario) {
        return usuario;
    }
}
