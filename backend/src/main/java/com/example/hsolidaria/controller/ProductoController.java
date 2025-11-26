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

import com.example.hsolidaria.model.Producto;
import com.example.hsolidaria.service.ProductoService;

/**
 * PARA SWAGGER UI http://localhost:8080/doc/swagger-ui.html
 */

/**
 * Controlador REST para operaciones CRUD de Productos.
 */
@RestController
@RequestMapping("/api/productos/v1")
public class ProductoController {
    @Autowired
    private ProductoService productoService;

    /**
     * Lista todos los productos.
     * @return Lista de productos o 204 si está vacía.
     */
    @GetMapping("/listarProductos")
    public ResponseEntity<List<Producto>> findAll() {
        List<Producto> productos = productoService.listarProductos();
        if (productos.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(productos);
    }

    /**
     * GET a /api/productos/v1
     */
    @GetMapping
    public ResponseEntity<List<Producto>> index() {
        return findAll();
    }

    /**
     * Busca un producto por su ID.
     */
    @GetMapping("/buscarProducto/{id}")
    public ResponseEntity<Producto> findById(@PathVariable Integer id) {
        return productoService.buscarPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    /**
     * Elimina un producto por su ID.
     */
    @GetMapping("/eliminarProducto/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable Integer id) {
        productoService.eliminarProducto(id);
        return ResponseEntity.noContent().build();
    }

    /**
     * Guarda un nuevo producto.
     */
    @PostMapping(path = "/guardarProducto", consumes = "application/json", produces = "application/json")
    public ResponseEntity<Producto> save(@Valid @RequestBody Producto producto) {
        Producto nuevoProducto = productoService.guardarProducto(producto);
        return ResponseEntity.status(201).body(nuevoProducto);
    }

    /**
     * Actualiza un producto existente.
     */
    @PatchMapping(path = "/actualizarProducto/{id}", consumes = "application/json", produces = "application/json")
    public ResponseEntity<Producto> updateProducto(@PathVariable Integer id, @Valid @RequestBody Producto producto) {
        // ensure the id from path is applied to the entity
        producto.setId(id);
        Producto nuevoProducto = productoService.actualizarProducto(producto);
        return ResponseEntity.ok(nuevoProducto);
    }
}
