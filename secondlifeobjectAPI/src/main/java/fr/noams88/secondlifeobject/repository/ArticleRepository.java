package fr.noams88.secondlifeobject.repository;

import fr.noams88.secondlifeobject.model.Article;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ArticleRepository extends JpaRepository<Article, Long> {

}
