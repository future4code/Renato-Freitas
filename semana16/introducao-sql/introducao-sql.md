# Atividade da tarde - Aula 45
## Banco de dados e introdução a SQL

## Exercício 1-a
- VARCHAR para caracteres variáveis;
- PRIMARY KEY para chave de identificação única;
- NOT NULL para fixar como obrigatório e não opcional;
- DATE para data.

## Exercício 1-b
SHOW DATABASES/TABLES traz os nomes de cada database/tabela existente na schema.

## Exercício 1-c
O comando DESCRIBE Actor traz informações mais precisas de como a tabela foi estruturada. É mais legível que o comando SQL usado para sua criação.

## Exercício 2-a
```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);
```

## Exercício 2-b
> Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'

O programa detecta e impede automaticamente a criação de uma entrada com PRIMARY KEY já existente.

## Exercício 2-c
> Error Code: 1136. Column count doesn't match value count at row 1

Apesar de todas as informações necessárias terem sido passadas, não foram passadas as respectivas colunas entre parênteses da primeira linha do comando.

## Exercício 2-d
> Error Code: 1364. Field 'name' doesn't have a default value

Era esperado mais um campo de dado name para que um novo item na tabela Actor fosse criado.

## Exercício 2-e
> Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1

O dado do campo birth_date precisa ser uma string no formato "YYYY-MM-DD"
Y de year (ano), M de month (mês) e D de day (dia)

## Exercício 2-f
```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "John Doe",
  600000,
  "1955-10-02", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004", 
  "Jane Doe",
  1000000,
  "1966-12-25", 
  "female"
);
```

## Exercício 3-a
```sql
SELECT * FROM Actor WHERE gender = "female";
```

## Exercício 3-b
```sql
SELECT salary from Actor WHERE name = "Tony Ramos";
```

## Exercício 3-c
A pesquisa é válida, mas não é encontrado nenhum actor.

## Exercício 3-d
```sql
SELECT id, name, salary from Actor WHERE salary < 500000;
```

## Exercício 3-e
> Error Code: 1054. Unknown column 'nome' in 'field list'

O nome da coluna 'nome' não existe, porque na criação da tabela foi utilizado 'name'.

## Exercício 4-a
Selecione tudo da tabela Actor, onde o nome comece com A ou J, e tenha o salário maior que 300000.

## Exercício 4-b
```sql
SELECT * FROM Actor
WHERE (name NOT LIKE "A%") AND salary > 350000;
```

## Exercício 4-c
```sql
SELECT * FROM Actor WHERE (name LIKE "%g%" OR name LIKE "%G%");
```

## Exercício 4-d
```sql
SELECT * FROM Actor 
WHERE (
	(name LIKE "%a%" OR name LIKE "%A%") OR (name LIKE "%g%" OR name LIKE "%G%")
)
AND salary BETWEEN 350000 AND 900000;
```

## Exercício 5-a
```sql
CREATE TABLE Movie (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    synopsy TEXT NOT NULL,
    release_date DATE NOT NULL,
    rating TINYINT NOT NULL
);
```

## Exercício 5-b
```sql
INSERT INTO Movie (id, name, synopsy, release_date, rating)
VALUES(
  "001",
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06",
  7
);
```

## Exercício 5-c
```sql
INSERT INTO Movie (id, name, synopsy, release_date, rating)
VALUES(
  "002",
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012-12-27",
  10
);
```

## Exercício 5-d
```sql
INSERT INTO Movie (id, name, synopsy, release_date, rating)
VALUES(
  "003",
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce",
  "2017-11-02",
  8
);
```

## Exercício 5-e
```sql
INSERT INTO Movie (id, name, synopsy, release_date, rating)
VALUES(
  "004",
  "Teste",
  "Sinopse de teste",
  "2021-05-24",
  5
);
```

## Exercício 6-a
```sql
SELECT id, name, synopsy FROM Movie
WHERE id = "001";
```

## Exercício 6-b
```sql
SELECT * FROM Movie
WHERE name = "Teste";
```

## Exercício 6-c
```sql
SELECT id, name, synopsy FROM Movie
WHERE rating > 7;
```

## Exercício 7-a
```sql
SELECT * FROM Movie
WHERE name like "%vida%";
```

## Exercício 7-b
```sql
SELECT * FROM Movie
WHERE name like "%vida%" OR synopsy like "%vida%";
```

## Exercício 7-c
```sql
SELECT * FROM Movie
WHERE release_date <= CURRENT_DATE();
```

## Exercício 7-d
```sql
SELECT * FROM Movie
WHERE (
  release_date <= CURRENT_DATE() AND
  (name like "%vida%" OR synopsy like "%vida%") AND
  rating > 7
);
```