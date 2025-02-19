//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str) {
  if (str === "")
    return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n > длина строки - ничего делать не надо)
function truncate(str, n) {
  if (str.length > n)
    return str.slice(0, n) + '...';
  return str;
}

//Определите, пуст ли объект
function isEmpty(obj) {
  if (Object.entries(obj).length === 0)
    return true;
  return false;
}

//Напишите функцию, умножающую численные свойства на 2
function multiply(obj) {
  for (let key in obj) {
    if (typeof obj[key] == 'number') {
      obj[key] *= 2;
    }
  }
  return obj;
}

//Напишите функцию, считающую сумму всех элементов массива (желательно использовать reduce)
function sumArr(arr) {
  return arr.reduce((a,b) => a + b);
}

//Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str) {
  if (str === str.split("").reverse().join(""))
    return true;
  return false;
}

module.exports = {
  capitalize,
  truncate,
  isEmpty,
  multiply,
  sumArr,
  isPali
};
