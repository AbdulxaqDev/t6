let rng = new Set();

for (let i = 0; i < 3; i++) {
 while (rng.size < 25) { 
  let r = Math.floor(Math.random() * 25)
  rng.add(r)
 }
 let rArray = Array.from(rng)
 console.log(rArray);
}

