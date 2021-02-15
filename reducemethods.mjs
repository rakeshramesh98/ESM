export default function reduceMethods() {
    const num = [1,2,5,8,9,5,8,5];
    let sum = 0;
    for (let n of num)
      sum+= n;
    console.log('using for ',sum);
    
    
    
    ///using reduce
    
    let number = [1,2,3,4,5,6];
    let add = 0;
     add = number.reduce((acc,currVal) => {
       return acc+currVal;
     },0);
    console.log('using reduce',add)
    
    //arrays
    
    const people = [
      {
        id:1,
        name:'Jeevan',
        age:21
      },
      {
        id:2,
        name:'Rakesh',
        age:23
      },
      {
        id:3,
        name:'Cognizant',
        age:50
      }
    ]
    
    let result = 0;
    result = people.reduce((acc,curVal) => acc+1,0);
    
    console.log('number of persons in group ',result);
    
    let sumAge = 0;
    sumAge = people.reduce((acc,curVal) => acc+curVal.age, 0);
    
    console.log('Sum of their age',sumAge);
    
    let names = 0;
    names = people.reduce((acc,curVal)=> {
      return [...acc,curVal.name]
    },[]);
    console.log(names);
    
    
    /// adding a unique key to the people
    
    let uniqueKey = 0;
    uniqueKey = people.reduce((acc,curVal) => {
      return { ...acc, [curVal.id]: curVal.name };
    },{});
    
    console.log(uniqueKey);
    
    console.log(uniqueKey['3']);
    
    /// highest age
    
    let maxAge = 0;
    maxAge = people.reduce((acc,curVal) => {
      if(acc===null || acc< curVal.age)
      return curVal.age
    },null);
    
    console.log(maxAge);
}