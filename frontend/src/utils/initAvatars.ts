//@ts-ignore
import M from 'materialize-css/dist/js/materialize.min.js';

function chooseAvatar() {
    // Choose the picture and set it as an avatar
    // Get the imgs
    let avatarImgs = document.getElementsByClassName('avatar-img');
    let modal = document.getElementById('modal1');

    function chooseImg(i: number) {
        let plusIcon = document.getElementsByClassName('img-icon')[0] as HTMLDivElement;
        let mainAvatar = document.getElementsByClassName('main-avatar')[0] as HTMLImageElement;
        plusIcon.style.display = 'none';
        mainAvatar.style.filter = 'unset';
        mainAvatar.src = (avatarImgs[i] as HTMLImageElement).src;
        var instance = M.Modal.getInstance(modal);
        instance.close();
        return mainAvatar.src;
    }

    for (let i = 0; i < avatarImgs.length; i++) {
        (avatarImgs[i] as HTMLImageElement).addEventListener('click', () => chooseImg(i));
    }
}

export default chooseAvatar;
