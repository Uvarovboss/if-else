var button = document.getElementById('insend');
button.onclick = function() {
	var input = document.getElementById('input').value;
	season(input);
}
	function season(inpu) {
		switch (inpu){
			case '1':
			document.getElementById('season').innerHTML = "Зима";
			break;
			case '2':
			document.getElementById('season').innerHTML = "Весна";
			break;
			case '3':
			document.getElementById('season').innerHTML = "Лето" ;
			break;
			case '4':
			document.getElementById('season').innerHTML = "Осень";
			break;
		}
	}



var btn = document.getElementById('send');

btn.onclick= function() {
	var inp = +document.getElementById('num').value;
	var inp2 = +document.getElementById('num2').value;
	number(inp,inp2)
}
function number(inpp,inpp2) {
	if ( inpp<=1 && inpp2>=3 ) {
	document.getElementById('sum').innerHTML=inpp+inpp2;
}
else{
	document.getElementById('sum').innerHTML=inpp-inpp2;
}
}
//Цыкл
var whil = document.getElementById('whi');
whil.onclick = function () {
	var i = 11;
while(i < 34){
	document.getElementById('while').innerHTML+=i + " ";
	i++;
}


}

//Проверка на стринг
var typebtn = document.getElementById('typebtn');
typebtn.onclick=function () {
	var type = document.getElementById('typeof').value;
	prov(type);
}
function prov (type1) {
if (Number(type1)) {
	document.getElementById('string').innerHTML = " Вы ввели:Число";
}else{
	document.getElementById('string').innerHTML = " Вы ввели:Строка";
}
}



var ob = document.getElementById('obj');
ob.onclick = function() {

	var object = new Object();			

	console.log(object);
var inb = document.getElementById('inbtn');
inb.onclick = function () {
	var key = document.getElementById('inobj1').value;
	var val = document.getElementById('inobj2').value;
	object[key]= val;
	
	console.log(object);
}
var del = document.getElementById('del');
del.onclick = function () {
	var delval = document.getElementById('delet').value;
	delete object[delval];
		console.log(object);
}
var protbt = document.getElementById('protobtn');
protbt.onclick = function () {
	var ob2 = new Object();
	object.__proto__=ob2;
	console.log(object);

	// var vl = {}
	// var pr = document.getElementById('proto').value;
	 // vl = document.getElementById('proto1').va;
	// object.__proto__ = vl;
	// console.log(object);
}
var dele = document.getElementById('delpr');
dele.onclick = function () {
	delete object.__proto__;
}

}
