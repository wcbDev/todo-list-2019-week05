//1. create event listeners for each button
//2. assign span a global variable
//3. Create function to add text to list using appendChild
//4. Create a function to remove ALL list items
//5. Create a function to strikethrough a list item when clicked
//6. Create a function to clear ONLY completed items
//7. Like God on the seventh day, rest

document.querySelector('#addToList').addEventListener('click', addItemToList)
document.querySelector('#removeAll').addEventListener('click', removeAllTasks)
document.querySelector('#removeFinish').addEventListener('click', removeFinish)
let tasksLeft = document.querySelector('#tasksLeft')
const listItems = document.querySelector('ul')

function addItemToList (){
  let text = document.querySelector('#text').value
  if (text.value == " ") {
    return alert("No Task Added")
  }

  const li = document.createElement('li')
  let node = document.createTextNode(text)
  li.appendChild(node)
  Number(tasksLeft.innerText ++)
}

function removeAllTasks (){
  document.querySelectorAll('li').forEach((Element) => Element.remove())
  tasksLeft.innerText = 0;
}

document.querySelector('ul').addEventListener('click', function(e){
  e.target.classList.toggle('strike')
  Number(tasksLeft.innerText --)
})

function removeFinish(){
  document.querySelectorAll('.strike').forEach((Element) => Element.remove())

}



