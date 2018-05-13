tasks = ['Shower', 'Eat', 'Code'];

function remove(array, removeItem){
    for(i = 0; i = array.length; i++){
        if(removeItem == array[i]) {
            array.splice(i,1);
        };
    };
}
remove(tasks, 'Eat');
console.log(tasks);
