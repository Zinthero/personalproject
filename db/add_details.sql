update characters 
set charactername = ${charactername},
level = ${level},
characterclass= ${characterclass},
paragon = ${paragon},
destiny = ${destiny},
totalxp = ${totalxp},
race = ${race},
size = ${size},
age = ${age},
gender = ${gender},
height = ${height},
weight = ${weight},
alignment = ${alignment},
diety = ${diety}
where id =${id};

select* from characters
where id = ${id}