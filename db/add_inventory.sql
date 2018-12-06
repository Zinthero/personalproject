update characters
set weapons = ${weapons},
armor =${armor},
magicitems = ${magicitems},
otherequipment =  ${otherequipment},
misc = ${misc},
gold = ${gold}
where id = ${id};
select * from characters
where id = ${id}