# Agenda2

# Execução:

Eclipse:<br />
Importar o projeto como “Projeto Maven”; 
Executar o método “main” da classe “AgendaApplication.java”;


OBS: O Spring Boot (utilizado no projeto) possui um tomcat embutido (Não precisamos ter um tomcat instalado para executar), foi configurado para rodar na porta 8090.

OU

Maven:<br />
mvn clean install spring-boot:run

OBS: Plugin do maven deve está instalado e o comando deverá ser executado na pasta do projeto (Agenda2).

Contexto:<br />
http://localhost:8090/index.html


# Tecnologias:
Back-end:<br />
Spring Boot<br />
Spring MVC<br />
Spring Data JPA<br />
Maven<br />
DevTools<br />
H2 <br />


Front-end:<br />
Bootstrap<br />
AngularJS<br />

OBS: H2 é um banco de dados relacional criado em memória. Foi escolhido para quem for executar não precisar instalar um banco de dados.<br />

# Informações:

Backend fornece as informações do banco de dados atraves de Rest (Formato JSON). No Frontend o AngularJS é responsável por pegar as informações e pela lógica.<br />

OBS: Todo o frontend está no pacote 'src/main/resources/static'.
