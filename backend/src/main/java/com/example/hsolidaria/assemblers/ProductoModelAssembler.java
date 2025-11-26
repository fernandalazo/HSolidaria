package com.example.hsolidaria.assemblers;

import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.RepresentationModelAssembler;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.*;

import com.example.hsolidaria.controller.ProductoController;
import com.example.hsolidaria.model.Producto;

public class ProductoModelAssembler implements RepresentationModelAssembler<Producto, EntityModel<Producto>> {
    @Override
    public EntityModel<Producto> toModel(Producto producto) {
        return EntityModel.of(producto,
            linkTo(methodOn(ProductoController.class).findById(producto.getId())).withSelfRel(),
            linkTo(methodOn(ProductoController.class).findAll()).withRel("productos")
        );
    }
}
