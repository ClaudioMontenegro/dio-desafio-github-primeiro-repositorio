# Flex grow

    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fundamentos - flex grow</title>

    <style>
        .flex-container{
            display: flex;
            border: 2px solid black;
            max-width: 300px;
            margin-bottom: 20px;
            justify-content: center; #apenas os items que tem fg-0

        }

        .item{
            background-color: orangered;
            margin: 5px;
            padding: 10px;
            text-align: center;
            color: blue;
        }

        .fg-0{
            flex-grow: 0;
        }

        .fg-1{
            flex-grow: 1;
        }

        .fg-2{
            flex-grow: 2;
        }

        .fg-3{
            flex-grow: 3;
        }
    </style>
    </head>
    <body>
    <p>flex-grow: 0</p>
    <div class="flex-container">
        <div class="item fg-0">A</div>
        <div class="item fg-0">B</div>
        <div class="item fg-0">C</div>
        <div class="item fg-0">D</div>
    </div>
    <p>flex-grow: 1</p>
    <div class="flex-container">
        <div class="item fg-1">A</div>
        <div class="item fg-2">B</div>
        <div class="item fg-3">C</div>
        <div class="item fg-3">D</div>
    </div>
    <p>flex-grow: alternating</p>
    <div class="flex-container">
        <div class="item fg-1">AAAAAAA</div>
        <div class="item fg-2">BCC</div>
        <div class="item fg-2">CDD</div>
        <div class="item fg-3">DDDD</div>
    </div>
    <p>flex-grow: alternating</p>
    <div class="flex-container">
        <div class="item fg-3">AAA</div>
        <div class="item fg-1">BBBB</div>
        <div class="item fg-2">CCCCC</div>
        <div class="item fg-0">DdDD</div>
    </div>
    </body>
    </html>
   
  ![](https://imgur.com/5LHDWsN.jpg)
  
  