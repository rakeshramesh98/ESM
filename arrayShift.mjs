export default function shift(){
    console.log('shift --- gives the first element from an array');
    const array1 = [1,2,3];
    const firstelement = array1.shift();
    console.log(firstelement);

    const array2 = ['jeevan','rakesh','cognizant'];
    const firstname = array2.shift();
    console.log(firstname);
    console.log('-------------------------------------');
}