package br.mack.goodbrowsergames.api.resource;

import java.util.List;
import java.util.Optional;

import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.mack.goodbrowsergames.api.entity.Avaliacao;
import br.mack.goodbrowsergames.api.repository.AvaliacaoRepository;

@RestController
public class AvaliacaoResource {
	
	@Autowired
    private AvaliacaoRepository avaliacaoRepository;
	
	@GetMapping("/api/avaliacoes")
	public ResponseEntity<List<Avaliacao>> findAll(){
        return ResponseEntity.status(HttpStatus.OK).body(avaliacaoRepository.findAll());
    }
	
	@GetMapping("/api/avaliacoes/{id}")
    public ResponseEntity<Optional<Avaliacao>> findById(@PathVariable Long id){
        return ResponseEntity.status(HttpStatus.OK).body(avaliacaoRepository.findById(id));
    }
	
	@GetMapping(value = "/api/avaliacoesbygame", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<JSONObject>> findByIdGame(@RequestParam("idGame")Long idGame){
        return ResponseEntity.status(HttpStatus.OK).body(avaliacaoRepository.findByIdGame(idGame));
    }
	
	@GetMapping(value = "/api/avaliacoesmaisuteis", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<JSONObject>> findMaisUteis(){
        return ResponseEntity.status(HttpStatus.OK).body(avaliacaoRepository.findMaisUteis());
    }

    @PostMapping("/api/avaliacoes")
    public ResponseEntity<Avaliacao> create(@RequestBody Avaliacao avaliacao){
    	return ResponseEntity.status(HttpStatus.CREATED).body(avaliacaoRepository.save(avaliacao));
    }
    
    @PutMapping("/api/avaliacoes/{id}")
    public ResponseEntity<Avaliacao> update(@RequestBody Avaliacao avaliacaoReq, @PathVariable Long id){
    	Optional <Avaliacao> avaliacao = avaliacaoRepository.findById(id);
    	if (avaliacao.isPresent()) {
  	      Avaliacao _avaliacao = avaliacao.get();
  	      _avaliacao.setEstrelas(avaliacaoReq.getEstrelas());
  	      _avaliacao.setTexto(avaliacaoReq.getTexto());
  	      _avaliacao.setDataAvaliacao(avaliacaoReq.getDataAvaliacao());
  	      return new ResponseEntity<>(avaliacaoRepository.save(_avaliacao), HttpStatus.OK);
  	    } else {
  	      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
  	    }
    }
    
    @DeleteMapping("/api/avaliacoes/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id){
        avaliacaoRepository.deleteById(id);
        return ResponseEntity.status(HttpStatus.OK).build();
    }
	
}
