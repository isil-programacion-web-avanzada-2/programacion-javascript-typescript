class Header{

    title: string;

    constructor(title: string){
        this.title = title;
    }


    render(): string{
        console.log("<h1>" + this.title+ "</h1>");
        return "<h1>" + this.title+ "</h1>"
    }

    

}


new Header("Esto es un titulo").render();
