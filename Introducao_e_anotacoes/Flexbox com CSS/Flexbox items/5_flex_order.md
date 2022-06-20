# Order

## Prática

    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fundamentos - order</title>

    <style>
        .flex-container{
            display: flex;
            max-width: 350px;
            border: 1px solid black;
            margin-bottom: 20px;
            margin: 5px;
        }

        .items{
            flex:1;
            background: red;
            color: aliceblue;
            text-align: center;
            font-size: 24px;
            margin: 5px;
             
            
        }

        .o1{
            order: 1;
        }

        .o2{
            order: 2;
        }

        .o3{
            order: 3;
        }

        .o4{
            order: 4;
        }

        .o5{
            order: 5;
        }

        .column{
            flex-direction: column;
        }
    </style>
    </head>
    <body>
    <h1>row</h1>
    <p>order: 0</p>
    <div class="flex-container">
        <div class="items">1</div>
        <div class="items">2</div>
        <div class="items">3</div>
        <div class="items">4</div>
        <div class="items">5</div>
    </div>

    <p>order: different</p>
    <div class="flex-container">
        <div class="items o4">1</div>
        <div class="items o5">2</div>
        <div class="items o3">3</div>
        <div class="items o2">4</div>
        <div class="items o1">5</div>
    </div>

    <h1>column</h1>

    <p>order: 0 + column</p>
    <div class="flex-container column">
        <div class="items">1</div>
        <div class="items">2</div>
        <div class="items">3</div>
        <div class="items">4</div>
        <div class="items">5</div>
    </div>

    <p>order: different + column</p>
    <div class="flex-container column">
        <div class="items o4">1</div>
        <div class="items o5">2</div>
        <div class="items o3">3</div>
        <div class="items o2">4</div>
        <div class="items o1">5</div>
    </div>
    </body>
    </html>
 
 
 ## Resultado
 
 
![](https://imgur.com/2FcHjN4.jpg)