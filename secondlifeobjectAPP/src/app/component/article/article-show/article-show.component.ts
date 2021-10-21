import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../../../../service/article.service';
import {Article} from '../../../../model/article';

@Component({
  selector: 'app-article-show',
  templateUrl: './article-show.component.html',
  styleUrls: ['./article-show.component.css']
})
export class ArticleShowComponent implements OnInit {
  articles: Article[];

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articleService.getAll().subscribe(
      data => {
        this.articles = data;
        console.log(this.articles);
      },
      error => {
        console.log(error);
      }
    );
  }
}
