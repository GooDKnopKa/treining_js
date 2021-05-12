var arr_num = [1,2,3,4,5,6,7,8,9,0]
var arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var arr_EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var arr_symb = ['!', '@', '#', '$', '%', '&', '?', '-', '+', '=', '~'];


// Ползунок - длина массива
document.getElementById('param-1').oninput = function () {
    // console.log(this.value);
    document.getElementById('password-length').innerHTML = this.value;
}

generatePass() // Запуск при открытии сайта/Страницы сайта

document.getElementById('generator').onclick = generatePass

function generatePass() {
    // console.log(111);
    var result = [];

    // Проверка селектора на активность
    // Селектор числа
    if(document.getElementById('param-2').checked) {
        result = result.concat(arr_num);
    }
    else {
        var err1 = 'Селектор |Число| не выбран'
    }

    // Проверка селектора на активность
    // Селектор Строчные буквы
    if(document.getElementById('param-3').checked) {
        result = result.concat(arr_en);
    }
    else {
        var err2 = 'Селектор |Строчные буквы| не выбран'
    }

    // Проверка селектора на активность
    // Селектор Прописные буквы
    if(document.getElementById('param-4').checked) {
        result = result.concat(arr_EN);
    }
    else {
        var err3 = 'Селектор |Прописные буквы| не выбран'
    }

    
    // Селектор Спецсимволы
    if(document.getElementById('param-5').checked) { // Проверка селектора на активность
        var result = result.concat(arr_symb);
    }
    else {
        var err4 = 'Селектор |Спецсимволы| не выбран'
        
    }

    result.sort(compareRandom) // Перемешать значения

    // console.log(result, err1, err2, err3, err4);
    // console.log(result, err4);

    document.getElementById('out').innerHTML = null
    for (var k = ''; k < 5; k++) {
        // document.getElementById('out').innerHTML = ''
        var pass = ''; // Объявление переменной
        var passDlina = parseInt(document.getElementById('param-1').value) // Длина пароля
        for (var i = 0; i < passDlina; i++) {
            pass +=result[randomInteger(0, result.length - 1)]
        }
        // console.log(pass)
        document.getElementById('out').innerHTML += '<p>' + pass + '</p>'
    }
}

// Сама функция рандома
function compareRandom(a, b) {
    return Math.random() - 0.5;
}

function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand)
    return rand
}

// console.log(result, err1, err2, err3, err4); var работает только внутри объявленного блока. Вне его работать не будет