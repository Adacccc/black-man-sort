const container = document.getElementById("container");

function swap(a, b)
{
    [a, b] = [b, a];
    return [a, b];
}

function find(value)
{
    for (let i = 0; i < 3; i++)
        if (value == order[i])
            return i;
    return -1;
}

function Execute()
{
    let order = ["div1", "div2", "div3"];
    let values = [document.getElementById("in1").value, document.getElementById("in2").value, document.getElementById("in3").value];
    let first = document.getElementById(order[0]);
    console.log(values);
    console.log(order);
    for (let i = 0; i < 2; i++)
    {
        for (let j = i; j < 3; j++)
        {
            if (parseInt(values[j]) > parseInt(values[i]))
            {
                [values[j], values[i]] = swap(values[j], values[i]);
                [order[j], order[i]] = swap(order[j], order[i])
            }
        }
    }
    container.insertBefore(document.getElementById(order[2]), first);
    container.insertBefore(document.getElementById(order[1]), document.getElementById(order[2]));
    container.insertBefore(document.getElementById(order[0]), document.getElementById(order[1]));
    console.log(values);
    console.log(order);
}