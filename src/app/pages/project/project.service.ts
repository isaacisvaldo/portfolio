import { Injectable, Signal, computed, inject, signal } from '@angular/core';
import { map, tap } from 'rxjs';
import { ProjectSchema } from '@data/schema/project.schema';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
export interface ProjectState {
  projects: ProjectSchema[];
}
@Injectable({providedIn: 'root'})
export class ProjectService {
  private http = inject(HttpClient)
  private jsonUrl = `${environment.url}/assets/json/projects.json`;
  // private jsonUrl = `http://localhost:4200/assets/json/projects.json`;

  public state = signal<ProjectState>({ projects: []});
  public projects: Signal<ProjectSchema[]> = computed(() => this.state().projects);
  public featuredProjects: Signal<ProjectSchema[]> = computed(() => this.state().projects?.filter(p => p.featured)
        .map((p, index) => {return {...p, toRight: (index + 1) % 2 == 0}}))

  public otherProjects: Signal<ProjectSchema[]> = computed(() => this.state().projects?.filter((p: any) => !p.featured))

  constructor() {
    this.getAll();
  }
  getAll():any {
    const data = {
      data: [
        {
          id: 1,
          attributes: {
            title: "Portfolio Website",
            description: "My personal portfolio website built with HTML, CSS, and JavaScript.",
            featured: true,
            tools: {
              data: [
                { id: 1, attributes: { name: "HTML" } },
                { id: 2, attributes: { name: "CSS" } },
                { id: 3, attributes: { name: "JavaScript" } }
              ]
            },
            images: { data: null },
            links: {
              website: "https://myportfolio.com",
              playstore: null,
              github: "https://github.com/myusername/portfolio",
              appstore: null
            },
            picture: {
              data: {
                attributes: {
                  formats: {
                    thumbnail: {
                      url: "https://example.com/portfolio_thumbnail.png"
                    }
                  }
                }
              }
            }
          }
        },
        {
          id: 2,
          attributes: {
            title: "Dating Website App",
            description: "Dating website written in .NET Core and Angular",
            featured: null,
            tools: {
              data: [
                { id: 10, attributes: { name: ".NET Core" } },
                { id: 12, attributes: { name: "Angular" } },
                { id: 19, attributes: { name: "Bootstrap" } },
                { id: 25, attributes: { name: "SQLite" } }
              ]
            },
            images: { data: null },
            links: {
              website: null,
              playstore: null,
              github: "https://bitbucket.org/marckevinflores/datingapp",
              appstore: null
            },
            picture: {
              data: {
                attributes: {
                  formats: {
                    thumbnail: {
                     // url: "https://d2jdz9u7zioman.cloudfront.net/blogs/thumbnail_love_7390600_f47bb27299.png"
                    }
                  }
                }
              }
            }
          }
        },
        {
          id: 3,
          attributes: {
            title: "E-Commerce Platform",
            description: "E-commerce platform built with React and Node.js",
            featured: true,
            tools: {
              data: [
               // { id: 15, attributes: { name: "React" } },
              //  { id: 20, attributes: { name: "Node.js" } },
               // { id: 22, attributes: { name: "MongoDB" } },
                { id: 28, attributes: { name: "Express" } }
              ]
            },
            images: { data: null },
            links: {
              website: "https://example.com",
              playstore: null,
              github: "https://github.com/example/ecommerce-platform",
              appstore: null
            },
            picture: {
              data: {
                attributes: {
                  formats: {
                    thumbnail: {
                      url: "https://d2jdz9u7zioman.cloudfront.net/blogs/ecommerce_thumbnail_1234.png"
                    }
                  }
                }
              }
            }
          }
        },
        {
          id: 4,
          attributes: {
            title: "Task Management Tool",
            description: "Task management tool using Vue.js and Firebase",
            featured: null,
            tools: {
              data: [
                { id: 16, attributes: { name: "Vue.js" } },
                { id: 23, attributes: { name: "Firebase" } },
                { id: 27, attributes: { name: "Tailwind CSS" } }
              ]
            },
            images: { data: null },
            links: {
              website: "https://example-taskmanager.com",
              playstore: null,
              github: "https://github.com/example/task-manager",
              appstore: null
            },
            picture: {
              data: {
                attributes: {
                  formats: {
                    thumbnail: {
                      url: "https://d2jdz9u7zioman.cloudfront.net/blogs/taskmanager_thumbnail_5678.png"
                    }
                  }
                }
              }
            }
          }
        },
        {
          id: 5,
          attributes: {
            title: "Weather App",
            description: "A weather forecasting application built with React Native.",
            featured: null,
            tools: {
              data: [
                { id: 14, attributes: { name: "React Native" } },
                { id: 17, attributes: { name: "Axios" } },
                { id: 18, attributes: { name: "OpenWeatherMap API" } }
              ]
            },
            images: { data: null },
            links: {
              website: null,
              playstore: "https://play.google.com/store/apps/details?id=com.weatherapp",
              github: "https://github.com/example/weather-app",
              appstore: null
            },
            picture: {
              data: {
                attributes: {
                  formats: {
                    thumbnail: {
                      url: "https://d2jdz9u7zioman.cloudfront.net/blogs/weatherapp_thumbnail_91011.png"
                    }
                  }
                }
              }
            }
          }
        }
      ]
    };
    
  
    const projects = data.data?.map((item: any) => {
      const { thumbnail } = item.attributes.picture.data.attributes.formats;
      const { website, playstore, appstore, github } = item.attributes.links;
      const images = item.attributes.images;
      return {
        id: item.id,
        title: item.attributes.title,
        description: item.attributes.description,
        thumbnail: thumbnail.url,
        links: {
          website,
          playstore,
          appstore,
          github
        },
        featured: item.attributes.featured,
        tools: item.attributes.tools.data?.map((t: any) => t.attributes.name),
        image: images?.data ? images.data[0].attributes.formats.large.url : null
      };
    });
  
    this.state.update(state => ({ ...state, projects }));
  }
  

}
