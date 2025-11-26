package com.example.hsolidaria.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.hsolidaria.model.Producto;
import com.example.hsolidaria.repository.ProductoRepository;

import jakarta.transaction.Transactional;


/**
 * Servicio para la gestión de Productos.
 */
@Service
@Transactional
public class ProductoService {
    @Autowired
    private ProductoRepository productoRepository;

    /**
     * Guarda un nuevo producto.
     */
    public Producto guardarProducto(Producto producto) {
        return productoRepository.save(producto);
    }

    /**
     * Lista todos los productos.
     */
    public List<Producto> listarProductos() {
        return productoRepository.findAll();
    }

    /**
     * Elimina un producto por su ID.
     */
    public void eliminarProducto(Integer id) {
        productoRepository.deleteById(id);
    }

    /**
     * Actualiza un producto existente.
     */
    public Producto actualizarProducto(Producto producto) {
        return productoRepository.save(producto);
    }

     /**
     * Busca un producto por su ID.
     */
    public Optional<Producto> buscarPorId(Integer id) {
        return productoRepository.findById(id);
    }
}
