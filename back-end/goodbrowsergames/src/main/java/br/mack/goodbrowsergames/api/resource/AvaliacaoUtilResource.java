package br.mack.goodbrowsergames.api.resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.mack.goodbrowsergames.api.entity.AvaliacaoUtil;
import br.mack.goodbrowsergames.api.repository.AvaliacaoUtilRepository;

@RestController
public class AvaliacaoUtilResource {
	
	@Autowired
    private AvaliacaoUtilRepository avaliacaoUtilRepository;

    @PostMapping("/api/avaliacaoutil")
    public ResponseEntity<AvaliacaoUtil> create(@RequestBody AvaliacaoUtil avaliacaoUtil){
    	return ResponseEntity.status(HttpStatus.CREATED).body(avaliacaoUtilRepository.save(avaliacaoUtil));
    }
    
    @DeleteMapping("/api/avaliacaoUtil/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id){
        avaliacaoUtilRepository.deleteById(id);
        return ResponseEntity.status(HttpStatus.OK).build();
    }
	
}
