const name = "Timur Gabaidulin";
const headingElement = document.querySelector(".name-heading");

function typeOutNameWithMistake() {
    let currentText = "";
    let mistakeMade = false;
    let mistakeFixed = false;
    let mistakeIndex = 10; // Position of the 'i' in Gabaidulin
    let index = 0;

    function typeNextChar() {
        if (index < name.length) {
            if (index === mistakeIndex && !mistakeMade) {
                currentText += "j"; // Make the mistake by typing 'j' instead of 'i'
                headingElement.textContent = currentText;
                mistakeMade = true;
                setTimeout(() => {
                    currentText = currentText.slice(0, -1); // Remove the 'j'
                    headingElement.textContent = currentText;
                    setTimeout(() => {
                        currentText += "i"; // Correct the mistake by typing 'i'
                        headingElement.textContent = currentText;
                        mistakeFixed = true;
                        index++; // Continue to the next character
                        setTimeout(typeNextChar, 100); // Resume normal typing speed
                    }, 200); // Short pause before correcting
                }, 500); // Hold for 0.5 seconds before backspacing
            } else {
                currentText += name[index]; // Type the next character
                headingElement.textContent = currentText;
                index++;
                setTimeout(typeNextChar, 100); // Adjust speed as desired
            }
        }
        
    }

    typeNextChar();
}

document.addEventListener("DOMContentLoaded", () => {
    typeOutNameWithMistake();
    
    // Trigger staggered animation for social icons
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach((icon, index) => {
        icon.style.animationDelay = `${0.5 + (index * 0.2)}s`;
    });
});