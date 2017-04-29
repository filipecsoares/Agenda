INSERT INTO user(id, name, email, status, password, created) VALUES(1,'João Silva', 'joao@email.com', true, 'senha1', '2017-04-20 12:00:00');
INSERT INTO user(id, name, email, status, password, created) VALUES(2,'José de Souza', 'jose@email.com', true, 'senha2', '2017-04-20 12:00:00');
INSERT INTO user(id, name, email, status, password, created) VALUES(3,'Maria da Silva', 'maria@email.com', true, 'senha3', '2017-04-20 11:00:00');
INSERT INTO user(id, name, email, status, password, created) VALUES(4,'Mariana da Silva', 'mariana@email.com', true, 'senha4', '2017-04-20 11:00:00');

INSERT INTO business(id, name, description, fk_user, status) VALUES(1,'Mecânica revisão', 'Mecânica para revisão de carros', 1, true);
INSERT INTO business(id, name, description, fk_user, status) VALUES(2,'Clínica sorriso', 'Clínica odontológica', 4, true);