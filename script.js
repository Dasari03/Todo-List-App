let input = prompt("Please enter what you would like to do")
const todoArray = ['having breakfast', 'having lunch']

while(input !== 'quit' ){

    if(input === 'list'){
        console.log('**********************')
        for(let i = 0; i < todoArray.length; i++){
            console.log(`${i}: ${todoArray[i]}`)
        }
        console.log('**********************')
    } else if(input === 'new') {
        let newAnswer = prompt("enter what you would like to add")
        todoArray.push(newAnswer)
    } else if(input === 'delete') {
        let indexForDelete = prompt("enter the index you wish to delete")
        todoArray.splice(indexForDelete, 1)
    }

input = prompt("Please enter what you would like to do")
}

console.log("you successfuly exited the Todo App")