# Introdução e conceitos básicos do CSS3

### Objetivos

    1. O que são seletores
    2. Conceitos Básicos
    3. Principais seletores CSS
    
### Requesitos Básicos

:white_check_mark: Um editor de texto

:white_check_mark: Um navegador de internet

:white_check_mark: Ter assistido às aulas de introdução ao HTML5

> CSS3 é a terceira mais nova versão das famosas **Cascading Style Sheets**, pela qual se define estilos para um projeto web. Com efeitos de transição, imagem, imagem de fundo/background e outros, pode-se criar estilos únicos para seus projetos web, alterando diversos aspectos de design no layout da página. [Wikipédia](https://pt.wikipedia.org/wiki/CSS3)

![](https://imgur.com/JXzYFPo.jpg)

* **Seletores** são elementos HTML
* Dentro de um par de chaves {} temos as **declarações**
* Uma **declaração** é formada por uma **propriedade** (color) e um **valor** (blue)

* No exemplo acima, foi criado uma regra CSS que altera vários elementos HTML (**a, p, h1, h3...**) diretamente. Isso significa que **qualquer elemento na nossa página que seja de um desses tipos, terá a mesma aparência**. 

*  Para isso, temos sides mais complexas que determinam **regras** para **elementos do mesmo tipo**. 

* É aí que entram os IDs e Classes

![](https://imgur.com/rlbbrAc.jpg)

Não queremos que o header seja do mesmo tamanho ao longo da página, para isso vamos utilizar IDs e Classes. 

* Seletor que vimos no exemplo anterior, é um seletor de **tipo**, pois ele representa um **elemento HTML**. Já IDs e classes podem representar qualquer tipo de elementos. 

* **ID**: id="" 

    #header {
    
        padding: 10px;
        
    }
    
    * Só pode ser usado uma vez na página
    
* **Classe**: class=""

    .header {
    
        padding: 15px;
        
    }
    
### Exercício 

`Vamos adicionar alguns IDs e Classes no nosso site.` 

    Criamos um novo arquivo (*style.css*)

![](https://imgur.com/H2zNlfK.jpg)

    - Adicionamos um < link > abaixo do title, com novos atributos;
    - Nosso h1 irá receber o id=""
    - H2 em diante irá receber class=""

![](https://imgur.com/cp4ZT7B.jpg)

    Agora vamos para pasta *style.css* e começamos a adicionar **regras** para cada **elemento**
    
    * CTRL+S para salvar em ambos os arquivos
    
 ![](https://imgur.com/cz9W1Fx.jpg)
 
#### RESULTADO 

Alteramos as cores e as fontes do título e subtítulos.

![](https://imgur.com/KMHHfu4.jpg)

