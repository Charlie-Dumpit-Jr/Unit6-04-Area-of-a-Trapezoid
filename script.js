
let base1 = 0
let base2 = 0
let height = 0
let sum = 0
let answer = 0

document.getElementById('results').addEventListener('click', solve)

function solve () {
  base1 = document.getElementById('base1').value
  base2 = document.getElementById('base2').value
  height = document.getElementById('height').value
  base1 = parseInt(base1)
  base2 = parseInt(base2)
  height = parseInt(height)
  sum = (base1 + base2) / 2
  answer = sum * height

  document.getElementById('answer').innerHTML = answer
}
