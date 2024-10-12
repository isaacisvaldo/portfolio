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
    { "name": "C-sharp", "url": "https://en.wikipedia.org/wiki/C_Sharp_(programming_language)" },
    { "name": "JQuery", "url": "https://jquery.com/" },
    { "name": "SASS", "url": "https://sass-lang.com/" },
    { "name": "PHP", "url": "https://www.php.net/" },
    { "name": "Node JS", "url": "https://nodejs.org/en/about" },
    { "name": ".NET Core", "url": "https://en.wikipedia.org/wiki/ASP.NET_Core" },
    { "name": "Laravel", "url": "https://laravel.com/" },
    { "name": "Angular", "url": "https://angular.dev/" },
    { "name": "React", "url": "https://react.dev/" },
    { "name": "Vue", "url": "https://vuejs.org/" },
    { "name": "Ionic", "url": "https://ionic.io/" },
    { "name": "React Native", "url": "https://reactnative.dev/" },
    { "name": "Next JS", "url": "https://nextjs.org/" },
    { "name": "Nuxt JS", "url": "https://nuxt.com/" },
    { "name": "Bootstrap", "url": "https://getbootstrap.com/" },
    { "name": "Tailwind CSS", "url": "https://tailwindcss.com/" },
    { "name": "Express JS", "url": "https://expressjs.com/" },
    { "name": "Socket.io", "url": "https://socket.io/" },
    { "name": "Git", "url": "https://git-scm.com/" },
    { "name": "MySQL", "url": "https://www.mysql.com/" },
    { "name": "SQLite", "url": "https://www.sqlite.org/index.html" },
    { "name": "MongoDB", "url": "https://www.mongodb.com/" },
    { "name": "Redux", "url": "https://redux.js.org/" },
    { "name": "Capacitor", "url": "https://capacitorjs.com/" },
    { "name": "Android Studio", "url": "https://developer.android.com/" },
    { "name": "Xcode", "url": "https://developer.apple.com/xcode/" },
    { "name": "Chakra UI", "url": "https://chakra-ui.com/" },
    { "name": "Firebase", "url": "https://firebase.google.com/" },
    { "name": "Figma", "url": "https://www.figma.com/" },
    { "name": "Jest", "url": "https://jestjs.io/" },
    { "name": "Strapi", "url": "https://strapi.io/" },
  ];

  }
}
