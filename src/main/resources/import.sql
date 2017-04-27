INSERT INTO user(id, name, email, status, password, created) VALUES(1,'Teste 1', 'Teste 1', true, 'Teste 1', '2017-04-20 12:00:00');
INSERT INTO user(id, name, email, status, password, created) VALUES(2,'Teste 2', 'Teste 2', true, 'Teste 2', '2017-04-20 12:00:00');
INSERT INTO user(id, name, email, status, password, created) VALUES(3,'ABC', 'ABC', true, 'ABC', '2017-04-20 11:00:00');

INSERT INTO business(id, name, description, fk_user, status) VALUES(1,'Teste 1', 'Teste 1', 1, true);