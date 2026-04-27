function generatePattern() {

    let ch = document.getElementById("charInput").value.toUpperCase(); 
    let output = "";

    for (let i = 1; i <= 5; i++) {
        for (let j = 1; j <= 5; j++) {

            let printStar = false;

            switch(ch) {

                case 'A':
                    if (j === 3 || i === 3 || (j === 1 && i > 1) || (j === 5 && i > 1))
                        printStar = true;
                    break;

                case 'B':
                    if (j === 1 || ((i === 1 || i === 3 || i === 5) && j < 5) || (j === 5 && (i === 2 || i === 4)))
                        printStar = true;
                    break;

                case 'C':
                    if (i === 1 || i === 5 || j === 1)
                        printStar = true;
                    break;

                default:
                    output = "Invalid Input";
                    document.getElementById("output").textContent = output;
                    return;
            }

            output += printStar ? "* " : "  ";
        }
        output += "\n";
    }

    document.getElementById("output").textContent = output;
}
