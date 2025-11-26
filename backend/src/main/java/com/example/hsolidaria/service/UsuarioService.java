package com.example.hsolidaria.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;

import com.example.hsolidaria.model.Usuario;
import com.example.hsolidaria.repository.UsuarioRepository;

/**
 * Servicio para la gestión de Usuarios.
 */
@Service
@Transactional
public class UsuarioService {
    @Autowired
    private UsuarioRepository usuarioRepository;

    /**
     * Guarda un nuevo usuario.
     */
    public Usuario guardarUsuario(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }

    /**
     * Lista todos los usuarios.
     */
    public List<Usuario> listarUsuarios() {
        return usuarioRepository.findAll();
    }

    /**
     * Elimina un usuario por su ID.
     */
    public void eliminarUsuario(Integer id) {
        usuarioRepository.deleteById(id);
    }

    /**
     * Actualiza un usuario existente.
     */
    public Usuario actualizarUsuario(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }

     /**
     * Busca un usuario por su ID.
     */
    public Optional<Usuario> findById(Integer id) {
        return usuarioRepository.findById(id);
    }
}
