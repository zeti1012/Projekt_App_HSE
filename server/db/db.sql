"Benutzertabelle"
create table benutzer (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    benutzername VARCHAR(20) NOT NULL UNIQUE,
    kennwort VARCHAR(20) NOT NULL,
    benutzertyp VARCHAR(20) NOT NULL check(benutzertyp = 'Besitzer'  OR 
    benutzertyp = 'Handwerker' OR benutzertyp = 'Monteur' OR benutzertyp = 'Produktionsmitarbeiter' )   
);

insert into benutzer (benutzername, kennwort, benutzertyp) values ('Jonny','1234!','Handwerker');

insert into benutzer (benutzername, kennwort, benutzertyp) values ('Ibti','1234!','Handwerker');

insert into benutzer (benutzername, kennwort, benutzertyp) values ('Hannah','1234!','Monteur');

insert into benutzer (benutzername, kennwort, benutzertyp) values ('Jakim','1234!','Produktionsmitarbeiter');

"Baugruppentabelle"
create table baugruppen (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    baugruppe_name VARCHAR(50) NOT NULL,
    baugruppe_beschreibung TEXT NOT NULL,
    baugruppe_bild TEXT NOT NULL 
);

insert into baugruppen (baugruppe_name, baugruppe_beschreibung, baugruppe_bild) values ('Aufbau','Betrieb','Link');
insert into baugruppen (baugruppe_name, baugruppe_beschreibung, baugruppe_bild) values ('Innenausbau','Betrieb','Link');
insert into baugruppen (baugruppe_name, baugruppe_beschreibung, baugruppe_bild) values ('Stromversorgung','Betrieb','Link');
insert into baugruppen (baugruppe_name, baugruppe_beschreibung, baugruppe_bild) values ('Wasserversorgung','Betrieb','Link');
insert into baugruppen (baugruppe_name, baugruppe_beschreibung, baugruppe_bild) values ('Sanitäranlagen','Betrieb','Link');
insert into baugruppen (baugruppe_name, baugruppe_beschreibung, baugruppe_bild) values ('Heizung','Betrieb','Link');
insert into baugruppen (baugruppe_name, baugruppe_beschreibung, baugruppe_bild) values ('Lüftung','Betrieb','Link');


"Teilgruppen"

create table teilegruppen(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    teilegruppe_name VARCHAR(50) NOT NULL,
    teilegruppe_beschreibung TEXT NOT NULL,
    teilegruppe_bild TEXT NOT NULL,
    baugruppe_id BIGINT NOT NULL REFERENCES baugruppen(id) 
);

insert into teilegruppen (teilegruppe_name, teilegruppe_beschreibung, teilegruppe_bild, baugruppe_id) values ('Außenwände','Dummy','Link', 1);
insert into teilegruppen (teilegruppe_name, teilegruppe_beschreibung, teilegruppe_bild, baugruppe_id) values ('Innenwände','Dummy','Link', 1);
insert into teilegruppen (teilegruppe_name, teilegruppe_beschreibung, teilegruppe_bild, baugruppe_id) values ('Fußboden','Dummy','Link', 1);
insert into teilegruppen (teilegruppe_name, teilegruppe_beschreibung, teilegruppe_bild, baugruppe_id) values ('Dach','Dummy','Link', 1);
insert into teilegruppen (teilegruppe_name, teilegruppe_beschreibung, teilegruppe_bild, baugruppe_id) values ('Fenster','Dummy','Link', 1);
insert into teilegruppen (teilegruppe_name, teilegruppe_beschreibung, teilegruppe_bild, baugruppe_id) values ('Türen','Dummy','Link', 1);

"Bauteile"

create table bauteile(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    bauteil_name VARCHAR(50) NOT NULL,
    bauteil_beschreibung TEXT NOT NULL,
    bauteil_bild TEXT NOT NULL,
    teilegruppe_id BIGINT NOT NULL REFERENCES teilegruppen(id) 
);

insert into bauteile (bauteile_name, bauteile_beschreibung, bauteile_bild, teilegruppe_id) values ('Tür1','Dummy','Link', 6);
insert into bauteile (bauteile_name, bauteile_beschreibung, bauteile_bild, teilegruppe_id) values ('Tür2','Dummy','Link', 6);
insert into bauteile (bauteile_name, bauteile_beschreibung, bauteile_bild, teilegruppe_id) values ('Tür3','Dummy','Link', 6);
insert into bauteile (bauteile_name, bauteile_beschreibung, bauteile_bild, teilegruppe_id) values ('Tür4','Dummy','Link', 6);

"Teile"

create table einzelteile(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    einzelteil_nummer VARCHAR(20) NOT NULL,
    einzelteil_name VARCHAR(50) NOT NULL,
    einzelteil_herstellungsdatum DATE NOT NULL,
    einzelteil_beschreibung TEXT NOT NULL,
    einzelteil_bild TEXT NOT NULL,
    bauteil_id BIGINT NOT NULL REFERENCES bauteile(id) 
);

insert into einzelteile (einzelteil_nummer,einzelteil_name, einzelteil_herstellungsdatum,einzelteil_beschreibung, einzelteil_bild, bauteil_id) 
values ('1.6.001.001','Zarge','2022-05-28','Dummy','Link', 1);
insert into einzelteile (einzelteil_nummer,einzelteil_name, einzelteil_herstellungsdatum,einzelteil_beschreibung, einzelteil_bild, bauteil_id) 
values ('1.6.001.002','Türblatt','2022-05-28','Dummy','Link', 1);
insert into einzelteile (einzelteil_nummer,einzelteil_name, einzelteil_herstellungsdatum,einzelteil_beschreibung, einzelteil_bild, bauteil_id) 
values ('1.6.001.003','Drückergarnitur','2022-05-28','Dummy','Link', 1);
insert into einzelteile (einzelteil_nummer,einzelteil_name, einzelteil_herstellungsdatum,einzelteil_beschreibung, einzelteil_bild, bauteil_id) 
values ('1.6.001.004','Schlosskasten','2022-05-28','Dummy','Link', 1);
insert into einzelteile (einzelteil_nummer,einzelteil_name, einzelteil_herstellungsdatum,einzelteil_beschreibung, einzelteil_bild, bauteil_id) 
values ('1.6.001.005','Schließblech','2022-05-28','Dummy','Link', 1);
insert into einzelteile (einzelteil_nummer,einzelteil_name, einzelteil_herstellungsdatum,einzelteil_beschreibung, einzelteil_bild, bauteil_id) 
values ('1.6.001.006','Türband','2022-05-28','Dummy','Link', 1);
insert into einzelteile (einzelteil_nummer,einzelteil_name, einzelteil_herstellungsdatum,einzelteil_beschreibung, einzelteil_bild, bauteil_id) 
values ('1.6.001.007','Schlossrosette','2022-05-28','Dummy','Link', 1);

"Aufgaben"

create table aufgaben(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    aufgabe_typ VARCHAR(20) NOT NULL check(aufgabe_typ = 'Planung'  OR 
    aufgabe_typ = 'Produktion' OR aufgabe_typ = 'Montage' OR aufgabe_typ = 'Betrieb' 
    OR aufgabe_typ = 'Modernisierung' OR aufgabe_typ = 'Demontage' OR aufgabe_typ = 'Umzug'
    OR aufgabe_typ = 'Re-/Upcycling'),
    aufgabe_beschreibung TEXT NOT NULL,
    aufgabe_timestamp TIMESTAMP NOT NULL,
    benutzer_id BIGINT NOT NULL REFERENCES benutzer(id),
    bauteil_id  BIGINT NOT NULL REFERENCES bauteile(id)
);

insert into aufgaben (aufgabe_typ, aufgabe_beschreibung, aufgabe_timestamp, benutzer_id, bauteil_id) 
values ('Produktion','Bauteil ist fertiggestellt','2022-05-27 10:35:22', 4, 1);

insert into aufgaben (aufgabe_typ, aufgabe_beschreibung, aufgabe_timestamp, benutzer_id, bauteil_id) 
values ('Montage','Bauteil ist montiert','2022-05-28 15:40:00', 3, 1);
insert into aufgaben (aufgabe_typ, aufgabe_beschreibung, aufgabe_timestamp, benutzer_id, bauteil_id) 
values ('Produktion','Bauteil ist fertiggestellt','2022-05-21 15:40:00', 3, 2);


