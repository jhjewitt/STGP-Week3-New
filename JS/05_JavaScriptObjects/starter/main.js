const darthVader = {allegiance: 'empire', weapon: 'lightsabre', sith: true, children: 2, childNames: ['Luke', 'Leia']}

console.log(darthVader);
console.log(Object.keys(darthVader).length);
console.log(darthVader.childNames[0]);

for(key in darthVader){
    console.log(key, darthVader[key]);
}

darthVader.allegiance = 'The light side';
darthVader.sith = false
delete darthVader.children;;

let{allegiance, weapon, sith, childNames} = darthVader;

console.log(darthVader)

