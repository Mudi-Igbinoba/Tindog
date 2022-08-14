// Create the Dog class here
class Dog {
    constructor(data) {
        //assign data from data.js to this
        Object.assign(this, data);
    }
    setDogDisplay() {
        const { name, age, bio, avatar } = this;
        return `
                <div class='fade-in'>
                    <img
                        src="${avatar}"
                        alt="Profile Picture"
                        class="avatar"
                    />

                    <div id="badge">
                    </div>

                    <div class="profile-info">
                        <h1>${name}, ${age}</h1>
                        <p>${bio}</p>
                    </div>
                </div>
                
        `;
    }

    setActionDisplay() {
        const { hasBeenSwiped, hasBeenLiked } = this;
        let action;

        hasBeenLiked && hasBeenSwiped
            ? (action = `<img src="images/badge-like.png" alt="like badge" class=""/>`)
            : !hasBeenLiked && hasBeenSwiped
            ? (action = `<img src="images/badge-nope.png" alt="nope badge" class=""/>`)
            : (action = '');

        return action;
    }
}

export default Dog;
