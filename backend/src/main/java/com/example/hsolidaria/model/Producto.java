package com.example.hsolidaria.model;

import lombok.*;

import jakarta.persistence.Column;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Positive;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "producto")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Producto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable= false, length= 10)
    @NotBlank
    private String categoria;

    @Column(nullable= false, length= 100)
    @NotBlank
    private String titulo;

    @Column(nullable= false)

    @Positive
    private double precioAntiguo;

    @Column(nullable= false)
    @Positive
    private double precioNuevo;
}
