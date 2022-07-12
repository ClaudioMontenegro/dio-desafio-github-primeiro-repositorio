import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Book } from "./model/Book";

@Injectable()

export class BooksService
{
    private url = 'https://sheet.best/api/sheets/81a5dc8e-8057-4789-8761-39888cea5906';

    httpOption = {
        Headers: new HttpHeaders({'content-type': 'application/json'})
    }
    constructor(private http:HttpClient){}

    getBook(){

        return this.http.get(this.url)
    }
}