// Code your solution here
//const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(nameArray, strInput){
    const driverList = nameArray.filter(name => {
        if (name.toLowerCase() === strInput.toLowerCase()){
            return name;

        }else{
            return undefined;
        }
    })
    return  driverList;
}

//  console.log(findMatching(drivers, 'Bobby'));
// console.log(findMatching(drivers, 'Annette'));

//const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function fuzzyMatch(driversList, string){    //.SLICE & .FILTER   want to have a function slices
    const letter = driversList.filter(name => {
        if (name.slice(0,2) === string.slice(0,2)){
            return name;
        }else if(name.slice(2,6) === string.slice(2,6)){
            const emptyArrray = [];
            return emptyArray;
        }
    });
    return letter;
    
}
//console.log(fuzzyMatch(drivers, 'mm'));
const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function matchName(driversList, string){   //want to take hometown as input and return name of whose properrty it is
    const info = driversList.filter(item => {
        if(item.name === string){
            return item;
        }else if(item.hometown === string){
            return item;
        }
    });
    return info;
}

console.log(matchName(drivers, 'Tampa Bay'))