var ptimes = 0;
var pcharacter = 0;
Change()
{
    var pcharacter = 0;
    var input = Number(document.getElementById("character_input").value);
    var output = input; document.getElementById("character").innerHTML=output;
    var pcharacter = output;
}
prompt()
{
    var ptimes = 0;
    var ptimes = prompt("please enter how many times do you want the following input to be printed (please only enter the number)");
    var current_value = ptimes; document.getElementById("tprinted").innerHTML=current_value;
}
function write()
{
    if(ptimes = 0 )
    {
        if(pcharacter = 0)
        {
            window.alert("the number of times the character needs to be printed and the printing character still needs to be entered")
        }
        else
        {
            window.alert("the number of times the character needs to be printed still needs to be entered")
        }
    }
    else
    {
        if(pcharacter = 0)
        {
            window.alert("the printing character still needs to be entered")
        }
        else
        {
            for (i=1;i<print_value;i++)
            {
                for (j=1;j<i;j++)
                {
                    document.write(print_character)
                }
                document.write("<br>")
            }
            document.write(<button onclick="redo()">retry?</button>)
        }
    }
}
redo()
{
    window.location.replace("new.html")
}