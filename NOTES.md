# Notes | Anotações

## PT-BR

### 1. Design de software

> Qual é o primeiro passo para se desenvolver um software?

1. Processo de design de software
  * Arquitetar as regras de negócio
  * Quais serão os casos de uso
2. Especificação de requisitos (definição de escopo)
  * O que o software deve fazer
  * O que o software não deve fazer
  * Requisitos funcionais: funcionalidades da aplicação
  * Requisitos não funcionais: ferramentas, contexto, desempenho, segurança, usabilidade, etc

### 2. Orientação a objetos

> O que é orientação a objetos?

* Paradigma de programação
* Abstração de objetos do mundo real
* Sobre os objetos:
  * Possuem atributos e comportamentos
  * Interagem entre si
  * São instâncias de classes
* Sobre as classes:
  * Modelo de objetos
  * Possuem atributos e comportamentos
  * São abstratas
  * São reutilizáveis
  * São extensíveis
  * São substituíveis

### 3. Arquitetura da aplicação

> Pensar na aplicação desconexa de qualquer meio externo (banco de dados, interface gráfica, etc)

* A aplicação funcionará independente de banco de dados;
* O banco de dados deve ser enxergado como uma ferramenta para persistir dados;
  * Ele não deve ser responsável nem interferir em nenhuma funcionalidade ou regra de negócio da aplicação;
* Com base nisso, será utilizado o DDD (Domain Driven Design) para modelar as regras de negócio;

> Como pensamos nas entidades da aplicação sem pensar nas tabelas no banco de dados?

* Pensamos nas entidades da aplicação como objetos, sendo cada entidade uma classe;

> As pastas são apenas uma forma de agrupamento de arquivos, não tem nenhuma relação com a arquitetura da aplicação

* Nesse aspecto, o que deve ser feito é ser estabelecido um padrão no time e seguir com isso

### 4. Processo de criação do projeto

* Dentro de `src > infra`, deixaremos tudo que for relacionado a serviços externos da aplicação;
  * Exemplo: banco de dados, serviços de e-mail, etc

* Dentro de `src > app`, ficará tudo que não possui acesso externo a aplicação. Como por exemplo: `entities`

### 0. Next steps

* DDD
  * Estudar sobre aggregates, bounded contexts, etc



