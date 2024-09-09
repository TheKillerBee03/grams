let firstValue, secondValue;
        let compute=0;
        let sNum = 0.035274;
        function computeValue(){

            firstValue = parseInt(document.getElementById("Grams").value);
            

            compute = firstValue * sNum;
            document.getElementById("output").value = compute;
        }
        document.getElementById("bntcompute").addEventListener("click", computeValue);