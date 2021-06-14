<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Marital Status</title>
</head>
<body>
    <div id="demo">
        <h1>Choose Your Marital Status</h1>
        <ol id="Marital Status">
            <li>Single</li>
            <li>Married</li>
            <li>Do Not Share</li> 
        </ol>
    </div>
    <script>
        var demo= document.getElementById("demo");
        var h1= document.createElement("h1");
        h1.innerText= "Choose your Marital Status";

        var ol= document.createElement("ol");
        var ol= document.getElementById("Marital Status");
        var MaritalStatusItems= ["Single", "Married", "Do Not Share"];

        for(let i=0; i<MaritalStatusItems.length; i++){
            var list= document.createElement("li");
            var input= document.createElement("input");
            input.setAttribute("type", "radio");
            input.setAttribute("id", "rd" +i);
            input.setAttribute("value", MaritalStatusItems[i]);
            list.innerText =MaritalStatusItems[i];
            ol.appendChild(list);
            ol.appendChild(input);

        }
            demo.appendChild(ol);

        function myFunction(){
            var Single= document.getElementById(rd[0]);
            var Married= document.getElementById(rd[1]);
            var DoNotShare= document.getElementById(rd[2]);

                if(Single.checked == true){
                    document.write("You're Single!");

                }
                else if(Married.checked == true){
                    document.write("You're Married!");
                }
                else{
                    document.write("Do Not Share!");
                }
            }


    </script>
</body>
</html>
</html>
