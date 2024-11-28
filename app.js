const langArr = {
    "unit": {
        "en": "build a multi language site ",
        "uk": "створюємо багатомовний сайт",
    }, 
    "vk1":{
        "en": "Hello1",
        "uk": "Привіт1", 
    },
    "pr":{
        "en": "Hello2",
        "uk": "Привіт2", 
    },
    "fb":{
        "en": "Hello3",
        "uk": "Привіт3", 
    },
    "chip": {
        "en": "graphics processing unit",
        "ua": "графічний чіп",
    }, 
    "memory": {
        "en": "memory size",
        "uk": "oбсяг пам'яті",
    }, 
    "memory-type": {
        "en": "memory type",
        "uk": "nип пам'яті",
    }, 
    "cool": {
        "en": "сooling system type",
        "uk": "тип системи охолодження",
    }, 
    "more": {
        "en": "more details",
        "uk": "детально про товар",
    }, 
}

const maxImg = document.querySelector('.right-panel img');
const select = document.querySelector('select');
const allLang = ['en', 'uk', ];

document.querySelectorAll('.left-panel img').forEach(item => item.onmouseenter = (event) => maxImg.src = event.target.src);

select.addEventListener('change', changeURLLanguage);

// перенаправити на url із зазначенням мови
function changeURLLanguage() {
    let lang = select.value;
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}

function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substr(1);
    console.log(hash);
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + '#uk';
        location.reload();
    }
    select.value = hash;
     document.querySelector('title').innerHTML = langArr['unit'][hash];
    // document.querySelector('.lng-chip').innerHTML = langArr['chip'][hash];
    for (let key in langArr) {
        let elem = document.querySelector('.lng-' + key);
        if (elem) {
            elem.innerHTML = langArr[key][hash];
        }

    }
}

changeLanguage();
