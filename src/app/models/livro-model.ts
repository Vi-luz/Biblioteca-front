export class LivroModel {
    id!: number;
    titulo!: string;
    autor!: string;
    editora!: string;
    capa!: string;
    
    constructor(id: number, titulo: string, autor: string, editora: string,capa: string) {
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.editora = editora;
        this.capa = capa;
    }
}



