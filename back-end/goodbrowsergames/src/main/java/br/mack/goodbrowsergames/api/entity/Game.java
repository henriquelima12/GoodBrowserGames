package br.mack.goodbrowsergames.api.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name="games")
public class Game {
	
	@Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    private String nome;

    private String categoria;

    private String urlAcesso;
    
    private String urlVideo;
    
    private String descricao;
    
    private String imagem;
}
