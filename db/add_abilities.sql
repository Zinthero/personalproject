update characters 
set strength = ${strength},
 constitution = ${constitution},
 dexterity = ${dexterity},
 intelligence = ${intelligence},
 wisdom = ${wisdom},
 charisma = ${charisma}
 where id = ${id};
select * from characters
where id = ${id}