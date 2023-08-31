export class Sofa {
  static idCount: number = 0;
  titulo: string;
  color: string;
  id: number;
  dirImg: string;
  constructor(titulo: string, color: string, dirImg: string) {
    this.titulo = titulo;
    this.color = color;
    this.dirImg = "../../assets/"+dirImg;
    this.id = ++Sofa.idCount;
  }
  toString() {
    return `${this.titulo} - ${this.color}`;
  }
}
