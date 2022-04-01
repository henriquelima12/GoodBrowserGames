package br.mack.goodbrowsergames.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import br.mack.goodbrowsergames.api.entity.Game;

public interface GameRepository extends JpaRepository<Game, Long> {
	List<Game> findByNomeContaining(String nome);
	List<Game> findByCategoriaContaining(String categoria);
	
}
