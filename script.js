function generatePattern() {
    let output = "";

    for (let i = 1; i <= 5; i++) {
        for (let j = 1; j <= 5; j++) {

            if (i === 1 || i === 5 || j === 1) {
                output += "* ";
            } else {
                output += "  ";
            }

        }
        output += "\n";
    }

    document.getElementById("output").textContent = output;
}