export class Rutas{
  urlbase: string = "http://localhost:8080/api/";
  urlimage: string = "http://dimmexico.co/pics_sponsors/";
  constructor(){}

  imageGet(){
    return this.urlimage;
  }



  user(page,limit){
    if(page || limit){
      return this.urlbase+ "users/?page={0}".replace("{0}", page) + "&limit={0}".replace("{0}", limit);
    }
    return this.urlbase+ "users/";
  }

  userCount(){
    return this.urlbase+ "users/count";
  }






}
