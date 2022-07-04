# Introdução a Angular


> ng serve // iniciar o projeto

package.json:
	Todas as dependências da nossa aplicação;
	Irão aparecer a medida que forem adicionadas;
	"scripts"
	
angular.json:
	Informações globais da nossa aplicação;
	Arquivo que configura várias prop globais, também define qual arquivo que iremos começar nossa aplicação
	assets (src), styles, scripts;
	index: página da nossa aplicação (Single Page Application SPA). Qual página base da nossa aplicação;
	main: responsável bootstrap da nossa aplicação (inicialização da nossa aplicação - main.ts);
	
node_modules:
	Todas as dependências da nossa aplicação;
	Agrupar todas as dependencias

src (source - principal):
	Index, main...
	main.ts será responsável por inicializar nossa aplicação (hooker), ele que faz o bootstrap, espera receber um modulo raiz (AppModule);
	style.css/ qualquer estilo que adicionarmos ao nosso componente, será fechado neste componente (não irá fugir);
	assets:	
	app: NgModule - leitura do componente pai (responsavel por envelopar por todos os nossos compontentes, direta ou indiretamente) HTML raiz  
	
PORTA PADRÃO: http://localhost:4200/

Por padrão, o angular tem um MODULO

Modulo: bolsa/limitador de contexto, todos os que vem dentro dele, correspondem aquele contexto 
Ex: 
uma casa (modulo pai): os cômodos (modulos)
os componentes adicionados ao modulo são o que darão a vida a este modulo

@Component({
  selector: 'app-root', //tag HTML (index)
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

// interpolação

app.component.ts (name: string = 'John') => app.component.html ({{ name }})


mais recursos: 

react fortacele o javascript
angular fortacele o HTML

one way / two way

ngModel = quando quero relacionar o input com a variável 

one way (via unica - exibir ) 
<input [ngModel]="name" name="name">

two way (via dupla - exibir/alterar): a medida que alterar as propriedades vai atualizando essa proriedade onde ela estiver sendo usada nesse componente

<input [(ngModel)]="name" name="name">

ngModule pertecence a formulários:
quero fazer um binding para meu inputde de alguma propriedade do nosso componente

nome da propriedade / name (padrão de formulário)




no app.module.ts

import { FormsModule } from '@angular/forms';

o Angular é modularizado 

- ajuda a diminuir o tamanho e deixar nossa aplicação mais leve

Criar nossos próprios componentes - Proposta do curso.

Na pasta 'app', crie uma pasta 'course'
	crie o arquivo "course-list.component.ts"
		- course-list
		- component (será um component)	
		- .ts (tipo do arquivo)

@Component ({
    selector: 'app-course-list' // importante colocar nome que faça referencia ao nosso projeto, se não podemos nos confundir com outra tag HTML
})

app: referencia a algum componente que esteja em nossa aplicação

toda vez que criarmos um componente, precisamos declarar ele no modulo que corresponde a ele (@declarations - app.module.ts)


> npm install bootstrap 

(estará em node_modules)

style.css: @import '-bootstrap/dist/css/bootstrap-utilities.min.css'

 *ngfor="" // syntax do angular para interar os objetos em HTML

recapitulando:
- criamos um novo componente;
- criamos uma classe (os valores do nosso curso);
- criamos um array []
- metodo de inicialização ngOnInit(): void

- como exibir nossa lista no nosso tamplate (HTML) usando *ngFor

- criar uma classe no typescript (tipar cada campo);

- quando criarmos um componente precisamos declarar esse componente no AppModule (@ngModule - declarations: CoursesListComponent

- importar informações de um modulo externo (bootstrap => style.css))

< td>< img [src]="course.imageUrl" width="40" height="40" >< /td >

quando quisermos mesclar um atributo do HTML no angular, precisamos colocar []

- npm install font-awesome (novo layout global no style.css [@import])

 `<app-star [rating]="course.rating"></app-star>`
 
 app-star: tag
 rating: atributo da nossa tag (@Input/sempre colocar em [])

O nome dos arquivos precisam refletir suas utilidades