package br.mack.goodbrowsergames.api.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name="membros")
public class Membro {
	
	@Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    private String nome;
    
    private String username;
    
    private String senha;
    
    private Date dataNascimento;
    
    private String estado;
    
    private String pais;
    
}
