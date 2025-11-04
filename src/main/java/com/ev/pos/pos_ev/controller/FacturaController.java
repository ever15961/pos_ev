package com.ev.pos.pos_ev.controller;

import com.ev.pos.pos_ev.domain.Factura;
import com.ev.pos.pos_ev.service.facturaService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/facturas")
@CrossOrigin(origins = "http://localhost:5173") //Permitir llamada de React
public class FacturaController {
    private final facturaService facturaService;

    public FacturaController(facturaService facturaService) {
        this.facturaService = facturaService;
    }

    @GetMapping
    public List<Factura> findAll() {
        return facturaService.findAll();
    }

    @PostMapping
    public Factura Guardar(@RequestBody Factura factura){
        return facturaService.Guardar(factura);
    }
}
