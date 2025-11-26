package com.example.hsolidaria.model;

import lombok.*;

import jakarta.persistence.Column;
import jakarta.validation.constraints.NotBlank;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name = "usuario")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable= false, length= 10)
    @NotBlank
    private String username;

    @Column(nullable= false, length= 15)
    @NotBlank
    private String password;
}
