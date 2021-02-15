// The pop() method removes the last element from an array and returns that element. This method changes the length of the array.

export default function pop(){
    const plants = ['a', 'b', 'c', '1', '2'];

    console.log(plants.pop());
    
    console.log(plants);

    plants.pop();
    
    console.log(plants);

    console.log('----------------------------------------------');
}