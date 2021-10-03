package fr.noams88.secondlifeobject.exeption;

public class ArticleNotFoundExeption extends RuntimeException {

    public ArticleNotFoundExeption(String message) {
        super(message);
    }
}
