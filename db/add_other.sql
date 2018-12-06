update characters
set initiative = ${initiative},
health = ${health},
ac = ${ac},
fort = ${fort},
reflexes = ${reflexes},
will = ${will},
speed = ${speed}
where id = ${id};

select* from characters
where id = ${id}