# Align items

## Prática

    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fundamentos - align items </title>

    <style>
        .container{
            max-width: 350px;
            border: 1px solid black;
            display: flex;
        }


        .item{
            background-color: darkolivegreen;
            margin: 5px;
            color: darksalmon;
            text-align: center;
            flex: 1;

        }

        .flex{
            flex: 1;
        }

        .center{
            align-items: center;
        }

        .stretch{
            align-items: stretch;
        }

        .start{
            align-items: flex-start;
        }
        
        .end{
            align-items: flex-end;
        }

        .baseline{
            align-items: baseline;
        }

        .column{
            flex-direction: column;
        }

        .central{
            height: 500px;
            justify-content: center;
           
        }

        .central .item{
            flex: 0;
            padding: 20px;
        }
    </style>

    </head>
    <body>
    <h1>line</h1>

    <p>center</p>

     <section class="container center flex">
    <div class="item">item 1</div>
    <div class="item">La dolce vita</div>
    <div class="item">FROOOOOT</div>
     </section>

     <p>stretch</p>
    
    <section class="container stretch">
        <div class="item">item 1</div>
     <div class="item">Living La dolce vitaaaaaa</div>
     <div class="item">FROOOOOT</div>
     </section>

     <p>flex-start</p>

     <section class="container start">
    <div class="item">item 1</div>
    <div class="item">Living La dolce vitaaaaaa</div>
    <div class="item">FROOOOOT</div>
     </section>

     <p>flex-end</p>

     <section class="container end">
    <div class="item">item 1</div>
    <div class="item">Living La dolce vitaaaaaa</div>
    <div class="item">FROOOOOT</div>
     </section>
    
     <p>baseline</p>

     <section class="container baseline">
        <div class="item">item 1</div>
    <div class="item">Living La dolce vitaaaaaa</div>
    <div class="item">FROOOOOT</div>
    </section>

     <h1>Column</h1>
     <p>center</p>

     <section class="container center flex column">
    <div class="item">item 1</div>
    <div class="item">La dolce vita</div>
    <div class="item">FROOOOOT</div>
     </section>

     <p>stretch</p>

     <section class="container stretch column">
    <div class="item">item 1</div>
    <div class="item">Living La dolce vitaaaaaa</div>
    <div class="item">FROOOOOT</div>
     </section>

     <p>flex-start</p>
    
     <section class="container start column">
    <div class="item">item 1</div>
    <div class="item">Living La dolce vitaaaaaa</div>
    <div class="item">FROOOOOT</div>
     </section>

     <p>flex-end</p>

     <section class="container end column">
    <div class="item">item 1</div>
    <div class="item">Living La dolce vitaaaaaa</div>
    <div class="item">FROOOOOT</div>
     </section>

     <p>baseline</p>

     <section class="container baseline column">
    <div class="item">item 1</div>
    <div class="item">Living La dolce vitaaaaaa</div>
    <div class="item">FROOOOOT</div>
     </section>

     <p>alinhamento central à tela</p>
     <section class="container central center">
    <div class="item">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
     </section>

    </body>
    </html>
 
 ## Resultado
 
 ![](https://imgur.com/2UCTkNk.jpg)
 
 ![](https://imgur.com/eQyJo1g.jpg)
 
 ![](https://imgur.com/HmgZ2EO.jpg)
 
 