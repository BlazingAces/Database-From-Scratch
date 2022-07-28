Drop Table IF EXISTS game;
Drop Table IF EXISTS boss;


CREATE TABLE game (
    game_id SERIAL PRIMARY KEY,
    title TEXT,
    publisher TEXT,
    year INTEGER
);

CREATE TABLE boss (
    boss_id SERIAL PRIMARY KEY,
    name TEXT,
    title TEXT,
    location TEXT,
    attack TEXT,
    weakness TEXT,
    reward TEXT,
    game_id SERIAL NOT NULL REFERENCES game(game_id)
);

INSERT INTO game (title, publisher, year) VALUES ('Metroid', 'Nintendo', 1986);
INSERT INTO game (title, publisher, year) VALUES ('Metroid: Zero Mission', 'Nintendo', 2004);
INSERT INTO game (title, publisher, year) VALUES ('Super Metroid', 'Nintendo', 1994);
INSERT INTO game (title, publisher, year) VALUES ('Metroid Dread', 'Nintendo', 2021);


INSERT INTO boss (name, title, location, attack, weakness, reward) VALUES ('Charge Beam Beast', 'Metroid: Zero Mission', 'Brinstar', 'Ramming attack, spike projectiles', 'Missiles', 'Charge Beam');
INSERT INTO boss (name, title, location, attack, weakness, reward) VALUES ('Mother Brain', 'Metroid , Metroid: Zero Mission, Super Metroid', 'Zebesian Command Center, Tourian', 'Blue ring projectiles, bombs, fire beams, Laser Brain Attack', 'Head, Hyper Beam', 'Escape from Zebes');
INSERT INTO boss (name, title, location, attack, weakness, reward) VALUES ('Kraid', 'Metroid , Metroid: Zero Mission, Super Metroid, Metroid Dread', 'Kraids Lair Cataris', 'Spinning claws, projectiles from stomach, small boulders launched from mouth, Kraid Bouncing Creatures', 'Inner mouth area; shooting the eyes with charged beams or missiles will expose the weakness.', 'Large expansion of Missiles (Metroid), Speed Booster (Metroid: Zero Mission), Varia Suit (Super Metroid), Diffusion Beam (Metroid Dread)');


