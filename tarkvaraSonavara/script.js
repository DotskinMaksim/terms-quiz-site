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
    // metood võta juhuslik sõna eesti keelse masiivist
    const randId = Math.floor(Math.random() * sonadEestiKeeles.length);
    const sona = sonadEestiKeeles[randId];
    document.getElementById('randomSonad').innerHTML = sona;
    document.getElementById('hiddenInput').value = randId;
}
function randomSona2(){
    // metood võta juhuslik sõna aga vene keelse masiviist
    const randId = Math.floor(Math.random() * sonadVeneKeeles.length);
    const sona = sonadVeneKeeles[randId];
    document.getElementById('randomSonad2').innerHTML = sona;
    document.getElementById('hiddenInput2').value = randId;
}


function kontroll(){
    //metood mis kontrollib vastus
    const randId = document.getElementById('hiddenInput').value; //võtame sõna masiivis id
    const vastus = document.getElementById('kontroll').value.toLowerCase();; // võtame kasutaja vastust


    // kui vastus on vene keelse masiivis

    if (vastus === sonadVeneKeeles[randId]){
        document.getElementById('vastus').innerHTML = "<span style=\"color: green;\">Õige!</span>";//siis koreektne
    } else {
        document.getElementById('vastus').innerHTML = "<span style=\"color: red;\">Vale!</span>";// kui vastupidi siis ebakoreektne
    }
}
function kontroll2(){
    //metood mis kontrollib vastus
    const randId = document.getElementById('hiddenInput2').value; //võtame sõna masiivis id
    const vastus = document.getElementById('kontroll2').value.toLowerCase();;// võtame kasutaja vastust

    // kui vastus on eesti keelse masiivis
    if (vastus === sonadEestiKeeles[randId]){
        document.getElementById('vastus2').innerHTML = "<span style=\"color: green;\">Правильно!</span>"; //siis koreektne
        // kui vastupidi siis ebakoreektne
    } else {
        document.getElementById('vastus2').innerHTML = "<span style=\"color: red;\">Не правильно!</span>";
    }
}