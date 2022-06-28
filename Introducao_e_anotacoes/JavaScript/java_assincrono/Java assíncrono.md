# Java assíncrono

![](https://imgur.com/Pnyb1rK.jpg)

![](https://imgur.com/pziMEfU.jpg)

![](https://imgur.com/VKdZX28.jpg)

![](https://imgur.com/jUw6rrR.jpg)

![](https://imgur.com/M7OIaFG.jpg)

![](https://imgur.com/gOX6poi.jpg)

## Promise

> Promise é um objeto usado para processamento assíncrono. Um Promise (de "promessa") representa um valor que pode estar disponível agora, no futuro ou nunca.
### Descrição

> Uma Promise representa um proxy para um valor que não é necessariamente conhecido quando a promessa é criada. Isso permite a associação de métodos de tratamento para eventos da ação assíncrona num caso eventual de sucesso ou de falha. Isto permite que métodos assíncronos retornem valores como métodos síncronos: ao invés do valor final, o método assíncrono > retorna uma promessa ao valor em algum momento no futuro.
> 
> Um Promise está em um destes estados:
> 

> pending (pendente): Estado inicial, que não foi realizada nem rejeitada.

> fulfilled (realizada): sucesso na operação.

> rejected (rejeitado):  falha na operação.


> Uma promessa pendente pode se tornar realizada com um valor ou rejeitada por um motivo (erro). Quando um desses estados ocorre, o método then do Promise é chamado, e ele chama o método de tratamento associado ao estado (rejected ou resolved).  Se a promessa foi realizada ou rejeitada quando o método de tratamento correspondente for associado, o método será chamado, desta forma não há uma condição de competição entre uma operação assíncrona e seus manipuladores que estão sendo associados.
> 
> Como os métodos Promise.prototype.then e Promise.prototype.catch  retornam promises, eles podem ser encadeados — uma operação chamada composição.



* **É uma promessa, não sabemos o valor quando recebemos, podendo ser RESOLVIDO ou REJEITADO**

![](https://imgur.com/P2TCW3d.jpg)

1) Pendente
2) Completado
3) Rejeitada

![](https://imgur.com/CSBWTvd.jpg)

parâmetros resolve e reject

![](https://imgur.com/QvgDS7K.jpg)

Caso a promise seja resolvida, await.. Encadeando chamadas com o resultado da promise

![](https://imgur.com/J8f7k60.jpg)
funções assincronas:

=> async é necessário para definir funções assincronas;
=> await criada para lidar com promises (para o código até a promise se resolver);

![](https://imgur.com/K5kykNW.jpg)

![](https://imgur.com/dYySZk5.jpg)

* Uma promise vai retornar outra promise
* você precisa usar o await para receber o resultado da promise

![](https://imgur.com/mvWGbSf.jpg)
* try... catch pode ser usado;

![](https://imgur.com/GEQRF2Q.jpg)

![](https://imgur.com/LPgIJ8j.jpg)

## API
> Uma API (Application Programming Interface) é um conjunto de características e regras existentes em uma aplicação que possibilitam interações com essa através de um software - ao contrário de uma interface de usuário humana. A API pode ser entendida como um simples contrato entre a aplicação que a fornece e outros itens, como outros componentes do software, ou software de terceiros.
> 
> No desenvolvimento Web, uma API é geralmente um conjunto de methods (en-US) padronizados, properties, eventos, e URLs que um desenvolvedor pode usar em seus aplicativos para interagir com componentes do navegador da Web de um usuário ou outro software / hardware no computador do usuário ou sites e serviços de terceiros.
> 
> Exemplos
> A API getUserMedia pode ser usada para capturar áudio e vídeo da webcam de um usuário, que pode ser usada de qualquer maneira que o desenvolvedor goste, por exemplo, gravar vídeo e áudio, transmiti-lo para outro usuário em uma chamada em conferência ou capturar imagens do vídeo.
> A API de geolocalização pode ser usada para recuperar informações de localização de qualquer serviço que o usuário tenha disponível em seu dispositivo (por exemplo, GPS), que pode ser usado em conjunto com as APIs do Google Maps para, por exemplo, traçar a localização do usuário em um mapa personalizado e mostrar a ele que atrações turísticas estão em sua área.
> As APIs do Twitter podem ser usadas para recuperar dados de contas de twitter de um usuário, para por exemplo, exibir seus últimos tweets em uma página da web.
> A API de animações da Web pode ser usada para animar partes de uma página da web - por exemplo, para fazer imagens se movimentarem ou girarem.

![](https://blog.cod3r.com.br/wp-content/uploads/2022/05/como-api-funciona.jpg)

![](https://www.astera.com/wp-content/uploads/2020/01/rest.png)

![](https://imgur.com/Ymo4yP4.jpg)

![](https://imgur.com/aK6ymEA.jpg)

![](https://imgur.com/QgPJGkO.jpg)

![](https://imgur.com/VIaxMqH.jpg)

![](https://imgur.com/ChW2dSz.jpg)

![](https://imgur.com/26U3MYk.jpg)

![](.jpg)

![](.jpg)




