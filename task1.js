var arr = [];
function input_array() {
    let number = document.getElementById("number").value; // Получаем число из поля ввода

    arr.push(parseInt(number)); // Добавляем число в массив
    document.getElementById("array").innerText = arr.join(', '); // Выводим массив
    document.getElementById("number").value = ''; // Очищаем поле ввода

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            document.getElementById('result').innerHTML = 'Встречен положительный элемент';
            return
        } else if (arr[i] < 0) {
            document.getElementById('result').innerHTML = 'Встречен отрицательный элемент';
            return
        } else {
            document.getElementById('result').innerHTML = 'Отстутствуют положительные и отрицательные элементы';
        }
    }
}