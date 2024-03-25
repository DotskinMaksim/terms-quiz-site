const sonadEestiKeeles=[
    //esimese masiivi loomine
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
    'parandus',
    'koskmudel',
    'agiiline mudel',
    'spiraalne mudel',
    'inkrementaalne mudel',
    'nõudmised',
    'realiseerimine',
    'integreerimine',
    'kasutamine',
    'hooldus',
    'eelised',
    'puudused',
    'elutsükkel',
    'arendamine',
    'valideerimine'




];
const sonadVeneKeeles=[
    //teise masiivi loomine
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
    'исправление',
    'каскадная модель',
    'гибкая модель',
    'спиральная модель',
    'инкрементальная модель',
    'требования',
    'реализация',
    'интеграция',
    'использование',
    'обслуживание',
    'преимущества',
    'недостатки',
    'жизненный цикл',
    'разработка',
    'Проверка'
];


function randomSona(){
    // metood võta juhuslik sõna
    const randId = Math.floor(Math.random() * sonadEestiKeeles.length);
    const sona = sonadEestiKeeles[randId];
    document.getElementById('randomSonad').innerHTML = sona;
    document.getElementById('hiddenInput').value = randId;
}

function kontroll(){
    //metood mis kontrollib vastus
    const randId = document.getElementById('hiddenInput').value;
    const vastus = document.getElementById('kontroll').value.toLowerCase();;

    if (vastus === sonadVeneKeeles[randId]){
        document.getElementById('vastus').innerHTML = "<span style=\"color: green;\">Õige!</span>";
    } else {
        document.getElementById('vastus').innerHTML = "<span style=\"color: red;\">Vale!</span>";
    }
}