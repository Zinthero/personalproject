update characters 
set acrobatics = ${acrobatics}, 
 arcana = ${arcana},
 athletics= ${athletics}, 
bluff = ${bluff},
 diplomacy= ${diplomacy}, 
 dungeoneering = ${dungeoneering},
 endurance = ${endurance}, 
 heal =  ${heal},
history =  ${history}, 
 insight =   ${insight},
 intimidate =    ${intimidate}, 
  nature =   ${nature},
  perception =    ${perception},
  religion =     ${religion},
   stealth =     ${stealth},
   streetwise =      ${streetwise},
    thievery =      ${thievery}
where id =${id};

select * from characters
where id = ${id}