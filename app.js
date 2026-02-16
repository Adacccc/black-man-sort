var order = ["div1", "div2", "div3"];
var values = [21, 13, 1];
var container = document.getElementById("container");

function Sort()
{
    for (let i = 0; i < 3; i++)
    {
        for (let j = 0; j < 2; j++)
        {
            if (values[j] < values[j + 1])
            {
                let t1 = values[j];
                let t2 = order[j];
                values[j] = values[j + 1];
                values[j + 1] = t1;
                order[j] = order[j + 1];
                order[j + 1] = t2;
            }
        }
    }
}

function Execute()
{
    let first = document.getElementById(order[0]);
    values[0] = document.getElementById("in1").value;
    values[1] = document.getElementById("in2").value;
    values[2] = document.getElementById("in3").value;
    Sort();
    container.insertBefore(document.getElementById(order[2]), first);
    container.insertBefore(document.getElementById(order[1]), document.getElementById(order[2]));
    container.insertBefore(document.getElementById(order[0]), document.getElementById(order[1]));
    console.log(values);
    console.log(order);
}