// to display the content which we click

function displayNum(num)
{
    result.value += num
}

function allClear()
{
    result.value = ""
}

function evalAns()
{
    result.value = eval(result.value)
}

function lastDigit()
{
    result.value = result.value.slice(0,-1)
}