1 - Analise a classe `User`. Perceba quais propriedades são públicas e quais são privadas. Copie esse código para o seu exercício de hoje; crie uma instância dessa classe (dê o nome, email, etc que você quiser) e imprima, no terminal, o id, o nome e o email desse usuário. 

a. *Seria possível imprimir a senha (`password`) atrelada a essa instância?*

<strong>R: Não, pois não existe nenhum método para chamar o password dentro da classe.</strong>

b. *Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no terminal?*

<strong>R: A mensagem vai ser chamada uma vez cada usuário criado, pois o construtor é chamado sempre que uma instância é criada.</strong>

2 - Analise a `Customer`. Perceba quais propriedades são públicas e quais são privadas. Copie esse código para o seu exercício de hoje e crie uma instância dessa classe (com as informações que você quiser). Atente-se ao fato de que o `Customer` é uma subclasse (ou classe filha) da classe `User`. Sabemos disso porque há a palavra `extends` na declaração da classe `Customer`; e, em seu construtor, foi usado o `super`.

a. *Quantas vezes a mensagem `"Chamando o construtor da classe Customer"` foi impressa no terminal?* 

<strong>R: Uma vez para cada customer criado.</strong>

b. *Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no terminal? Por quê?*

<strong>R: Uma vez, pois foi criado um customer que extends o user.</strong>

