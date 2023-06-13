import { HttpClient, HttpClientModule } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbmoviesService {
HttpClient= inject(HttpClient);
  constructor() { }

  getMoviesNowPlaying(){
    return this.HttpClient.get('https://api.themoviedb.org/3/movie/now_playing?api_key=43bb95cae941badc90476b9f10f04134&language=en-US&page=1');
  }

  getGenero(){
    return this.HttpClient.get('https://api.themoviedb.org/3/genre/movie/list?api_key=28961704ecd0335c73f54be68b444d4c');
  }
DetallePelicula(id:number){

return this.HttpClient.get('https://api.themoviedb.org/3/movie/'+id+'?api_key=28961704ecd0335c73f54be68b444d4c');
}
Buscar(query:any){
  return this.HttpClient.get('https://api.themoviedb.org/3/search/movie?api_key=28961704ecd0335c73f54be68b444d4c&language=es-ES&query='+query+'&page=1&include_adult=true');
}
}
