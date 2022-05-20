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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.mack.goodbrowsergames.api.entity.Game;
import br.mack.goodbrowsergames.api.repository.GameRepository;

@RestController
public class GameResource {
	
	@Autowired
    private GameRepository gameRepository;
	
	@GetMapping("/api/games")
	public ResponseEntity<List<Game>> findAll(){
        return ResponseEntity.status(HttpStatus.OK).body(gameRepository.findAll());
    }

    @GetMapping("/api/games/{id}")
    public ResponseEntity<Optional<Game>> findById(@PathVariable Long id){
        return ResponseEntity.status(HttpStatus.OK).body(gameRepository.findById(id));
    }
    
    @GetMapping("/api/games/nome")
	public ResponseEntity<List<Game>> findByName(@RequestParam("nome")String nome){
        return ResponseEntity.status(HttpStatus.OK).body(gameRepository.findByNomeContaining(nome));
    }
    
    @GetMapping("/api/games/categoria")
	public ResponseEntity<List<Game>> findByCategory(@RequestParam("categoria")String categoria){
        return ResponseEntity.status(HttpStatus.OK).body(gameRepository.findByCategoriaContaining(categoria));
    }
    
    @GetMapping("/api/games/maisavaliados")
	public ResponseEntity<List<JSONObject>> findMaisAvaliados(){
        return ResponseEntity.status(HttpStatus.OK).body(gameRepository.findMaisAvaliados());
    }
    
    @GetMapping("/api/games/maiornota")
	public ResponseEntity<List<JSONObject>> findMaiorNota(){
        return ResponseEntity.status(HttpStatus.OK).body(gameRepository.findMaiorNota());
    }
    
    @PostMapping("/api/games")
    public ResponseEntity<Game> create(@RequestBody Game game){
    	return ResponseEntity.status(HttpStatus.CREATED).body(gameRepository.save(game));
    }

    @PutMapping("/api/games/{id}")
    public ResponseEntity<Game> update(@RequestBody Game gameReq, @PathVariable Long id){
    	Optional <Game> game = gameRepository.findById(id);
    	if (game.isPresent()) {
  	      Game _game = game.get();
  	      _game.setNome(gameReq.getNome());
  	      _game.setCategoria(gameReq.getCategoria());
  	      _game.setUrlAcesso(gameReq.getUrlAcesso());
  	      _game.setUrlVideo(gameReq.getUrlVideo());
  	      _game.setDescricao(gameReq.getDescricao());
  	      _game.setImagem(gameReq.getImagem());
  	      return new ResponseEntity<>(gameRepository.save(_game), HttpStatus.OK);
  	    } else {
  	      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
  	    }
    }

    @DeleteMapping("/api/games/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id){
        gameRepository.deleteById(id);
        return ResponseEntity.status(HttpStatus.OK).build();
    }

}
