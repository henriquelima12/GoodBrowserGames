package br.mack.goodbrowsergames.api.resource;

import java.util.List;
import java.util.Optional;

import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.mack.goodbrowsergames.api.entity.Membro;
import br.mack.goodbrowsergames.api.repository.MembroRepository;

@RestController
public class MembroResource {
	
	@Autowired
    private MembroRepository membroRepository;
	
	@GetMapping("/api/membros")
	public ResponseEntity<List<Membro>> findAll(){
        return ResponseEntity.status(HttpStatus.OK).body(membroRepository.findAll());
    }

    @GetMapping("/api/membros/{id}")
    public ResponseEntity<Optional<Membro>> findById(@PathVariable Long id){
        return ResponseEntity.status(HttpStatus.OK).body(membroRepository.findById(id));
    }
    
    @GetMapping("/api/membros/maisavaliacoes")
	public ResponseEntity<List<JSONObject>> findMembrosComMaisAvaliacoes(){
        return ResponseEntity.status(HttpStatus.OK).body(membroRepository.findMembrosComMaisAvaliacoes());
    }

    @PostMapping("/api/membros")
    public ResponseEntity<Membro> create(@RequestBody Membro membro){
    	return ResponseEntity.status(HttpStatus.CREATED).body(membroRepository.save(membro));
    }

    @PutMapping("/api/membros/{id}")
    public ResponseEntity<Membro> update(@RequestBody Membro membroReq, @PathVariable Long id){
    	Optional <Membro> membro = membroRepository.findById(id);
    	if (membro.isPresent()) {
  	      Membro _membro = membro.get();
  	      _membro.setNome(membroReq.getNome());
  	      _membro.setUsername(membroReq.getUsername());
  	      _membro.setSenha(membroReq.getSenha());
  	      _membro.setDataNascimento(membroReq.getDataNascimento());
  	      _membro.setEstado(membroReq.getEstado());
  	      _membro.setPais(membroReq.getPais());
  	      return new ResponseEntity<>(membroRepository.save(_membro), HttpStatus.OK);
  	    } else {
  	      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
  	    }
    }

    @DeleteMapping("/api/membros/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id){
        membroRepository.deleteById(id);
        return ResponseEntity.status(HttpStatus.OK).build();
    }
	
}
