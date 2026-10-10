const numeros = [23, 32, 0]
const n2 = []
for(let i of numeros){
    if (i > 10){
        n2.push(i)
    }
}

for(let i of n2){
    console.log(`${n2}`)
}
