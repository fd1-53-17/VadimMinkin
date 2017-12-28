var str = prompt("Введите полиндром");
str = str.toLowerCase().split("!").join("").split("?").join("").split(" ").join("").split(",").join("").split(".").join("").split("-").join("").split('"').join("");
if(str == str.split("").reverse().join("")){
    alert("Это палиндром!");
}else {
    alert("Это не палиндром");
}
