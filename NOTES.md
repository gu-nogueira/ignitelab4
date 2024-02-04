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

#### 2.1. Princípios

> Princípios da orientação a objetos

* Separação de responsabilidades: classes devem ter responsabilidades separadas
* Encapsulamento: classes devem ter atributos e métodos privados e publicos
* Herança: classes devem herdar atributos e métodos
* Polimorfismo: classes devem ter métodos com o mesmo nome

#### 2.2 SOLID

* SOLID:
  * S: Single Responsibility Principle (Princípio da Responsabilidade Única): Classes devem ter uma responsabilidade unica.
    ```ts
    // Não aderindo ao SRP
    class Report {
      generateReport() {
        // lógica para gerar relatório
      }

      saveToFile() {
        // lógica para salvar em arquivo
      }
    }

    // Adotando o SRP
    class Report {
      generateReport() {
        // lógica para gerar relatório
      }
    }

    class FileManager {
      saveToFile() {
        // lógica para salvar em arquivo
      }
    }
    ```
  * O: Open/Closed Principle (Princípio da Abertura/Fechamento): Classes devem ser abertas para extensão e fechadas para modificação.
    ```ts
    // Não aderindo ao OCP
    class DiscountCalculator {
      calculateDiscount(order: Order) {
        // lógica para calcular desconto
      }
    }

    // Adotando o OCP
    interface DiscountStrategy {
      calculateDiscount(order: Order): number;
    }

    class PercentageDiscount implements DiscountStrategy {
      calculateDiscount(order: Order) {
        // lógica específica de desconto percentual
      }
    }

    class FixedDiscount implements DiscountStrategy {
      calculateDiscount(order: Order) {
        // lógica específica de desconto fixo
      }
    }
    ```
  * L: Liskov Substitution Principle (Princípio da Substituição de Liskov): As subclasses devem ser substituíveis por suas classes base sem afetar a integridade do programa.
    ```ts
    // Não aderindo ao LSP
    class Bird {
      fly() {
        // lógica para voar
      }
    }

    class Penguin extends Bird {
      fly() {
        // pinguins não voam, mas a assinatura do método é mantida
      }
    }

    // Adotando o LSP
    interface FlyingBird {
      fly(): void;
    }

    class Sparrow implements FlyingBird {
      fly() {
        // lógica para voar
      }
    }

    class Penguin implements Bird {
      // pinguins não voam, então não implementam o método fly
    }
    ```
  * I: Interface Segregation Principle (Princípio da Segregação de Interface): Uma classe não deve ser forçada a implementar interfaces que ela não utiliza.
    ```ts
    // Não aderindo ao ISP
    interface Worker {
      work(): void;
      eat(): void;
    }

    class Robot implements Worker {
      work() {
        // lógica para trabalhar
      }

      eat() {
        // lógica para comer (mas não faz sentido para um robô)
      }
    }

    // Adotando o ISP
    interface Workable {
      work(): void;
    }

    interface Feedable {
      eat(): void;
    }

    class Robot implements Workable {
      work() {
        // lógica para trabalhar
      }
    }
    ```
  * D: Dependency Inversion Principle (Princípio da Inversão de Dependência): Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações.
    ```ts
    // Não aderindo ao DIP
    class Report {
      private logger: Logger;

      constructor() {
        this.logger = new Logger();
      }

      generateReport() {
        // lógica para gerar relatório
        this.logger.log('Relatório gerado com sucesso.');
      }
    }

    // Adotando o DIP
    interface Logger {
      log(message: string): void;
    }

    class ConsoleLogger implements Logger {
      log(message: string) {
        console.log(message);
      }
    }

    class FileLogger implements Logger {
      log(message: string) {
        // lógica para log em arquivo
      }
    }

    class Report {
      private logger: Logger;

      constructor(logger: Logger) {
        this.logger = logger;
      }

      generateReport() {
        // lógica para gerar relatório
        this.logger.log('Relatório gerado com sucesso.');
      }
    }

    const consoleLogger = new ConsoleLogger();
    const fileLogger = new FileLogger();

    const reportWithConsoleLogger = new Report(consoleLogger);
    const reportWithFileLogger = new Report(fileLogger);
    ```

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



