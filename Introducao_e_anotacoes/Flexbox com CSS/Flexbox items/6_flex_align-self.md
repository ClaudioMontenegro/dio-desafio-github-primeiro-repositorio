# Align-self

## Prática

    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fundamentos - align self</title>

    <style>
        .flex-container{
            display: flex;
            max-width: 450px;
            background-color: red;
            margin-bottom: 20px;
            border: 2px solid black;
            
        }


        .items{
            background-color: black;
            color: white;
            font-size: 20px;
            text-align: center;
            margin: 3px;
        }

        .center{
            align-self: center;
        }

        .start{
            align-self: flex-start;
        }

        .end{
            align-self: flex-end ;
        }

        .baseline{
            align-self: baseline;
        }

        .stretch{
            align-self: stretch;
        }

        .auto{
            align-self: auto;
        }

        .align-container{
            align-items: center;
        }

        .column{
            flex-direction: column;
        }
    </style>
    </head>
    <body>

    <h1>align-self: row</h1>
    <p>auto</p>
       <section class="flex-container">
    <div class="items auto">BEY</div>
    <div class="items auto">LADY GAGA</div>
    <div class="items auto"> ARIANA</div>
    <div class="items auto">FLORENCE</div>
    <div class="items auto"> MADONNA </div>
      </section>

     <p>center</p>
      <section class="flex-container">
    <div class="items center">BEY</div>
    <div class="items center">LADY GAGA</div>
    <div class="items center"> ARIANA</div>
    <div class="items center">FLORENCE</div>
    <div class="items center"> MADONNA </div>
     </section>

      <p>start</p>
      <section class="flex-container">
    <div class="items start">BEY</div>
    <div class="items start">LADY GAGA</div>
    <div class="items start"> ARIANA</div>
    <div class="items start">FLORENCE</div>
    <div class="items start"> MADONNA </div>
      </section>

      <p>end</p>
      <section class="flex-container">
    <div class="items end">BEY</div>
    <div class="items end">LADY GAGA</div>
    <div class="items end"> ARIANA</div>
    <div class="items end">FLORENCE</div>
    <div class="items end"> MADONNA </div>
      </section>

      <p>baseline</p>
       <section class="flex-container">
    <div class="items baseline">BEY</div>
    <div class="items baseline">LADY GAGA</div>
    <div class="items baseline"> ARIANA</div>
    <div class="items baseline">FLORENCE</div>
    <div class="items baseline"> MADONNA </div>
      </section>

      <p>stretcht</p>
     <section class="flex-container">
    <div class="items stretch">BEY</div>
    <div class="items stretch">LADY GAGA</div>
    <div class="items stretch"> ARIANA</div>
    <div class="items stretch">FLORENCE</div>
    <div class="items stretch"> MADONNA </div>
      </section>

       <p>align-container</p>
      <section class="flex-container">
    <div class="items align-container">BEY</div>
    <div class="items align-container">LADY GAGA</div>
    <div class="items align-container"> ARIANA</div>
    <div class="items align-container">FLORENCE</div>
    <div class="items align-container"> MADONNA </div>
     </section>

      <p>mix</p>
     <section class="flex-container">
    <div class="items center">BEY</div>
    <div class="items baseline">LADY GAGA</div>
    <div class="items end"> ARIANA</div>
    <div class="items align-container">FLORENCE</div>
    <div class="items start"> MADONNA </div>
     </section>

      <h1>align-self: column</h1>

      <p>mix</p>
     <section class="flex-container column">
    <div class="items center">BEY</div>
    <div class="items baseline">LADY GAGA</div>
    <div class="items end"> ARIANA</div>
    <div class="items align-container">FLORENCE</div>
    <div class="items start"> MADONNA </div>
    </section>
    </body>
    </html>

## Resultado

![](https://imgur.com/7PQnkYC.jpg)

![](https://imgur.com/OELT4S1.jpg)

