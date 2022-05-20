package br.mack.goodbrowsergames.api.repository;

import java.util.List;

import org.json.simple.JSONObject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import br.mack.goodbrowsergames.api.entity.Membro;

public interface MembroRepository extends JpaRepository<Membro, Long>{
	
	@Modifying 
	@Transactional(readOnly = false)
	@Query(value = "select M.nome as nome, "
			+ "count(A.idMembro) as quantidade "
			+ "from Membro M "
			+ "inner join Avaliacao A "
			+ "on M.id = A.idMembro "
			+ "group by M.nome "
			+ "order by count(A.idMembro) DESC ")
	List<JSONObject> findMembrosComMaisAvaliacoes();
	
}
