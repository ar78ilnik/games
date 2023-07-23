export const frame = () => {
    let link = "https://demo.monkeyboxsrv.com/demo/fullstate/html5/novomatic/bookofrahd",
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
        iframes.setAttribute('class', 'iframe');
        block.appendChild(iframes);

        return iframes;
    }

    button.addEventListener('click', () => {
        //findAndRemovePictures('.blocks__picture');
        createIframe('.blocks__frame');
    });   
}