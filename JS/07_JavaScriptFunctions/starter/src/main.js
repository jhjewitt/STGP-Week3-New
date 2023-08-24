let age = 4

if (age <= 17) { 

    console.log("Underage"); 

} else { 

    console.log("18 or over"); 

} 

if (age <= 17) { 

    console.log("Underage"); 

} else if (age >= 18 && age <= 65) { 

    console.log("Insurable"); 

} else { 
    console.log("out of range"); 

} 

age < 18 ? 
    console.log('uninsurable') 
:
age <=65 ? 
    console.log('insurable')
:
    console.log('out of range');
