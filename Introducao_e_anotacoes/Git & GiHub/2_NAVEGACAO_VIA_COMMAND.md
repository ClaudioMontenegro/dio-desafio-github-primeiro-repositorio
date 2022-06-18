# NAVEGAÇÃO VIA COMMAND LINE INTERFACE E INSTALAÇÃO

#### GUI X CLI

•	A graphical user interface (GUI) is an interface through which a user interacts with electronic devices such as computers and smartphones through the use of icons, menus and other visual indicators or representations (graphics). / Em informática, interface gráfica do utilizador ou usuário é um tipo de interface do utilizador que permite a interação com dispositivos digitais por meio de elementos gráficos como ícones e outros indicadores visuais, em contraste a interface de linha de comando.

•	A command-line interface (CLI) is a text-based user interface (UI) used to run programs, manage computer files and interact with the computer. Command-line interfaces are also called command-line user interfaces, console user interfaces and character user interfaces. / Uma interface de linha de comandos, em inglês command-line interface, é um meio de interagir com um programa de computador, onde o utilizador emite comandos para o programa sob a forma de sucessivas linhas de texto.


*Git é um tipo de CLI, porém, hoje em dia existem programas que aplicam a interface gráfica para o Git, tornando o manuseio mais simples. Contudo, iremos usar o método CLI no curso, para interagir mais com linhas de comando.* 

**COMANDOS BÁSICOS que iremos aprender**
  
  ![](https://imgur.com/yXqX25R.jpg)
  
##### WINDOWS x UNIX
 
![](https://imgur.com/KQUpp1f.jpg)

 
 
##### Abrir o prompt de comando 

![](https://imgur.com/NqEaAEZ.jpg)
 

dir = irá listar os diretórios (pastas) dentro da pasta/área que estou inserido (C:\USER)
 

ls = mesma função no linux
 

Como acessar um diretório específico? Utilizando o *change directory* (cd)

> cd /

 
- cd Windows (funciona para os diretórios do Linux também)
 

Para voltar/retroceder no Linux/Windos:

> cd ..

 
Comando para limpar a tela (deixar menos poluído)
- No Windows: cls (clear screen)
- Linux: clear
- CTRL + L

Apenas apagamos as informações na tela, mas ainda continuamos dentro das pastas, podendo listar (dir/ls) e entrar nelas (cd)

No Windows, podemos usar a tecla tab para facilitar encontrar uma pasta.
Exemplo: cd Win... TAB = cd Windows

O Tab complete com base nas pastas que temos dentro desse diretório. 


mkdir = Make directory 
criar pastas 

>  mkdir workspace

(se der tudo certo, o terminal não irá te falar nada... silence success)

 

No linux é da mesma forma, porém, o professor está usando um sistema linux dentro do Windows, então ele precisa de autorização que é dada através do comando sudo

### Criando arquivos dentro do workspace

echo irá refletir/devolver o que você digitou (linux/Windows)
ex: 
> echo hello
hello (output)
agora iremos jogar esse output para uma pasta utilizando >

> echo hello > hello.txt
 

Del (DELETE) para deletar arquivos


del > workspace
 

Se procurar pelo diretório/pasta novamente, ela estará lá, pois só foi deletada os arquivos/repositórios que estão dentro da pasta 
 

Deletou o hello.txt

Para deletar um diretório / pasta

rmdir (REMOVE DIRECTORY – Windows)

> rmdir workspace /S /Q

No linux

> rm -rf workspace/
r = todas as pastas dentro desta pasta irão se deletada
f = force / força e não aparece nenhum aviso

