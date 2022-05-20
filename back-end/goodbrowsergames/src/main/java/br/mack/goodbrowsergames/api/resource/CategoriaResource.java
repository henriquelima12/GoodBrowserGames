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

import br.mack.goodbrowsergames.api.entity.Categoria;
import br.mack.goodbrowsergames.api.repository.CategoriaRepository;

@RestController
public class CategoriaResource {
	
	@Autowired
    private CategoriaRepository categoriaRepository;
	
	@GetMapping("/api/categorias")
	public ResponseEntity<List<Categoria>> findAll(){
        return ResponseEntity.status(HttpStatus.OK).body(categoriaRepository.findAll());
    }

    @GetMapping("/api/categorias/{id}")
    public ResponseEntity<Optional<Categoria>> findById(@PathVariable Long id){
        return ResponseEntity.status(HttpStatus.OK).body(categoriaRepository.findById(id));
    }
    
    @GetMapping("/api/categorias/maisavaliadas")
    public ResponseEntity<List<JSONObject>> findMaisAvaliadas(){
        return ResponseEntity.status(HttpStatus.OK).body(categoriaRepository.findMaisAvaliadas());
    }

    @PostMapping("/api/categorias")
    public ResponseEntity<Categoria> create(@RequestBody Categoria categoria){
    	return ResponseEntity.status(HttpStatus.CREATED).body(categoriaRepository.save(categoria));
    }

    @PutMapping("/api/categorias/{id}")
    public ResponseEntity<Categoria> update(@RequestBody Categoria categoriaReq, @PathVariable Long id){
    	Optional <Categoria> categoria = categoriaRepository.findById(id);
    	if (categoria.isPresent()) {
  	      Categoria _categoria = categoria.get();
  	      _categoria.setNome(categoriaReq.getNome());
  	      return new ResponseEntity<>(categoriaRepository.save(_categoria), HttpStatus.OK);
  	    } else {
  	      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
  	    }
    }

    @DeleteMapping("/api/categorias/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id){
        categoriaRepository.deleteById(id);
        return ResponseEntity.status(HttpStatus.OK).build();
    }
	
}
