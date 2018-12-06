update characters 
 set personalitytraits = ${personalitytraits},
 background = ${background}, 
 mannersappear = ${mannersappear}, 
 compantions = ${compantions}
where id = ${id};
select * from characters
where id = ${id}