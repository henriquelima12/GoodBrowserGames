package br.mack.goodbrowsergames.api.repository;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.json.simple.JSONObject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import br.mack.goodbrowsergames.api.entity.Game;

public interface GameRepository extends JpaRepository<Game, Long> {
	List<Game> findByNomeContaining(String nome);
	List<Game> findByCategoriaContaining(String categoria);
	
	@Modifying 
	@Transactional(readOnly = false)
	@Query(value = "select G.nome as nome, "
			+ "count(A.idGame) as quantidade "
			+ "from Game G "
			+ "inner join Avaliacao A "
			+ "on G.id = A.idGame "
			+ "group by G.nome "
			+ "order by count(A.idGame) DESC ")
	List<JSONObject> findMaisAvaliados();
	
	@Modifying 
	@Transactional(readOnly = false)
	@Query(value = "select G.nome as nome, "
			+ "trunc(AVG(A.estrelas), 2) as media "
			+ "from Game G "
			+ "inner join Avaliacao A "
			+ "on G.id = A.idGame "
			+ "group by G.nome "
			+ "order by AVG(A.estrelas) DESC ")
	List<JSONObject> findMaiorNota();
	
	@Modifying 
	@Transactional(readOnly = false)
	@Query(value = "select G.id as id, "
			+ "G.categoria as categoria, "
			+ "G.descricao as descricao, "
			+ "G.imagem as imagem, "
			+ "G.nome as nome, "
			+ "G.urlAcesso as urlAcesso, "
			+ "G.urlVideo as urlVideo "
			+ "from Game G "
			+ "where G.id not in ( "
			+ "select A.idGame "
			+ "from Avaliacao A "
			+ "where A.idMembro = :idMembro "
			+ ")" )
	List<JSONObject> findRecomendacoes(@Param("idMembro") Long idMembro);
	
}
