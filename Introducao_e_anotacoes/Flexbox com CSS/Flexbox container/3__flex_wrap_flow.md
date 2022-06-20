# Flex wrap e flow

## Flex wrap

![](https://imgur.com/h7RKzwq.jpg)

![](https://imgur.com/00D6r7W.jpg)

![](https://imgur.com/r3tRMW3.jpg)

![](https://imgur.com/m1z0FV8.jpg)

> Problema: **espaçamento**


![](https://imgur.com/wGt2oOv.jpg)

## Prática

    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fundamentos - Flex Wrap</title>

    <style>
        .flex-container{
            display: flex;
            height: 150px;
            border: 2px solid black;
            max-width: 300px;
        }

        .item{
            font-size: 24px;
            height: 50%;
            text-align: center;
            width: 100px;
            line-height: 50px;
            min-width: 100px;


            
        }

        .nowrap{
            flex-wrap: nowrap;
        }

        .wrap{
            flex-wrap: wrap;
        }

        .wrap-reverse{
            flex-wrap: wrap-reverse;
        }

        .blue{
            background-color: blue;
        }

        .green{
            background-color: green;
        }

        .orange{
            background-color: orangered;
        }
    </style>
    </head>

    <body>

    <h1>no wrap</h1>

    <div class="flex-container">
        <div class="item orange">1</div>
        <div class="item green">2</div>
        <div class="item blue">3</div>
        <div class="item blue">4</div>
    </div>

    
    <h1>wrap</h1>

    <div class="flex-container wrap">
        <div class="item green">1</div>
        <div class="item blue">2</div>
        <div class="item orange">3</div>
        <div class="item orange">4</div>
    </div>
    
    <h1>wrap-reverse</h1>

    <div class="flex-container wrap-reverse">
        <div class="item green">1</div>
        <div class="item blue">2</div>
        <div class="item orange">3</div>
        <div class="item orange">4</div>
    </div>

    </body>
    </html>
    
 ![](https://imgur.com/1ElOwKZ.jpg)
 
 ## Column
 
    <style>
        .flex-container{
            display: flex;
            flex-direction: column;
            height: 150px;
            border: 2px solid black;
            max-width: 200px;
        }

        .item{
            font-size: 24px;
            height: auto;
            text-align: center;
            width: auto;
            line-height: 50px;
            min-width: 100px;
            

![](https://imgur.com/YdUmAcM.jpg)

# Flex flow

    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fundamentos - Flex flow</title>

    <style>
        .flex-container{
            display: flex;
            border: 1px solid black;
            max-width: 500px;
            margin-bottom: 10px;
        }
        .default{
            flex-flow: row nowrap;
        }

        .wrap{
            flex-flow: row wrap;
        }

        .wrap-reverse{
            flex-flow: row wrap-reverse;
        }
        
        .r-nowrap{
            flex-flow: row-reverse nowrap;
        }

        .r-wrap{
            flex-flow: row-reverse wrap;
        }

        .rr-rw{
            flex-flow: row-reverse wrap-reverse;
        }
        
        .column-rw {
            flex-flow: column wrap-reverse;
            background-color: darkslategray;
        }
        
        .item{
            background-color: blueviolet;
            margin: 5px;
            color: white;
            text-align: center;
            width: 100px;
            height: 50px;
            line-height: 50px;
        }


        </style>
    </head>
    <body>
        <h1> default: row nowrap</h1>
    
    <div class="flex-container default">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
        <div class="item">4</div>
        <div class="item">5</div>
    </div>

    <h1> wrap </h1>
    <div class="flex-container wrap">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
        <div class="item">4</div>
        <div class="item">5</div>
        <div class="item">6</div>
    </div>

        <h1> wrap-reverse </h1>
    <div class="flex-container wrap-reverse">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
        <div class="item">4</div>
        <div class="item">5</div>
        <div class="item">6</div>
    </div>

     <h1> row-reverse nowrap </h1>
    <div class="flex-container r-nowrap">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
        <div class="item">4</div>
        <div class="item">5</div>
        <div class="item">6</div>
    </div>

    <h1> row-reverse wrap </h1>
    <div class="flex-container r-wrap">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
        <div class="item">4</div>
        <div class="item">5</div>
        <div class="item">6</div>
    </div>

    <h1> row-reverse wrap-reverse </h1>
    <div class="flex-container rr-rw">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
        <div class="item">4</div>
        <div class="item">5</div>
        <div class="item">6</div>
    </div>
    
        <h1> column wrap-reverse </h1>
    <div class="flex-container column-rw">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
        <div class="item">4</div>
        <div class="item">5</div>
        <div class="item">6</div>
    </div>
    </body>
    </html>
    
![](https://imgur.com/zPi90uJ.jpg)

