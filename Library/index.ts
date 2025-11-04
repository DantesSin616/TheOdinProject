const myLibrary = [
    
];


function Book(this:any, author:string, title:string, year:number) {

    if(!new.target){
        throw Error("Must have the 'new' operator to call the constructor");
    };
 
    this.author = author;
    this.title = title;
    this.year = year;
};


function addToMyLibrary() {

};
