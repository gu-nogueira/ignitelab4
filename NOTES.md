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

* A aplicação funcionará independente de banco de dados
* O banco de dados deve ser enxergado como uma ferramenta para persistir dados
  * Ele não deve ser responsável nem interferir em nenhuma funcionalidade ou regra de negócio da aplicação
* Com base nisso, será utilizado o DDD (Domain Driven Design) para modelar as regras de negócio

> Como pensamos nas entidades da aplicação sem pensar nas tabelas no banco de dados?

* Pensamos nas entidades da aplicação como objetos, sendo cada entidade uma classe

> As pastas são apenas uma forma de agrupamento de arquivos, não tem nenhuma relação com a arquitetura da aplicação

* Nesse aspecto, o que deve ser feito é ser estabelecido um padrão no time e seguir com isso

### 4. Processo de criação do projeto

* Separação de responsabilidades:
  * `infra`: responsável por lidar com a parte de infraestrutura da aplicação (banco de dados, etc)
  * `app`: responsável por toda a parte de regras de negócio da aplicação
    * Utilização de orientação a objetos para elaborar as `entities`, com getters e setters
    * Conceito de `value objects` dentro do `DDD` para atributos da classe para algum funcionamento específico, validação, formatação etc. Neste caso, separaremos `content` de `Notification` em uma classe separada;

### 5. Testes

* Configuração de testes unitários para regras de negócio no mais baixo nível da aplicação (a nível de entidade)
* Configuração do `jest.config.ts` para que os testes sejam executados em paralelo
```ts
export default {
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: 'src',
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: ['**/*.(t|j)s'],
  coverageDirectory: '../coverage',
  testEnvironment: 'node',
};
```

### 6. Casos de uso

* Criação de casos de uso para cada funcionalidade da aplicação, serão separados em `services`

### 7. Repositories pattern

* Os `repositories` são a parte central da aplicação, nela onde é feito o intermédio entre a aplicação e conexões com serviços externos;
* A ideia é que os `repositories` sejam abstratos, ou seja, não devem ter nenhuma dependência com banco de dados, por exemplo;
* É estabelecido um contrato para que os `repositories` sejam implementados, ou seja, é definido um método para cada funcionalidade que o `repository` deve ter;

### 8. In-memory database

* É feito mocks de banco de dados para testes unitários, para que não seja necessário ter um banco de dados rodando para testar a aplicação;
* Seguindo o conceito de desacoplamento em `clean architecture`;
* Referência: [Martin Fowler Blog - In Memory database](https://)
  * Muito conteúdo baseado em prática;

### 9. DTOs

* DTOs são objetos que são utilizados para transferência de dados entre a aplicação e o cliente;

### 0. Next steps

* DDD
  * Estudar sobre aggregates, bounded contexts, etc



