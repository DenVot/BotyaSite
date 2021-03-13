let navPan = document.querySelector('.nav-panel');
let navWrapper = document.getElementById('nav-wrapper');
let phoneMenu = document.querySelector('.phone-menu');

let isAlreadyCreated = false;

let currentElement = document.querySelector('.nav-panel');

function CreateDropButton () {
    let stage = 0;
    navPan.remove();    
    let dropButton = document.createElement('img');
    navWrapper.style.paddingRight = 10 + 'px';
    dropButton.src = "/Images/DropMenuButton.svg";
    dropButton.style.cursor = 'pointer';
    navWrapper.appendChild(dropButton);    
    let menu = document.createElement('div');
    let menuList = document.createElement('ul');
    menuList.style.listStyleType = 'none';     
    menuList.style.textAlign = 'center';
    menuList.innerHTML += '<li><a href="/index.html">Главная</a></li>';
    menuList.innerHTML += '<li><a href="/Pages/CommandsPage/index.html">Команды</a></li>';   
    menuList.innerHTML += '<li><a href="/Pages/PiarPage/index.html">Взаимопиар</a></li>' ;
    menuList.innerHTML += '<li><a href="https://discord.gg/p6R4yk7uqK">Сервер</a></li>';
    menuList.innerHTML += '<li><a href="https://discord.com/oauth2/authorize?client_id=749991391639109673&scope=bot&permissions=1573583991">Пригласить</a></li>';
    menu.appendChild(menuList);
    
    dropButton.onclick = function() {        
        if(stage == 0) {
            dropButton.animate([
                {transform: 'rotate(-90deg)'}
            ], {duration: 200, fill: 'forwards', easing: 'ease-in-out'})
            phoneMenu.appendChild(menu);
            stage = 1;                        
        }else if(stage == 1){
            dropButton.animate([
                {transform: 'rotate(0deg)'}
            ], {duration: 200, fill: 'forwards', easing: 'ease-in-out'})
            stage = 0;
            menu.remove();
        }
    }
    isAlreadyCreated = true;

    currentElement = dropButton;
}

if(GetWidth() <= 1024) {
    CreateDropButton();
}

window.onresize = function() {
    
    if(GetWidth() <= 1024 && !isAlreadyCreated) {        
        currentElement.remove();
        CreateDropButton();
    } else if(isAlreadyCreated && GetWidth() > 1024) {        
        currentElement.remove();
        let navPanel = document.createElement('ul');
        navPanel.classList.add('nav-panel');
        navPanel.innerHTML += '<li><a href="/index.html">Главная</a></li>';
        navPanel.innerHTML += '<li><a href="/Pages/CommandsPage/index.html">Команды</a></li>';
        navPanel.innerHTML += '<li><a href="/Pages/PiarPage/index.html">Взаимопиар</a></li>';
        navPanel.innerHTML += '<li><a href="https://discord.gg/p6R4yk7uqK">Сервер</a></li>';
        navPanel.innerHTML += '<li><a href="https://discord.com/oauth2/authorize?client_id=749991391639109673&scope=bot&permissions=1573583991">Пригласить</a></li>';
        isAlreadyCreated = false;
        currentElement = navPanel;
        navWrapper.appendChild(navPanel);
    }
}

function GetWidth() {
    return window.innerWidth;
}