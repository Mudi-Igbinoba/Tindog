// Remember to import the data and Dog class!
import dogs from './data.js';
import Dog from './Dog.js';

const getDogObject = () => {
    let currentDog = dogs.pop();
    return currentDog ? new Dog(currentDog) : null;
};

let dog = getDogObject();

const render = () => {
    if (!dog) {
        document.querySelector('main').innerHTML = `
                                                    <p class='notify'>
                                                        No more dogs are available at this time. Try again next time!
                                                    </p>
                                                    <img
                                                        src="images/logo.png"
                                                        alt="Tindog logo"
                                                        class="header-icon logo"
                                                    />
                                                `;
    } else {
        document.getElementById('profile').innerHTML = dog.setDogDisplay();
    }
};

render();

const renderActions = () => {
    dog.hasBeenSwiped = true;
    document.getElementById('badge').innerHTML = dog.setActionDisplay();

    if (dog.hasBeenSwiped) {
        setTimeout(() => {
            dog = getDogObject();
            render();
        }, 1250);
    }
};

document.getElementById('nope-btn').addEventListener('click', () => {
    dog.hasBeenLiked = false;
    renderActions();
});

document.getElementById('like-btn').addEventListener('click', () => {
    dog.hasBeenLiked = true;
    renderActions();
});
