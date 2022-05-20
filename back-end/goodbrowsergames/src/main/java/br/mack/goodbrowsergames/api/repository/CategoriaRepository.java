package br.mack.goodbrowsergames.api.repository;

import java.util.List;

import org.json.simple.JSONObject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import br.mack.goodbrowsergames.api.entity.Categoria;

public interface CategoriaRepository extends JpaRepository<Categoria, Long>{
	
	@Modifying 
	@Transactional(readOnly = false)
	@Query(value = "select C.nome as nome, "
			+ "count(C.id) as quantidade "
			+ "from Game G "
			+ "inner join Categoria C "
			+ "on C.nome = G.categoria "
			+ "inner join Avaliacao A "
			+ "on G.id = A.idGame "
			+ "group by C.nome "
			+ "order by count(C.id) DESC ")
	List<JSONObject> findMaisAvaliadas();

}
