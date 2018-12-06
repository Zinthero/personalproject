update characters 
set atwill = ${atwill}, 
daily = ${daily}, 
utility = ${utility},
encounter = ${encounter}
where id = ${id};
select * from characters
where id = ${id}

