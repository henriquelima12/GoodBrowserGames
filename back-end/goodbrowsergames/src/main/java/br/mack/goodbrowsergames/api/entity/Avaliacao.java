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
@Table(name="avaliacoes")
public class Avaliacao {
	
	@Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    private Integer estrelas;
    
    private String texto;
    
    private Long idMembro;
    
    private Long idGame;
    
    private Date dataAvaliacao;
	
}
