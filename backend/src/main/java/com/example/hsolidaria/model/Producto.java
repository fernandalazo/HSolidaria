package com.example.hsolidaria.model;

import lombok.*;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "productos")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Producto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable= false, length= 10)
    private String categoria;

    @Column(nullable= false, length= 100)
    private String titulo;

    @Column(nullable= false)
    private double precioAntiguo;

    @Column(nullable= false)
    private double precioNuevo;
}
