const sonadEestiKeeles=[
    'teostus',
    'algoritm',
    'kavand',
    'kasutajaliides',
    'mudel',
    'andmebaasi skeem',
    'standart',
    'tsükel',
    'andmetöötlus',
    'andmestruktuur',
    'arenduskeskond',
    'projektihaldus tööriist',
    'kavandamine',
    'iteratsioon',
    'parandus'
];
const sonadVeneKeeles=[
    'реализация',
    'алгоритм',
    'план',
    'пользовательский интерфейс',
    'модель',
    'схема базы данных',
    'стандарт',
    'цикл',
    'обработка данных',
    'структура данных',
    'среда разработки',
    'инструмент управления проектом',
    'планирование',
    'итерация',
    'исправление'
];

function randomSona(){
    const randId = Math.floor(Math.random() * sonadEestiKeeles.length);
    const sona = sonadEestiKeeles[randId];
    document.getElementById('randomSonad').innerHTML = sona;
    document.getElementById('hiddenInput').value = randId;
}

function kontroll(){
    const randId = document.getElementById('hiddenInput').value;
    const vastus = document.getElementById('kontroll').value.toLowerCase();;

    if (vastus === sonadVeneKeeles[randId]){
        document.getElementById('vastus').innerHTML = "<span style=\"color: green;\">Õige!</span>";
    } else {
        document.getElementById('vastus').innerHTML = "<span style=\"color: red;\">Vale!</span>";
    }
}