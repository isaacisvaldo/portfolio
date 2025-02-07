import { Injectable, Signal, computed, inject, signal } from '@angular/core';
import { tap } from 'rxjs';
import { LanguageTool } from '@pages/home/components/language-tools/language-tool.interface';
import { environment } from '@env/environment';
import { HttpClient } from '@angular/common/http';
export interface LanguageToolState {
  data: LanguageTool[];
}

@Injectable({
  providedIn: 'root',
})
export class LanguageToolService {
  private http = inject(HttpClient)
  constructor() {
    this.getAll();
  }
  private jsonUrl = `${environment.url}/assets/json/language-tools.json`;
  // private jsonUrl = `http://localhost:4200/assets/json/language-tools.json`;

  public state = signal<LanguageToolState>({ data: [] });
  public languageTools: Signal<LanguageTool[]> = computed(
    () => this.state().data
  );

  getAll(): any {
  return [
    { "name": "HTML", "url": "https://en.wikipedia.org/wiki/HTML" },
    { "name": "CSS", "url": "https://en.wikipedia.org/wiki/CSS" },
    { "name": "JavaScript", "url": "https://en.wikipedia.org/wiki/JavaScript" },
    { "name": "TypeScript", "url": "https://www.typescriptlang.org/" },
    { "name": "PHP", "url": "https://www.php.net/" },
    { "name": "Node JS", "url": "https://nodejs.org/en/about" },
    { "name": "Laravel", "url": "https://laravel.com/" },
    { "name": "Angular", "url": "https://angular.dev/" },
    { "name": "React", "url": "https://react.dev/" },
    { "name": "Bootstrap", "url": "https://getbootstrap.com/" },
    { "name": "Tailwind CSS", "url": "https://tailwindcss.com/" },
    { "name": "Express JS", "url": "https://expressjs.com/" },
    { "name": "Socket.io", "url": "https://socket.io/" },
    { "name": "Git", "url": "https://git-scm.com/" },
    { "name": "MySQL", "url": "https://www.mysql.com/" },
    { "name": "SQLite", "url": "https://www.sqlite.org/index.html" },
    { "name": "MongoDB", "url": "https://www.mongodb.com/" },
    { "name": "Firebase", "url": "https://firebase.google.com/" },
    { "name": "Jest", "url": "https://jestjs.io/" },
   
  ];

  }
  getAllInWork(): any {
    return [
      { "name": "HTML", "url": "https://en.wikipedia.org/wiki/HTML" },
      { "name": "CSS", "url": "https://en.wikipedia.org/wiki/CSS" },
      { "name": "JavaScript", "url": "https://en.wikipedia.org/wiki/JavaScript" },
      { "name": "TypeScript", "url": "https://www.typescriptlang.org/" },
      
      { "name": "GitLab", "url": "https://images.ctfassets.net/xz1dnu24egyd/3FbNmZRES38q2Sk2EcoT7a/a290dc207a67cf779fc7c2456b177e9f/press-kit-icon.svg" },
      { "name": "MySQL", "url": "https://www.mysql.com/" },
      { "name": "SQLite", "url": "https://www.sqlite.org/index.html" },
      { "name": "MongoDB", "url": "https://www.mongodb.com/" },
      { "name": "PHP", "url": "https://www.php.net/" },
      { "name": "Node JS", "url": "https://nodejs.org/en/about" },

      { "name": "Laravel", "url": "https://laravel.com/" },
      { "name": "Angular", "url": "https://angular.dev/" },
  
      { "name": "Bootstrap", "url": "https://getbootstrap.com/" },
      { "name": "Tailwind CSS", "url": "https://tailwindcss.com/" },
      { "name": "Express JS", "url": "https://expressjs.com/" },
      { "name": "Socket.io", "url": "https://socket.io/" },
      { "name": "Git", "url": "https://git-scm.com/" },
      { "name": "MySQL", "url": "https://www.mysql.com/" },
      { "name": "SQLite", "url": "https://www.sqlite.org/index.html" },
      { "name": "MongoDB", "url": "https://www.mongodb.com/" },
   
   
      { "name": "Jest", "url": "https://jestjs.io/" },
     
    ];
  
    }
}
