let generated = false;

function generatePattern() {
    let outputBox = document.getElementById("output");

    // If already generated → RESET
    if (generated) {
        outputBox.textContent = "";
        generated = false;
        return;
    }

    // Otherwise → GENERATE
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

    outputBox.textContent = output;
    generated = true;
}
