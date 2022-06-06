package br.mack.goodbrowsergames.api.repository;

import java.util.List;

import org.springframework.transaction.annotation.Transactional;
import org.json.simple.JSONObject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import br.mack.goodbrowsergames.api.entity.Avaliacao;

public interface AvaliacaoRepository extends JpaRepository<Avaliacao, Long>{
	
	@Modifying 
	@Transactional(readOnly = false)
	@Query("select "
			+ "A.id as id, "
			+ "M.nome as nome, "
			+ "A.texto as texto, "
			+ "A.estrelas as estrelas, "
			+ "M.id as idMembro, "
			+ "count(AU.id) as marcados "
			+ "from Avaliacao A "
			+ "inner join Membro M "
			+ "on M.id = A.idMembro "
			+ "left join AvaliacaoUtil AU "
			+ "on A.id = AU.idAvaliacao "
			+ "where A.idGame = :idGame "
			+ "group by M.nome, A.id, M.id ")
	List<JSONObject> findByIdGame(@Param("idGame") Long idGame);
	
	@Modifying
	@Transactional(readOnly = false)
	@Query(value = "select A.id as id, "
			+ "A.estrelas as estrelas, "
			+ "G.nome as nomeGame, "
			+ "M.nome as nomeMembro, "
			+ "A.texto as texto, "
			+ "count(AU.id) as marcados "
			+ "from Avaliacao A "
			+ "inner join AvaliacaoUtil AU "
			+ "on A.id = AU.idAvaliacao "
			+ "inner join Membro M "
			+ "on A.idMembro = M.id "
			+ "inner join Game G "
			+ "on A.idGame = G.id "
			+ "group by A.id, G.nome, M.nome "
			+ "order by count(AU.id) DESC ")
	List<JSONObject> findMaisUteis();
	
}
