# Align content

## Prática

    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fundamentos - Align content</title>

    <style>
        .conteiner{
            height: 400px;
            max-width: 300px;
            margin: 0 auto;
            display: flex;
            flex-wrap: wrap;
            border: 1px solid black;
            
        }

        .item{
            background-color: darkgoldenrod;
            padding: 0 5px;
            margin: 5px;
            flex: 1;
            text-align: center;
            color: black;
            border: 2px solid black;

        }

        .stretch{
            align-content: stretch ;
        }

        .center{
            align-content: center;
        }

        .flex-start{
            align-content: flex-start;
        }

        .flex-end{
            align-content: flex-end;
        }

        .space-between{
            align-content: space-between;
        }

        .space-around{
            align-content: space-around;
        }

    </style>
    </head>
    <body>
    <p>stretch</p>
    <div class="conteiner stretch">
        <div class="item">Lorem ipsum dolor sit amet</div>
        <div class="item">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</div>
        <div class="item">t enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip </div>
        <div class="item">m dolore eu</div>
        <div class="item">ugiat nulla pariatur.</div>
        <div class="item">Excepteur sint occaecat cupidatat</div>
        <div class="item">non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
    </div>

    <p>center</p>
    <div class="conteiner center">
        <div class="item">Lorem ipsum dolor sit amet</div>
        <div class="item">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</div>
        <div class="item">t enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip </div>
        <div class="item">m dolore eu</div>
        <div class="item">ugiat nulla pariatur.</div>
        <div class="item">Excepteur sint occaecat cupidatat</div>
        <div class="item">non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
    </div>

    <p>start</p>
    <div class="conteiner flex-start">
        <div class="item">Lorem ipsum dolor sit amet</div>
        <div class="item">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</div>
        <div class="item">t enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip </div>
        <div class="item">m dolore eu</div>
        <div class="item">ugiat nulla pariatur.</div>
        <div class="item">Excepteur sint occaecat cupidatat</div>
        <div class="item">non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
    </div>

    <p>end</p>
    <div class="conteiner flex-end">
        <div class="item">Lorem ipsum dolor sit amet</div>
        <div class="item">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</div>
        <div class="item">t enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip </div>
        <div class="item">m dolore eu</div>
        <div class="item">ugiat nulla pariatur.</div>
        <div class="item">Excepteur sint occaecat cupidatat</div>
        <div class="item">non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
    </div>

    <p>space between</p>
    <div class="conteiner space-between">
        <div class="item">Lorem ipsum dolor sit amet</div>
        <div class="item">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</div>
        <div class="item">t enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip </div>
        <div class="item">m dolore eu</div>
        <div class="item">ugiat nulla pariatur.</div>
        <div class="item">Excepteur sint occaecat cupidatat</div>
        <div class="item">non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
    </div>

    <p>space around</p>
    <div class="conteiner space-around">
        <div class="item">Lorem ipsum dolor sit amet</div>
        <div class="item">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</div>
        <div class="item">t enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip </div>
        <div class="item">m dolore eu</div>
        <div class="item">ugiat nulla pariatur.</div>
        <div class="item">Excepteur sint occaecat cupidatat</div>
        <div class="item">non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
    </div>
    </body>
    </html>





![](https://imgur.com/OuXzl30.jpg)
![](https://imgur.com/Z5a5paS.jpg)
![](https://imgur.com/LNXCkVl.jpg)