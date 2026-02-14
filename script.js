// // let noClicks = 1;
// // const maxNoClicks = 4;
// // const minNoScale = 0.65;
// // let noScale = 1;
// // let yesScale = 1; // This now tracks the scaling factor directly
// // const gifElement = document.getElementById("togepi-gif");
// // const noButton = document.getElementById("no-btn");
// // const yesButton = document.getElementById("yes-btn");
// // const buttonContainer = document.querySelector(".btn-container");
// // const yesButtonStyle = window.getComputedStyle(yesButton);
// // const maxYesWidth = parseFloat(yesButtonStyle.maxWidth);

// // // array of gifs - in order
// // const gifs = ["assets/images/togepi-happy.gif", "assets/images/funny.gif", "assets/images/cat-cat-crying.gif", "assets/images/ng.gif", "assets/images/freeze-yoru.gif"];
// // // array of messages
// // const buttonMessages = ["yessss ko toiii yessss", " please betuuuuuuuu", "BUBU PLEASE Na BUU BUU !!!!", "NO Koise taii NOOO BUUUBUUU , betuuuuuuu!"];

// // // no button clicked
// // noButton.addEventListener("click", () => {
// //     if (noClicks <= maxNoClicks) {
// //         // change image
// //         gifElement.src = gifs[noClicks];
// //     }

// //     // change no button text
// //     noButton.textContent = buttonMessages[noClicks % maxNoClicks];

// //     // Adjust button width to fit text
// //     noButton.style.width = 'auto';
// //     noButton.style.width = `${noButton.scrollWidth}px`;

// //     // decrease the size of the no button
// //     if (noScale > minNoScale) {
// //         noScale -= 0.1;
// //         noButton.style.transform = `scale(${noScale})`;
// //     }

// //     // Calculate the scaled width of the yesButton
// //     const baseWidth = parseFloat(yesButtonStyle.width);
// //     const scaledWidth = baseWidth * yesScale; // Reflects the actual visual size of the button

// //     console.log(`Scaled Width: ${scaledWidth}, Max Width: ${maxYesWidth}`);

// //     // Check if the scaled width is less than the max width
// //     if (scaledWidth < maxYesWidth) {
// //         yesScale += 0.5; // Increment scale by a smaller step
// //         yesButton.style.transform = `scale(${yesScale})`;

// //         // Get the current gap scale factor from CSS
// //         const rootStyles = getComputedStyle(document.documentElement);
// //         const gapScaleFactor = parseFloat(rootStyles.getPropertyValue("--gap-scale-factor")) || 250;

// //         // Adjust the gap dynamically
// //         const currentGap = parseFloat(buttonContainer.style.gap) || 20;
// //         const newGap = Math.sqrt(currentGap * gapScaleFactor); // Scale based on the factor
// //         buttonContainer.style.gap = `${newGap}px`;
// //     }

// //     // increment the number of clicks
// //     noClicks++;
    
// //     // when last no click happens → make background black


// // });

let noClicks = 1;
const maxNoClicks = 4;
const minNoScale = 0.65;
let noScale = 1;
let yesScale = 1; // This now tracks the scaling factor directly

const gifElement = document.getElementById("togepi-gif");
const noButton = document.getElementById("no-btn");
const yesButton = document.getElementById("yes-btn");
const buttonContainer = document.querySelector(".btn-container");
const yesButtonStyle = window.getComputedStyle(yesButton);
const maxYesWidth = parseFloat(yesButtonStyle.maxWidth);

// 🔊 AUDIO (added only)
const noSound = new Audio("assets/audio/mc.mp3");
const yesSound = new Audio("assets/audio/ok.mp3");
noSound.preload = "auto";
yesSound.preload = "auto";

// array of gifs - in order
const gifs = [
    "assets/images/togepi-happy.gif",
    "assets/images/funny.gif",
    "assets/images/cat-cat-crying.gif",
    "assets/images/ng.gif",
    "assets/images/freeze-yoru.gif"
];

// array of messages
const buttonMessages = [
    "yessss ko toiii yessss",
    " please betuuuuuuuu",
    "BUBU PLEASE Na BUU BUU !!!!",
    "NO Koise taii NOOO BUUUBUUU , betuuuuuuu!"
];

// no button clicked
noButton.addEventListener("click", () => {

    // 🔊 play no sound
    noSound.currentTime = 0;
    noSound.play().catch(() => {});

    if (noClicks <= maxNoClicks) {
        // change image
        gifElement.src = gifs[noClicks];
    }

    // change no button text
    noButton.textContent = buttonMessages[noClicks % maxNoClicks];

    // Adjust button width to fit text
    noButton.style.width = 'auto';
    noButton.style.width = `${noButton.scrollWidth}px`;

    // decrease the size of the no button
    if (noScale > minNoScale) {
        noScale -= 0.1;
        noButton.style.transform = `scale(${noScale})`;
    }

    // Calculate the scaled width of the yesButton
    const baseWidth = parseFloat(yesButtonStyle.width);
    const scaledWidth = baseWidth * yesScale;

    console.log(`Scaled Width: ${scaledWidth}, Max Width: ${maxYesWidth}`);

    // Check if the scaled width is less than the max width
    if (scaledWidth < maxYesWidth) {
        yesScale += 0.5;
        yesButton.style.transform = `scale(${yesScale})`;

        const rootStyles = getComputedStyle(document.documentElement);
        const gapScaleFactor = parseFloat(
            rootStyles.getPropertyValue("--gap-scale-factor")
        ) || 250;

        const currentGap = parseFloat(buttonContainer.style.gap) || 20;
        const newGap = Math.sqrt(currentGap * gapScaleFactor);
        buttonContainer.style.gap = `${newGap}px`;
    }

    // increment the number of clicks
    noClicks++;

    // when last no click happens → make background black
});

// yes button clicked — 🔊 sound added
yesButton.addEventListener("click", () => {
    yesSound.currentTime = 0;
    yesSound.play().catch(() => {});
});

