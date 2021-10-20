```
cifra - algoritmi qyue cruptigrafa
plaintext - teto simples
xiphertxt - a saida do algoritmo
cryptonalysis - tentar quebrar o algoritmo

------------------------------ ssimétrico  ----------------------------

-uma publica e uma privada
-um só existe na maquina
-uma só pode ser descriptada a partir da outra
-manda a chave junto com o texto
-encrupta a minha chave privada e a píblica da outra 
-posso usar a chave publica da pessoa pra encriptar a menssagem

------------------------------ simétrico  ----------------------------

-encriptamos os dados com jwt
-oque fica inacessivel é a assinatura do token
-o processso de hash é irreversível
-hash devolve o mesmo valor para  a mesma entrada
-não guarda a senha mas sim o hash

----------------------------------------------------------------------------------------------------------------

---------------------------------------------- Bcrypt --------------------------------
-é um metodo de hash
-o parametro é cost 
-quando é mais instantania fica mais perigoso
-no curso usamos cost 12 por ser padrao
-a ordem de grandeza nao tem tanto inpacto
-o salt adiciona um texto aleatório pra cada senha

-precisamos de duas finçoes 
-salt que espera receber o cost
-quando a funçao for chamada tem q passar a senha
-o metodo é uma funçao que esta dentro da classe
-plaintext é a senha que quero criptografar
-cost = 12
-salt = gensaltSync(cost) 
-o salt impede os ataque de rainbow table
-nao precisa salvar o hash
-hash  e hash manager

------------------------------------------------------------------------------------------------------------

-a senha vira o cipherpassword
-cost é o tempo de execução
-salt é quem faz um hash ser diferente do outro


-------------------------------------------------user roles------------------------------------------------------------

-é sobre oque o usuario pode fazer por exemplo admin
-o front informa o role ('normal ou role')
-para refatorar começa pela modelagem































```