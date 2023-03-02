let options = {
   size: {
     width: 100,
     height: 200
   },
   items: ["Cake", "Donut"],
   extra: true
 };
 
 // деструктуризация разбита на несколько строк для ясности
 let {
   size: { // положим size сюда
     width,
     height
   },
   items: [item1, item2], // добавим элементы к items
   title = "Menu" // отсутствует в объекте (используется значение по умолчанию)
 } = options;
 
 alert(title);  // Menu
 alert(width);  // 100
 alert(height); // 200
 alert(item1);  // Cake
 alert(item2);  // Donut