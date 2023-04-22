// We can not delete element between of array, if we want then we can remove last element of array

/*let data = [1, 5, 88, 200, 69, 57 ]
let position = document.getElementById('position').value;*/

/*for(let i=0; i<data.length-1; i++){
  data[i]= data[i+1]
}*/

/*for(let i= position; i<data.length; i++){
  data[i]= data[i+1]
}*/

/*for(let i=position; i<data.length-1; i++){
  data[i]= data[i+1]
}

data.length= data.length-1;

console.log(data) */

function delEl() {
    let data = [1, 5, 88, 200, 69, 57]
    let position = document.getElementById('position').value;
    position = parseInt(position)
    for (let i = position; i < data.length - 1; i++) {
        data[i] = data[i + 1]
    }

    data.length = data.length - 1;
    console.log(data)
}