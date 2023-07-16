export const frame = () => {
    let link = "https://aplaydemo2.yellowslot.games/game/fullstate/html5/novomatic/bookofra/?project=250&user_id=bc416bdc-96ca-4ebd-9789-f68772a6607b&demo=1&wid=1&s=eee56f996df9f103bd78bb5e02f533c5",
        button = document.querySelector('.button_game');

    const findAndRemovePictures = (pictures) => {
        let allPictures = document.querySelectorAll(pictures);
        allPictures.forEach(item => {
            item.remove();
        })
    }

    const createIframe = (blocks) => {
        let iframes = document.createElement('iframe'),
        block = document.querySelector(blocks);

        iframes.innerHTML = "<iframe>"
        iframes.setAttribute('src', link);
        block.appendChild(iframes);

        return iframes;
    }

    button.addEventListener('click', () => {
        findAndRemovePictures('.blocks__picture');
        createIframe('.blocks__frame');
    });

    
}