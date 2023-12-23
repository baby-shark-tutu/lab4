var arr = [];
function input_array() {
    let length = parseInt(prompt('Введите длину массива'));
    for (let i = 0; i < length; i++) {
        let number = parseInt(prompt('Введите элемент массива'));
        arr.push(parseInt(number)); // Добавляем число в массив
    }
    document.getElementById("array").innerText = arr; // Выводим массив
}

function delete_elements() {    
    // Подсчет количества вхождений каждого элемента
    let counts = {};
    for (let num of arr) {
        if (num in counts) {
            counts[num] += 1;
        } else {
            counts[num] = 1
        }
    }

    // Удаление элементов, встречающихся менее 3 раз
    for (let i = 0; i < arr.length; i++) {
        if (counts[arr[i]] < 3) {
            arr.splice(i, 1);
            i--;
        }
    }

    // Вывод размера полученного массива и сам массив
    document.getElementById('result1').innerHTML = arr.length;
    document.getElementById('result2').innerHTML = arr;
}