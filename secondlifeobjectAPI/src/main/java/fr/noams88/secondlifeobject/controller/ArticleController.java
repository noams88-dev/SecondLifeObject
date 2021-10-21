package fr.noams88.secondlifeobject.controller;

import fr.noams88.secondlifeobject.model.Article;
import fr.noams88.secondlifeobject.service.ArticleService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/article")
public class ArticleController {

    private final ArticleService articleService;

    public ArticleController(ArticleService articleService) {
        this.articleService = articleService;
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<Article> get(@PathVariable("id") Long id) {
        Article article = articleService.getById(id);
        return new ResponseEntity<>(article, HttpStatus.OK);
    }

    @GetMapping("/all")
    public ResponseEntity<List<Article>> getAll() {
        List<Article> articles = articleService.getAll();
        return new ResponseEntity<>(articles, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Article> add(@RequestBody Article article) {
        Article articleReturn = articleService.add(article);
        return new ResponseEntity<>(articleReturn, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Article> update(@RequestBody Article article) {
        Article articleReturn = articleService.update(article);
        return new ResponseEntity<>(articleReturn, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Article> delete(@PathVariable("id") Long id) {
        articleService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
