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
    // document.querySelector('title').innerHTML = langArr['unit'][hash];
    // document.querySelector('.lng-chip').innerHTML = langArr['chip'][hash];
    for (let key in langArr) {
        let elem = document.querySelector('.lng-' + key);
        if (elem) {
            elem.innerHTML = langArr[key][hash];
        }

    }
}

const langArr = {
    "unit" :  {
        "ru": "создаем многоязычный сайт",
        "en": "build a multi language site ",
        "ua": "створюємо багатомовний сайт",
    }, 
    "chip": {
        "ru": "графический чип",
        "en": "graphics processing unit",
        "ua": "графічний чіп",
    }, 
    "memory": {
        "ru": "объем памяти",
        "en": "memory size",
        "ua": "oбсяг пам'яті",
    }, 
    "memory-type": {
        "ru": "тип памяти",
        "en": "memory type",
        "ua": "nип пам'яті",
    }, 
    "cool": {
        "ru": "тип системы охлаждения",
        "en": "сooling system type",
        "ua": "тип системи охолодження",
    }, 
    "more": {
        "ru": "детально о товаре",
        "en": "more details",
        "ua": "детально про товар",
    }, 
}
changeLanguage();
