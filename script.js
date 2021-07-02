function disp()
{
    var dropdown = document.querySelectorAll('option')
    console.log(dropdown)
    const array =Array.from(dropdown);
    console.log(array)
    var result = array.reduce(function (str, currentValue) {
        return str + '--' + currentValue.text;
      }, '');
      
      document.getElementById('out').innerHTML = result 
}
function removeOption()
{
    var x= document.getElementById("count")
    x.remove(x.selectedIndex)
}

function addOption()
{
    var x = document.getElementById('count')
    var option = document.createElement('option')
    option.text = document.getElementById('text').value
    option.value = document.getElementById('value').value
    x.appendChild(option)
}