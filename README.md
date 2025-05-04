# goit-js-hw-01

// Перевірка коректності роботи функції:
console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"

/**
==**Гарячі клавіші для розгортання JSDoc-коментаря у VS Code**==
1. Переконайтеся, що курсор знаходиться НАД !!! функцією, змінною або класом.
2. Введіть /** і натисніть `Enter` або `Tab`.  
    VS Code автоматично розгорне коментар за шаблоном JSDoc
    
Якщо потрібно просто вставити багаторядковий коментар, виділіть рядки коду та натисніть:
- **Windows/Linux:** `Shift + Alt + A`
Ця комбінація вставить або прибере `/* */` навколо вибраного коду.



Задачі
1.
function getFileName(file) {
    const fileSpotCss = file.indexOf("."); //-рядок з крапкою
    if (fileSpotCss === -1) {             //якщо неіснує рядка з крапкою
        return file;            //повертаємо оригінал рядок
    } else {
        return file.slice(0, fileSpotCss); //обрізаємо рядок до крапки
    }
}
// return fileSpotcss === -1 ? file : file.slice(0, fileSpotcss); 

console.log(getFileName("index.js")) // "index".
console.log(getFileName("app")) // "app"
console.log(getFileName("styles.css")) // "styles"
console.log(getFileName("index")) // "index"
console.log(getFileName("index.html")) // "index"
console.log(getFileName("app.js")) // "app"
console.log(getFileName("index.css")) // "index"