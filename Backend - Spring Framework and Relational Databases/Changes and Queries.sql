ALTER TABLE Item_Comanda RENAME COLUMN id_cardapio TO fk_id_cardapio;
ALTER TABLE Item_Comanda ADD COLUMN teste TEXT;
ALTER TABLE Item_Comanda DROP COLUMN teste;
SELECT * FROM Item_Comanda;

------------------------------------------------

-- Não fazer; só para ter de exemplo
DROP TABLE Comanda; 
DROP DATABASE bomgosto; -- só funciona se estiver fora do banco no momento da execução.
TRUNCATE TABLE Cardapio; -- apaga o conteúdo, mas a tabela continua existindo

------------------------------------------------

UPDATE Comanda SET nome_cliente = 'Clark Kent' WHERE  id_comanda = 7;
SELECT * FROM Comanda;

------------------------------------------------

SELECT * FROM Comanda c
INNER JOIN Item_Comanda it ON c.id_comanda = it.id_comanda; -- IDEAL
--==EQUIVALENTE==--
SELECT * FROM Comanda c, Item_Comanda it
WHERE c.id_comanda = it.id_comanda;

------------------------------------------------

-- Index = Referência; facilita o acesso/ busca aos dados no banco; estrutura, pode usar um ou mais colunas;
CREATE INDEX idx_cardapio_nome ON Cardapio(nome_item);
-- Indica que a coluna nome é o index;
-- Por padrão o Postgree usa B-tree, já que a pesquisa por árvore é mais rápida;
-- Também existe o Hash, o GIN, etc.