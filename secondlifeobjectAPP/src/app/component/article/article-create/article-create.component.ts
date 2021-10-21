import { Component, OnInit } from '@angular/core';
import {Article} from '../../../../model/article';
import {ArticleService} from '../../../../service/article.service';
import {AuthService} from '../../../../service/auth/auth.service';

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.css']
})
export class ArticleCreateComponent implements OnInit {
  article = new Article();
  fileName = '';

  constructor(private authService: AuthService, private articleService: ArticleService) { }

  ngOnInit(): void {
    this.authService.getUser().subscribe(
      data => {
        this.article.user = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  onSubmit(): void {
    this.articleService.add(this.article).subscribe(
      data => {
      },
      error => {
        console.log(error);
      }
    );
  }

  // onFileSelected(): void {
  // //   const file: File = event.target.files[0];
  // //
  // //   if (file) {
  // //     this.fileName = file.name;
  // //     const formData = new FormData();
  // //     formData.append("thumbnail", file);
  // //     const upload$ = this.http.post("/api/thumbnail-upload", formData);
  // //     upload$.subscribe();
  // //   }
  // }
}
