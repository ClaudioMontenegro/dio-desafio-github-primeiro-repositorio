# Justify content

    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fundamentos - justify-content</title>
    <style>
        .container{
            max-width: 400px;
            border: 1px solid black;
            margin: 0;
            display: flex;
            margin-bottom: 10px;
        }

        .item{
            background-color: blueviolet;
            margin: 5px;
            text-align: center;
            color: white;
        }

        .flex-start{
            justify-content: flex-start;
        }

        .flex-end{
            justify-content: flex-end;
        }

        .center{
            justify-content: center;
        }

        .space-between{
            justify-content: space-between;
        }

        .space-around{
            justify-content: space-around;
        }
        
        .column{
            flex-direction: column;
            height: 200px;
        }
    </style>
    </head>
    <body>

    <h1>justify-content with row </h1>

    <h2>flex-start</h2>

    <section class="container flex-start">
        <div class="item">1</div>
        <div class="item">item 2</div>
        <div class="item">outro item</div>

    </section>

    <h2>flex-end</h2>
    <section class="container flex-end">
        <div class="item">1</div>
        <div class="item">item 2</div>
        <div class="item">outro item</div>

    </section>

    <h2>center</h2>
    <section class="container center">
        <div class="item">1</div>
        <div class="item">item 2</div>
        <div class="item">outro item</div>
        <div class="item">4</div>
        <div class="item">five</div>
    </section>

    <h2>space-between</h2>
    <section class="container space-between">
        <div class="item">1</div>
        <div class="item">item 2</div>
        <div class="item">outro item</div>
        <div class="item">4</div>
        <div class="item">five</div>

    </section>

    <h2>space-around</h2>
    <section class="container space-around">
        <div class="item">1</div>
        <div class="item">item 2</div>
        <div class="item">outro item</div>
        <div class="item">4</div>
        <div class="item">five</div>

    </section>

    <h1>justify-content with column </h1>

    <h2>flex-start</h2>

    <section class="container flex-start column">
        <div class="item">1</div>
        <div class="item">item 2</div>
        <div class="item">outro item</div>

    </section>

    <h2>flex-end</h2>
    <section class="container flex-end column">
        <div class="item">1</div>
        <div class="item">item 2</div>
        <div class="item">outro item</div>

    </section>

    <h2>center</h2>
    <section class="container center column">
        <div class="item">1</div>
        <div class="item">item 2</div>
        <div class="item">outro item</div>
        <div class="item">4</div>
        <div class="item">five</div>
    </section>

    <h2>space-between</h2>
    <section class="container space-between column">
        <div class="item">1</div>
        <div class="item">item 2</div>
        <div class="item">outro item</div>
        <div class="item">4</div>
        <div class="item">five</div>

    </section>

    <h2>space-around</h2>
    <section class="container space-around column">
        <div class="item">1</div>
        <div class="item">item 2</div>
        <div class="item">outro item</div>
        <div class="item">4</div>
        <div class="item">five</div>

    </section>

    </body>
    </html>

![](https://imgur.com/HYNTEW3.jpg)

![](https://imgur.com/rzQpQNr.jpg)


