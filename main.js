let randomCards = [];
let randomCardIndex = -1;


const firstScreen = document.querySelector('#first_screen')
const secondScreen = document.querySelector('#second_screen')
const omen = document.querySelector('#omen_screen')
const meditationMain = document.querySelector('#meditation_main')
const meditationDrawn = document.querySelector('#meditation_drawn')
const meditationParable = document.querySelector('#meditation_parable')
const meditationExplantation = document.querySelector('#meditation_explantation')
const relationMain = document.querySelector('#relation_main')
const relationDrawn = document.querySelector('#relation_drawn')
const relationParable = document.querySelector('#relation_parable')
const relationExplantation = document.querySelector('#relation_explantation')
const inAndOutDrawn = document.querySelector('#inAndOut_drawn')
const inAndOutParable = document.querySelector('#inAndOut_parable')
const inAndOutExplantation = document.querySelector('#inAndOut_explantation')

const goToScreen = (screen) => {
    const screens = [firstScreen, secondScreen, omen, meditationMain, meditationDrawn, meditationParable, meditationExplantation, relationMain, relationDrawn, relationParable, relationExplantation, inAndOutDrawn, inAndOutParable, inAndOutExplantation];
    
    screens.forEach(screen => screen.style.display = 'none');

    document.querySelector(`#${screen}`).style.display = 'flex';
}



const audioStop = () => {
    const audios = document.querySelectorAll('audio');
    audios.forEach((audio) => {
        audio.currentTime = 0;
        audio.pause();
    })

    console.log('audio stop')
}

const goToMenu = () => {
    randomCardIndex = -1;
    audioStop();
    goToScreen('omen_screen');
}


firstScreen.querySelector('.next').addEventListener('click', () => {
    const welcomeSound = secondScreen.querySelector('audio');
    welcomeSound.src = "/Instruction Sound/Jak używać Kart Przemiany.mp3";
    
    audioStop();

    welcomeSound.play()
    goToScreen('second_screen')
})


firstScreen.querySelector('.play').addEventListener('click', () =>{
    const welcomeSound = firstScreen.querySelector('audio');
    welcomeSound.src = "/Instruction Sound/Wprowadzenie.mp3";
    welcomeSound.play();
})
firstScreen.querySelector('.menu').addEventListener('click', () => {
    audioStop()
    goToMenu()
})
secondScreen.querySelector('.next').addEventListener('click', () => goToMenu())
secondScreen.querySelector('.prev').addEventListener('click', () => {
    audioStop();
    const welcomeSound = firstScreen.querySelector('audio')
    welcomeSound.src = "/Instruction Sound/Wprowadzenie.mp3";
    welcomeSound.play()
    goToScreen('first_screen')
})

omen.querySelector('.prev').addEventListener('click', () => {
    const welcomeSound = secondScreen.querySelector('audio')
    welcomeSound.src = "/Instruction Sound/Jak używać Kart Przemiany.mp3";
    welcomeSound.play();
    goToScreen('second_screen')
})

omen.querySelector('.meditation').addEventListener('click', () => {
    const audioInstruction = meditationMain.querySelector('.instruction_sound');
    audioInstruction.src = "/Instruction Sound/Medytacja.mp3";
    audioInstruction.play();
    goToScreen('meditation_main')})

omen.querySelector('.relation').addEventListener('click', () => {
    const audioInstruction = relationMain.querySelector('.instruction_sound');
    audioInstruction.src = "/Instruction Sound/Relacja.mp3";
    audioInstruction.play();
    goToScreen('relation_main')
})

omen.querySelector('.inAndOut').addEventListener('click', () => {

    randomCards = [];
    while (randomCards.length < 5) {
        const randomIndex = Math.floor(Math.random() * cards.length);
        const randomElement = cards[randomIndex]
        if (randomCards.indexOf(randomElement) === -1) {
            randomCards.push(randomElement)
        }
    };
    const imgInAndOutImg = inAndOutDrawn.querySelector('#inAndOut_drawn img')
    imgInAndOutImg.src = randomCards[0].image
    audioStop();
    const instructionSound = inAndOutDrawn.querySelector('audio')
    instructionSound.src = '/Instruction Sound/Wnętrze i Zewnętrze.mp3';
    instructionSound.play()
    goToScreen('inAndOut_drawn')



})

inAndOutDrawn.querySelector('.menu').addEventListener('click', () => goToMenu());
inAndOutDrawn.querySelector('.next').addEventListener('click', () => {
    audioStop();
    goToNextInAndOutParable()
});
inAndOutParable.querySelector('.next').addEventListener('click', () => goToNextInAndOutExplantation());
inAndOutParable.querySelector('.menu').addEventListener('click', () => goToMenu());
inAndOutParable.querySelector('.prev').addEventListener('click', () => goToPrevInAndOutParable())
inAndOutExplantation.querySelector('.next').addEventListener('click', () => goToNextInAndOutParable());
inAndOutExplantation.querySelector('.menu').addEventListener('click', () => goToMenu());
inAndOutExplantation.querySelector('.prev').addEventListener('click', () => goToPrevInAndOutExplantation());

const goToNextInAndOutParable = () => {
    if (randomCardIndex === 4) {
        return goToMenu();
    }
    randomCardIndex = randomCardIndex + 1;
    const imginAndOut = inAndOutParable.querySelector('img');
    imginAndOut.src = randomCards[randomCardIndex].image;
    const audioParable = inAndOutParable.querySelector('.parable_sound');
    audioParable.src = randomCards[randomCardIndex].parable_sound;
    const textinAndOut = inAndOutParable.querySelector('.parable_text');
    textinAndOut.innerText = randomCards[randomCardIndex].parable_text;
    const audioExplantation = inAndOutExplantation.querySelector('.explantation_sound');
    audioExplantation.pause();
    audioParable.play();
    goToScreen('inAndOut_parable');
}

const goToPrevInAndOutParable = () =>{
    if(randomCardIndex === 0){
        
        const imgInAndOutImg = inAndOutDrawn.querySelector('#inAndOut_drawn img')
        imgInAndOutImg.src = randomCards[0].image
        audioStop();
        const instructionSound = inAndOutDrawn.querySelector('audio')
        instructionSound.src = '/Instruction Sound/Wnętrze i Zewnętrze.mp3';
        instructionSound.play()
        goToScreen('inAndOut_drawn');
    }
    randomCardIndex = randomCardIndex - 1;

    const imginAndOut = inAndOutExplantation.querySelector('img');
    imginAndOut.src = randomCards[randomCardIndex].image;

    audioStop();

    const audioExplantation = inAndOutExplantation.querySelector('.explantation_sound');
    audioExplantation.src = randomCards[randomCardIndex].explantation_sound;
    audioExplantation.play()

    const textinAndOut = inAndOutExplantation.querySelector('.explantation_text');
    textinAndOut.innerText = randomCards[randomCardIndex].explantation_text;
    


    goToScreen('inAndOut_explantation')
}

const goToNextInAndOutExplantation = () => {
    const imginAndOut = inAndOutExplantation.querySelector('img');
    imginAndOut.src = randomCards[randomCardIndex].image;
    const audioExplantation = inAndOutExplantation.querySelector('.explantation_sound');
    audioExplantation.src = randomCards[randomCardIndex].explantation_sound;
    const textinAndOut = inAndOutExplantation.querySelector('.explantation_text');
    textinAndOut.innerText = randomCards[randomCardIndex].explantation_text;
    const audioParable = inAndOutParable.querySelector('.parable_sound');
    audioParable.src = randomCards[randomCardIndex].parable_sound;
    audioParable.pause();
    audioExplantation.play()

    goToScreen('inAndOut_explantation')

}

const goToPrevInAndOutExplantation = () =>{
    audioStop();

    const textinAndOut = inAndOutParable.querySelector('.parable_text');
    textinAndOut.innerText = randomCards[randomCardIndex].parable_text;

    const audioParable = inAndOutParable.querySelector('.parable_sound');
    audioParable.src = randomCards[randomCardIndex].parable_sound;
    audioParable.play();


    goToScreen('inAndOut_parable')
}




meditationMain.querySelector('.menu').addEventListener('click', () => goToMenu())

meditationMain.querySelector('.next').addEventListener('click', () => {
    
    randomCards = [];
  
    goToScreen('meditation_drawn');

    const randomIndex = Math.floor(Math.random() * cards.length);
    randomCards.push(cards[randomIndex]);

    const imgMeditation = meditationDrawn.querySelector('#meditation_drawn img');
    imgMeditation.src = randomCards[0].image;

    const imgParable = meditationParable.querySelector('#meditation_parable img');
    imgParable.src = randomCards[0].image;

    const imgExplantation = meditationExplantation.querySelector('#meditation_explantation img');
    imgExplantation.src = randomCards[0].image;

    const audioParable = meditationParable.querySelector('.parable_sound');
    audioParable.src = randomCards[0].parable_sound;

    const audioExplantation = meditationExplantation.querySelector('.explantation_sound');
    audioExplantation.src = randomCards[0].explantation_sound;

    const parableMeditation = meditationParable.querySelector('.parable_text');
    parableMeditation.innerText = randomCards[0].parable_text;

    const explantationMeditation = meditationExplantation.querySelector('.explantation_text');
    explantationMeditation.innerText = randomCards[0].explantation_text;
   
    const audioInstruction = meditationMain.querySelector('.instruction_sound');
    audioInstruction.src = "/Instruction Sound/Medytacja.mp3";
    audioInstruction.stop();

})


meditationDrawn.querySelector('.menu').addEventListener('click', () => goToMenu())
meditationDrawn.querySelector('.prev').addEventListener('click', () => {
    const audioInstruction = meditationMain.querySelector('.instruction_sound');
    audioInstruction.src = "/Instruction Sound/Medytacja.mp3";
    audioInstruction.play();
    goToScreen('meditation_main');
    
})


meditationDrawn.querySelector('.next').addEventListener('click', () => {
    goToScreen('meditation_parable');
    const audioParable = meditationParable.querySelector('.parable_sound');
    audioParable.play();
})

meditationParable.querySelector('.menu').addEventListener('click', () => goToMenu())
meditationParable.querySelector('.prev').addEventListener('click', () => {
    goToScreen('meditation_main');
    audioStop();
})
meditationParable.querySelector('.next').addEventListener('click', () => {
    goToScreen('meditation_explantation');
    const audioExplantation = meditationExplantation.querySelector('.explantation_sound');
    const audioParable = meditationParable.querySelector('.parable_sound');
    audioParable.currentTime = 0;
    audioParable.pause();
    audioExplantation.play();
})

meditationExplantation.querySelector('.menu').addEventListener('click', () => goToMenu())
meditationExplantation.querySelector('.prev').addEventListener('click', () => {
    goToScreen('meditation_parable')})
    const audioExplantation = meditationExplantation.querySelector('.explantation_sound');
    const audioParable = meditationParable.querySelector('.parable_sound');
    audioExplantation.currentTime = 0;
    audioExplantation.pause();
    audioParable.play();


relationMain.querySelector('.menu').addEventListener('click', () => goToMenu())
relationMain.querySelector('.next').addEventListener('click', () => {
    goToScreen('relation_drawn')
})



relationMain.querySelector('.next').addEventListener('click', () => {
    goToScreen('relation_drawn')
    randomCards = [];
    while (randomCards.length < 4) {
        const randomIndex = Math.floor(Math.random() * cards.length);
        const randomElement = cards[randomIndex]
        if (randomCards.indexOf(randomElement) === -1) {
            randomCards.push(randomElement)
        }
    }


    const imgRelation = relationDrawn.querySelectorAll('#relation_drawn img');
    randomCards.forEach((card, index) => {
        imgRelation[index].src = card.image;
        imgRelation[index].addEventListener('click', () => {
            randomCardIndex = index - 1;
            goToNextRelationParable();
        })
    })
    const audioInstruction = relationMain.querySelector('.instruction_sound');
    audioInstruction.src = "/Instruction Sound/Relacja.mp3";
    audioInstruction.stop();
})


const goToNextRelationParable = () => {
    if (randomCardIndex > 3) {
        return goToMenu()
    }
    randomCardIndex = randomCardIndex + 1;
    const imgParable = relationParable.querySelector('img');
    imgParable.src = randomCards[randomCardIndex].image;
    const textParable = relationParable.querySelector('.parable_text');
    textParable.innerText = randomCards[randomCardIndex].parable_text;
    const audioParable = relationParable.querySelector('.parable_sound');
    audioParable.src = randomCards[randomCardIndex].parable_sound;
    audioParable.play();
    goToScreen('relation_parable');

}

const goToPrevRelationParable = () => {
    if (randomCardIndex === 0) {
        return goToMenu();
    }

    randomCardIndex = randomCardIndex - 1;

    const imgExplantation = relationExplantation.querySelector('img');
    imgExplantation.src = randomCards[randomCardIndex].image;
    const textExplantation = relationExplantation.querySelector('.explantation_text');
    textExplantation.innerText = randomCards[randomCardIndex].explantation_text;
    const audioExplantation = relationExplantation.querySelector('.explantation_sound');
    audioExplantation.src = randomCards[randomCardIndex].explantation_sound;
    const audioParable = relationParable.querySelector('.parable_sound');
    audioParable.src = randomCards[randomCardIndex].parable_sound;
    audioParable.currentTime = 0;
    audioParable.pause();
    audioExplantation.play();
    goToScreen('relation_explantation')
}

const goToPrevRelationExplantation = () => {

    const imgParable = relationParable.querySelector('img');
    imgParable.src = randomCards[randomCardIndex].image;
    const textParable = relationParable.querySelector('.parable_text');
    textParable.innerText = randomCards[randomCardIndex].parable_text;
    const audioParable = relationParable.querySelector('.parable_sound');
    audioParable.src = randomCards[randomCardIndex].parable_sound;
    audioParable.play();
    goToScreen('relation_parable')
}

const goToNextRelationExplantation = () => {
    const imgExplantation = relationExplantation.querySelector('img');
    imgExplantation.src = randomCards[randomCardIndex].image;
    const textExplantation = relationExplantation.querySelector('.explantation_text');
    textExplantation.innerText = randomCards[randomCardIndex].explantation_text;
    const audioExplantation = relationExplantation.querySelector('.explantation_sound');
    audioExplantation.src = randomCards[randomCardIndex].explantation_sound;
    const audioParable = relationParable.querySelector('.parable_sound');
    audioParable.src = randomCards[randomCardIndex].parable_sound;
    audioParable.currentTime = 0;
    audioParable.pause();
    audioExplantation.play();
    goToScreen('relation_explantation');
}

relationDrawn.querySelector('.next').addEventListener('click', goToNextRelationParable)
relationDrawn.querySelector('.menu').addEventListener('click', () => goToMenu(omen));
relationDrawn.querySelector('.prev').addEventListener('click', () => {
    audioStop();
    goToScreen('relation_main')})
relationParable.querySelector('.next').addEventListener('click', goToNextRelationExplantation);
relationParable.querySelector('.menu').addEventListener('click', goToMenu);
relationParable.querySelector('.prev').addEventListener('click', goToPrevRelationParable);
relationExplantation.querySelector('.next').addEventListener('click', goToNextRelationParable);
relationExplantation.querySelector('.menu').addEventListener('click', goToMenu);
relationExplantation.querySelector('.prev').addEventListener('click', goToPrevRelationExplantation);





