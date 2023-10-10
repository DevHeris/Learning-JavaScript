let x;
let d = new Date();

x = d.toString();

x = d.getTime();
x = d.valueOf();

x = d.getFullYear(); //2023

x = d.getMonth();//8 which is zero-based i.e september
x = d.getMonth() + 1;//9 if you want it to just give you the actual month

x = d.getDate(); //15

x = d.getDay(); //5 and the Day is zero based too with sunday being 0

x = d.getHours();// 1 for 1am

x = d.getMinutes(); //8 for 1:08

x = d.getSeconds(); // 16 

x = d.getMilliseconds(); // 485

//Constructing the dates from these methods

x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`; //2023-9-15


//API for formating date
x = Intl.DateTimeFormat('en-US').format(d); //9 / 15 / 2023
x = Intl.DateTimeFormat('en-GB').format(d); //15 / 09 / 2023 ie for UK it puts the date first  .This is more nigerian style 

x = Intl.DateTimeFormat('default').format(d); //Your default locale

x = Intl.DateTimeFormat('default', { month: "long" }).format(d);//September
//OR here's a shorter method without the API
x = d.toLocaleString('default', { month: "short" }); //sep


//In the end he said its better to construct your date this way because its more location specific and can be easily formatted 
x = d.toLocaleString('default', {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZone: 'America/New_York', //I dont know my own time zone. lol
})

console.log(x);