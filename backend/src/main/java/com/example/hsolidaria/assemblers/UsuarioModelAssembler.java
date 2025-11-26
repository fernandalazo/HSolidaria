package com.example.hsolidaria.assemblers;

import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.RepresentationModelAssembler;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.*;

import com.example.hsolidaria.controller.UsuarioController;
import com.example.hsolidaria.model.Usuario;

public class UsuarioModelAssembler implements RepresentationModelAssembler<Usuario, EntityModel<Usuario>> {
    @Override
    public EntityModel<Usuario> toModel(Usuario usuario) {
        return EntityModel.of(usuario,
            linkTo(methodOn(UsuarioController.class).findById(usuario.getId())).withSelfRel(),
            linkTo(methodOn(UsuarioController.class).findAll()).withRel("usuarios")
        );
    }
}
