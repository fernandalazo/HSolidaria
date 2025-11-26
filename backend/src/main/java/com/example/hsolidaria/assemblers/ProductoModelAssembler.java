package com.example.hsolidaria.assemblers;

import com.example.hsolidaria.model.Producto;

/**
 * Assembler para convertir Producto a modelos de respuesta.
 * Nota: HATEOAS desactivado por compatibilidad; puede reactivarse con Spring Boot < 3.5.x
 */
public class ProductoModelAssembler {
    public Producto toModel(Producto producto) {
        return producto;
    }
}
