# Flex

    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fundamentos flex</title>

    <style>
        .flex-container{
            display: flex;
            max-width: 500px;
            border: 1px solid black;
            background-color: yellow;
        }

        .items{
            background-color: blue;
            color: white;
            text-align: center;
            font-size: 24px;
            margin: 5px;

        }

        .flex1{
            flex: 1;
            /* grow= 1, shrink = 1, basis = 0 */
        }

        .width{
            width: 200px;
            /* min-width: 250px; */
        }

        .flex2{
            flex: 2;
            /* grow = 2, shrink = 1, basis = 0 */
        }

    </style>
    </head>
    <body>
    <p>flex: 1</p>
    <div class="flex-container">
        <div class="items flex1">A</div>
        <div class="items flex1">ATCG</div>
        <div class="items flex1">GCGC</div>
        <div class="items flex1">AATT</div>
        <div class="items flex1">C</div>
    </div>

    <p>flex: mix</p>
    <div class="flex-container">
        <div class="items flex2">A</div>
        <div class="items flex1">ATCG</div>
        <div class="items flex1">GCGC</div>
        <div class="items flex2">AATT</div>
        <div class="items flex1">C</div>
    </div>

    <p>width ignored -> basis = 0</p>
    <div class="flex-container">
        <div class="items flex1 width">A</div>
        <div class="items flex1 width">ATCG</div>
        <div class="items flex1 width">GCGC</div>
        <div class="items flex1 width">AATT</div>
        <div class="items flex1 width">C</div>
    </div>
    </body>
    </html>
    
![](https://imgur.com/3HDi7wB.jpg)

