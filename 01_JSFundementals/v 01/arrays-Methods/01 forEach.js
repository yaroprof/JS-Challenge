  const people = [
    { name: 'John', age: 25, budget: 3000 },
    { name: 'Bob', age: 35, budget: 2000 },
    { name: 'Lora', age: 18, budget: 4000 },
    { name: 'Alex', age: 40, budget: 1500 },
    { name: 'Dora', age: 20, budget: 6000 },
  ]

  // 01 - for  // es-5
  /*
  for(let i = 0; i< people.length; i++){
      console.log(people[i])
  }

   */

  // 02 for of  // es-6
  /*
  for (let person of people){
      console.log(person)
  }

   */

  // 03   forEach
  // people.forEach( function (person, index, peopleArray){   // person- кожен об'єкт даного масиву, peopleArray - сам масив- people
  //     console.log(person)
  //     console.log(index)
  //     console.log(peopleArray)
  //
  //
  // } )


  // people.forEach(function (person){
  //     console.log(person)
  // })

people.forEach(person => console.log(person))











