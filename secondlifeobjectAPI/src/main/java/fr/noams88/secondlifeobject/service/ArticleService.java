package fr.noams88.secondlifeobject.service;

import fr.noams88.secondlifeobject.exeption.ArticleNotFoundExeption;
import fr.noams88.secondlifeobject.model.Article;
import fr.noams88.secondlifeobject.repository.ArticleRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ArticleService {

    private final ArticleRepository articleRepository;

    public ArticleService(ArticleRepository articleRepository) {
        this.articleRepository = articleRepository;
    }

    public Article getById(Long id) {
        return articleRepository.findById(id)
                .orElseThrow(() -> new ArticleNotFoundExeption("L'article avec l'id " + id + " n'a pas été trouvé"));
    }

    public List<Article> getAll() {
        return articleRepository.findAll();
    }

    public Article add(Article article) {
        return articleRepository.save(article);
    }

    public Article update(Article article) {
        this.getById(article.getId());
        return articleRepository.save(article);
    }

    public void delete(Long id) {
        this.getById(id);
        articleRepository.deleteById(id);
    }
}
