``` --------------------------ex 1 ------------------------

A)VARCHAR é pra identificar como string com um tamanho maximo especificado,DATE representa uma data,NOT NULL é que não pode ser nulo.
B)SHOW DATABASES mostra o banco de dados ,SHOW TABLES mostra as tabelas
C)DESCRIBE Actor mostra todos os detalhes da tabela

--------------------------ex 2 ------------------------


os erros dizem que estamos passando mais dados doque queriamos passar

--------------------------ex 3 ----------------------------
A)SELECT * from Actor WHERE gender = "male" 
B)SELECT salary from Actor WHERE name = "Tony Ramos" 
C)não retorna ngm 
D)SELECT id,name,salary from Actor WHERE salary >=500000;
E)aconteceu o erri porque name é diferente de nome

--------------------------ex 4 ----------------------------

A)pega todas as informaçoes de determinado ator e verifica se começa com a ou j e salario maior q 300k
B)SELECT * FROM Actor WHERE (name NOT LIKE "A%" OR name LIKE "J%") AND salary > 350000
C)SELECT * FROM Actor WHERE name LIKE "%g%" OR name LIKE "%G%";
D)SELECT * FROM Actor
WHERE 
	(name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
  AND salary BETWEEN 350000 AND 900000;


--------------------------ex 5 ----------------------------
INSERT INTO Filmes (id,name,sinopse,release_date,rating)
VALUES ("004",
 "Dona Flor e Seus Dois Maridos",
 "Após descobrir um segredo enterrado há muito tempo, que ameaça o que resta da sociedade, um novo policial embarca na busca de Rick Deckard, que está desaparecido há 30 anos.",
 "2017/10/03","10"
)

--------------------------ex 6 ----------------------------

A)SELECT id,name,rating from Filmes WHERE id = "004";
B)SELECT id,name,rating from Filmes WHERE name = "Dona Flor e Seus Dois Maridos";
C)SELECT id,name,sinopse from Filmes WHERE rating <7

--------------------------ex 7 ----------------------------
A)SELECT * FROM Filmes WHERE name LIKE "%vida%";
B)SELECT * FROM Movie WHERE title LIKE "%TERMO DE BUSCA%" OR synopsis LIKE "%TERMO DE BUSCA%";
C)SELECT * FROM Filmes WHERE release_date < "2020-05-04";
D)SELECT * FROM MOVIE
WHERE release_date < "2020-05-04" AND 
      (title LIKE "%TERMO DE BUSCA%" OR
      synopsis LIKE "%TERMO DE BUSCA%") AND rating > 7;












```