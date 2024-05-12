// Get the DOM Elements
const gameContainer = document.querySelector(".container"),
userResult = document.querySelector(".user_result img"),
cpuResult =  document.querySelector(".cup_result img"),
result = document.querySelector(".result"),
optionImages = document.querySelectorAll(".option_image");

//loop through each option image element
optionImages.forEach((image, index) => {
    image.addEventListener("click", (e) => {
        image.classList.add("active");
        
        userResult.src = cpuResult.src = "images/rock.png";
        result.textContent = "Wait.."

        //loop through each option image again
        optionImages.forEach((image2, index2) => {
            //if the current index dosent match the clicked index
            //remove the "active" class from the other images
            index !== index2 && image2.classList.remove("active");
        });
        gameContainer.classList.add("start");

        // Set a timeout to delay the result calculation
        let time = setTimeout(() =>{
            gameContainer.classList.remove("start");
            // Get the source of the clicker option image
            let imageSrc = e.target.querySelector("img").src;
            // Set the user image to the cliced option image
            userResult.src = imageSrc;

            //Generate a random number between 0 and 2
            let randomNumber = Math.floor(Math.random() * 3);
            // Create an array of CPU image options
            let cpuImages = ["images/rock.png", "images/papier.png", "images/scissors.png"];
            cpuResult.src =cpuImages[randomNumber];
            //Assing a letter value to the CPU option (R for rock, P Papier, S scissor)
            let cpuValue =["R" , "P" , "S"][randomNumber];
            //Assing a letter value to the clicked option (based on index)
            let userValue = ["R", "P", "S"][index];
            // Create an object wit all possible outcomes
            let outcomes = {
                RR: "Draw",
                RP: "Cpu",
                RS: "User",
                PP: "Draw",
                PR: "Cpu",
                PS: "User",
                SS: "Draw", 
                SR: "Cpu",
                SP: "User",
            };
            //look up thr outcome value based on user and CPU options
            let outComeValue = outcomes[userValue + cpuValue];
            //Dispaly the result
            result.textContent = userValue == cpuValue ? "Match Draw" : `${outComeValue} Won!!`;
            console.log(outComeValue);
        },2500) ;
    });    
});