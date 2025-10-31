CREATE TABLE Comanda (
	id_comanda INT PRIMARY KEY NOT NULL,
	data DATE NOT NULL,
	num_mesa INT NOT NULL, 
	nome_cliente VARCHAR(100) NOT NULL
);

CREATE TABLE Cardapio (
	id_cardapio INT PRIMARY KEY NOT NULL,
	nome_item VARCHAR(100) UNIQUE NOT NULL,
	descricao TEXT, 
	preco_untario DECIMAL(10, 2) NOT NULL
);

CREATE TABLE Item_Comanda (
	id_item INT PRIMARY KEY NOT NULL,
	quantidade INT NOT NULL,
	id_comanda INT NOT NULL,
	id_cardapio INT NOT NULL,
	FOREIGN KEY(id_comanda) REFERENCES Comanda(id_comanda) ON DELETE CASCADE,
	FOREIGN KEY(id_cardapio) REFERENCES Cardapio(id_cardapio) ON DELETE CASCADE
);

INSERT INTO Comanda(id_comanda, data, num_mesa, nome_cliente)
VALUES 
(1, '2025-10-04', 5, 'Ronaldo'),
(2, '2025-10-05', 3, 'Maria'),
(3, '2025-10-06', 1, 'João'),
(4, '2025-10-07', 2, 'Ana'),
(5, '2025-10-08', 4, 'Carlos'),
(6, '2025-10-09', 6, 'Beatriz'),
(7, '2025-10-10', 7, 'Lucas');

INSERT INTO Cardapio(id_cardapio, nome_item, descricao, preco_untario)
VALUES
(1, 'Pizza Margherita', 'Pizza com molho de tomate, queijo e manjericão', 35.00),
(2, 'Hamburguer', 'Hamburguer artesanal com queijo e bacon', 25.50),
(3, 'Salada Caesar', 'Alface, frango grelhado, croutons e molho Caesar', 18.00),
(4, 'Refrigerante 350ml', 'Bebida gaseificada de 350ml', 6.50),
(5, 'Suco Natural', 'Suco de laranja natural', 8.00),
(6, 'Espaguete à Bolonhesa', 'Massa com molho bolonhesa', 28.00),
(7, 'Sorvete', 'Sorvete de chocolate 2 bolas', 12.00),
(8, 'Café Expresso', 'Café puro e concentrado servido em pequena quantidade', 5.00),
(9, 'Cappuccino', 'Café expresso com leite vaporizado e espuma de leite', 8.00),
(10, 'Latte', 'Café expresso com bastante leite vaporizado', 7.50),
(11, 'Mocha', 'Café expresso com chocolate e leite vaporizado', 9.00),
(12, 'Macchiato', 'Café expresso com um pouco de espuma de leite', 6.00);

INSERT INTO Item_Comanda(id_item, quantidade, id_comanda, id_cardapio)
VALUES
(1, 2, 1, 1), -- Ronaldo: 2 Pizzas Margherita 
(2, 1, 1, 4), -- Ronaldo: 1 Refrigerante 
(3, 1, 2, 2), -- Maria: 1 Hamburguer
(4, 1, 2, 5), -- Maria: 1 Suco Natural
(5, 3, 3, 6), -- João: 3 Espaguetes 
(6, 2, 4, 3), -- Ana: 2 Saladas Caesar
(7, 1, 5, 7); -- Carlos: 1 Sorvete
(8, 7, 6, 5), -- Beatriz: 1 Suco Natural 
(9, 1, 6, 7), -- Beatriz: 1 Sorvete 
(10, 2, 7, 1), -- Lucas: 2 Pizzas Margherita 
(11, 1, 7, 4), -- Lucas: 1 Refrigerante 
(12, 1, 7, 6); -- Lucas: 1 Espaguete à Bolonhesa
(13, 1, 1, 8), -- Ronaldo: 1 Café Expresso
(14, 2, 1, 9), -- Ronaldo: 2 Cappuccinos
(15, 1, 2, 10), -- Maria: 1 Latte
(16, 1, 2, 8), -- Maria: 1 Café Expresso
(17, 2, 3, 11), -- João: 2 Mochas
(18, 1, 4, 9), -- Ana: 1 Cappuccino
(19, 1, 4, 12), -- Ana: 1 Macchiato
(20, 1, 5, 10), -- Carlos: 1 Latte
(21, 2, 6, 8), -- Beatriz: 2 Café Expresso
(22, 1, 6, 11), -- Beatriz: 1 Mocha
(23, 1, 7, 12), -- Lucas: 1 Macchiato
(24, 1, 7, 9); -- Lucas: 1 Cappuccino


-- 1) Listagrm do cardápio ordenada por nome
SELECT id_cardapio, nome_item, descricao, preco_untario
FROM Cardapio
ORDER BY nome_item;

-- 2) Comandas ordenadas por data, código e nome do item)
SELECT 
    c.id_comanda,
    c.data,
    c.num_mesa,
    c.nome_cliente,
    ic.id_comanda AS id_comanda_item,
    ca.nome_item AS nome_cafe,
    ca.descricao,
    ic.quantidade,
    ca.preco_untario,
    (ic.quantidade * ca.preco_untario) AS preco_total
FROM Comanda c
JOIN Item_Comanda ic ON c.id_comanda = ic.id_comanda
JOIN Cardapio ca ON ic.id_cardapio = ca.id_cardapio
ORDER BY c.data, c.id_comanda, ca.nome_item;

-- 3) Comandas com valor total
SELECT 
    c.id_comanda,
    c.data,
    c.num_mesa,
    c.nome_cliente,
    SUM(ic.quantidade * ca.preco_untario) AS valor_total
FROM Comanda c
JOIN Item_Comanda ic ON c.id_comanda = ic.id_comanda
JOIN Cardapio ca ON ic.id_cardapio = ca.id_cardapio
GROUP BY c.id_comanda, c.data, c.num_mesa, c.nome_cliente
ORDER BY c.data;

-- 4) Comandas com mais de um tipo de café
SELECT 
    c.id_comanda,
    c.data,
    c.num_mesa,
    c.nome_cliente,
    SUM(ic.quantidade * ca.preco_untario) AS valor_total
FROM Comanda c
JOIN Item_Comanda ic ON c.id_comanda = ic.id_comanda
JOIN Cardapio ca ON ic.id_cardapio = ca.id_cardapio
WHERE ca.nome_item LIKE '%Café%' 
   OR ca.nome_item LIKE '%Cappuccino%' 
   OR ca.nome_item LIKE '%Latte%'
   OR ca.nome_item LIKE '%Mocha%'
   OR ca.nome_item LIKE '%Macchiato%'
GROUP BY c.id_comanda, c.data, c.num_mesa, c.nome_cliente
HAVING COUNT(DISTINCT ca.id_cardapio) > 1
ORDER BY c.data;

-- 5) Total de faturamento por data
SELECT 
    c.data,
    SUM(ic.quantidade * ca.preco_untario) AS faturamento_total
FROM Comanda c
JOIN Item_Comanda ic ON c.id_comanda = ic.id_comanda
JOIN Cardapio ca ON ic.id_cardapio = ca.id_cardapio
GROUP BY c.data
ORDER BY c.data;
