package com.ev.pos.pos_ev.domain;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Data
@Entity
@Table(name = "factura")
public class Factura {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_FACTURA", nullable = false)
    private Integer idFactura;

    @Column(name = "CLIENTE", length = 25)
    private String cliente;

    @Column(name = "TOTAL")
    private Double total;

    @Column(name = "FECHA")
    private LocalDate fecha = LocalDate.now();


}