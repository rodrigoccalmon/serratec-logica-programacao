//break

for (var i = 0; i < 10; i++) {
    console.log("o valor de i = ", i);

    if (i == 5) {                     
        break;
    }

}

//continue

for (var i = 0; i < 10; i++) {
   
    if (i == 5) {
        console.log("cheguei na metade.");
        continue
    }

    console.log("estamos no valor de i: ", i);
}