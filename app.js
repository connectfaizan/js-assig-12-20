//         TASK 12 - 13 ( IF....ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS )

//         EX # 01

var caa = prompt("enter something");

if( "A"<=caa && caa<="Z"){
    document.write("uper case");
}
else if ("a"<=caa && caa<="z"){
    document.write("lower case" + '</br>' + '</br>');
}
else if(-9<=caa && caa<=9){
    document.write("Integer") + '</br>' + '</br>';
}
else{
    document.write("special character") + '</br>' + '</br>';
}

//          EX # 02

var amn = prompt("enter a first number");
var bmn = prompt("enter a second number");
if (amn == bmn){
    alert('Both are equal');
}else if( amn>bmn){
    alert(amn);
}else if(amn<bmn){
    alert(bmn);
}


//          EX # 03

var pi = prompt("enter a number");

if (pi > 0){
    alert("positive");
}else if( pi<0){
    alert("negative");
}else{
    alert("zero");
}

//          EX # 04

var aw = prompt("enter a first number");

if (aw == "a" || aw == "e" || aw == "i" || aw =="o" || aw =="u" || aw == "A" || aw == "E" || aw =="I" || aw == "O" || aw == "U"){
    alert("true");
}
else{
    alert("false");
}

//          EX # 05

var pas_w = 'zidane_10';
var pas_e = prompt('enter your password : ');
if (pas_e != ' '){
    if(pas_e == pas_w){
        alert('Correct! The password you entered matches the original password');
    }
    else{
        alert('Incorect Password');
    }
}
else{
    alert('enter the password please');
}

//          EX # 06

var greeting;
var hour = 13;
if(hour<18){
    alert(greeting="Good Day");
}
else{
    alert(greeting = "Good Evening");
}


//          EX # 07


var tqa = prompt("enter the time");

if (tqa>=0000 && tqa<1200){
    alert("Good Morning");
}
else if (tqa>=1200 && tqa<1700){
    alert("Good Afternoon");
}
else if(tqa>=1700 && tqa<2100){
    alert("Good Evening");
}
else if (tqa>=2100 && tqa<=2359){
    alert("Good Night");
}
else{
    alert("enter correct time");
}



//          TASK 14 - 16 ( ARRAYS )

//          EX # 01

stud_name = [];

//          EX # 02

var stu_name = new Array();

//          EX # 03

var str_ing = ['alfecido' , 'gelato' , 'robins'];

//          EX # 04
var num_ber = [1,2,3,4,5,6];

//          EX # 05
var bool_ean = ['True','False'];

//          EX # 06
var mi_xed = ['laMasia' , 10,'messi' , 36,'True'];

//          EX # 07

var qua_lifi_cation = ['SSC','HSC','BCS','BS','B.COM','MS','M.Phil.','PhD'];
document.write('QUALIFICATIONS');
for (var i = 0; i<qua_lifi_cation.length;i++){
    document.write( i  + " .. " + qua_lifi_cation[i] + + '</br>' + '</br>');
}

            // EX # 08

var st =  ['fas' , 'ahm' , 'sid'];
var cr = ['499','388','427'];

document.write('Score of ' + st[0] + ' is ' + cr[0] + '. Percenatge : ' +  ((cr[0] / 500 ) * 100) + '</br>' + '</br>');
document.write('Score of ' + st[1] + ' is ' + cr[1] + '. Percenatge : ' +  ((cr[1] / 500 ) * 100) + '</br>' + '</br>');
document.write('Score of ' + st[2] + ' is ' + cr[2] + '. Percenatge : ' +  ((cr[2] / 500 ) * 100) + '</br>' + '</br>');

//             EX # 09

var col_or$ = ['blue','yellow','red','pink','green'];
for (i=0;i<=col_or$.length;i++){
    document.write(col_or$[i] + '</br>');
}


var as_k = prompt('enter color you wanna add in array : ');
col_or$.unshift(as_k);
document.write(as_k + '</br>');


var ae_k = prompt('enter color you wanna add at the end : ');
col_or$.push(ae_k);
document.write( col_or$ + '</br>');

var as_k_1 =   prompt('enter color you wanna add in array : ');
col_or$.unshift(as_k_1);
document.write( col_or$ + '</br>');

col_or$.shift();
document.write( col_or$ + '</br>');

col_or$.pop();
document.write( col_or$ + '</br>');

a_d = prompt('at which index you wanna add : ');
a_d_c = prompt('enter color name: ');
col_or$[a_d] = a_d_c;
document.write( col_or$ + '</br>');

b_d = prompt('at which index you wanna remove : ');
b_d_c = prompt('enter nuber of color you wanna delete : ');
col_or$.splice(b_d , b_d_c);
document.write( col_or$ + '</br>');

document.write('</br>');


        //  EX # 10

var m_t = [320,236,396,402];
document.write('Students Marks : '+m_t + '<br>');
var m_t_1 = m_t.sort();
document.write('Students Marks in Ascending order : '+m_t_1 + '<br>');

//         EX # 11

var cities_1 = ['Karachi' ,'Islamabad','Lahore','Peshawar','Quetta'];
var selected_city  = [cities_1];

var x$ = selected_city.splice(2,2);


document.write('All cities : ' + cities_1 + '<br>');
document.write('Selected Cities : '+ x$ + '<br>' + '<br>');

//          EX # 12

var ar$ = ['This ','is ','my ','cat '];
document.write('Array  :' + '<br>');
document.write(ar$ + '<br>');
document.write('String : ' + '<br>');
document.write(ar$.join(' ')  + '<br>' + '<br>');

//          EX # 13

var x_w = ['keyboard','mouse','printer','monitor'];
document.write("Devices"+"<br>");
document.write(x_w);
document.write("<br>"+"<br>");
for(i=0;i<x_w.length;i++){
    document.write('Out :  ' + '<br>');
    document.write(x_w[i] + '<br>' + '<br>');
}

//          EX # 14

var d= ["keyboard","mouse","printer","monitor"];
document.write("Devices"+"<br>");
document.write(d);
document.write("<br>"+"<br>");
for(i=3;i>=0;i--){
    document.write("Out:"+"<br>");
    document.write(d[i]+"<br>" + "<br>");
}

//          EX # 15

var dist_$ = ['Nokia', 'Samsung','Apple','Motorolla','LG','Infinix','Techno','Oppo','Haier'];
document.write('SELECT A COMPANNY FROM DROP DOWN MENU' + '<br>');
for ( i = 0; i < dist_$.length ; i++){
    document.write((i+1)+'. '+dist_$[i] + '<br>' + '<br>');
}



        //  TASK 17 - 20 ( ARRAYS AND LOOP )

        //    EX # 01

var g$fg = new Array(2); 
  
document.write("Creating 2D array <br>" + '<br>');
for (var i = 0; i < g$fg.length; i++) { 
    g$fg[i] = new Array(2); 
} 
document.write('<br>' + '<br>');

//          EX # 02 

var gfg = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];
for (var i=0 ; i < gfg.length ; i++){
    document.write(gfg[i].join(' ') + '<br>');
}

document.write('<br>' + '<br>');


//          EX # 03

for(var z = 0; z < 11;z++){
    document.write(z + '<br>');
}
document.write('<br>' + '<br>');

//          EX # 04

var m_l_s = prompt('enter a number to show its multiplication table : ');
var s_l_m = prompt('enter te length of multiplication table : ');

document.write("<p style='font-size: 16px;'>Multiplication Table of  : </p>" +m_l_s+ '</br>');
document.write('Table Length : ' + s_l_m + '<br>');

for(o = 0; o<=s_l_m ; o++){
    document.write(m_l_s + ' x ' + o + ' = ' + m_l_s*o + '<br>' + '<br>');
}

//          EX # 05

var fruits_$ = ['apple', 'banana', 'mango', 'orange', 'strawberry'];
for(i = 0; i<fruits_$.length ; i++){
    document.write(fruits_$[i] + '<br>');
}
document.write('<br>' + '<br>');
for( j = 0 ; j<fruits_$.length; j++){
    document.write('Element at index ' + j + ' is ' + fruits_$[j] + '<br>' );
}
document.write('<br>' + '<br>');

//          EX # 07

document.write("<p style='font-size: 24px;'>Counting : </p>" + '</br>');
for(i = 1; i <= 15 ; i++){
    document.write(i + ', ');
}
document.write('<br>' + '<br>');
document.write("<p style='font-size: 24px;'>Reverse Counting : </p>"  + '</br>');
for(i = 10; i >= 1  ; i--){
    document.write(', ' + i);
}
document.write('<br>' + '<br>');
document.write("<p style='font-size: 24px;'>Even : </p>" + '</br>');
for(var s = 1; s <= 20 ; s++){
    if(s%2 == 0){
        document.write(s + ', ');
    }
}
document.write('<br>' + '<br>');
document.write("<p style='font-size: 24px;'>Odd : </p>" + '</br>');
for(var s = 1; s <= 20 ; s++){
    if(s%2 != 0){
        document.write(s + ', ');
    }
}
document.write('<br>' + '<br>');
document.write("<p style='font-size: 24px;'>Even : </p>" + '</br>');
for(var s = 1; s <= 20 ; s++){
    if(s%2 == 0){
        document.write(s + 'k, ');
    }
}

//          EX # 07

var zx = ["cake","apple pie","cookie","chips","patties"];
var zy = prompt("Welcome to ABC bakery What do you want to order sir/ma'am");

for(x=0; x<=4 ; x++){
    if(zx[x]==zy){
        document.write(zx[x]," ","is available at index"," ",x," " ,"in our bakery");
    }
   
}
if(zx[0]==zy || zx[1]==zy || zx[2]==zy || zx[3]==zy || zx[4]==zy){        
}
else if(zx[0]!=zy || zx[1]!=zy || zx[2]!=zy || zx[3]!=zy || zx[4]!=zy){
    document.write("We are Sorry" ," "+zy+" ","is not available in our bakery");
}

//          EX # 08

var r$ = [24, 53, 78, 91, 12];
document.write('Array Items : ' + r$ + '<br>');

var largest= 0;

for (i=0; i<=largest;i++){
    if (r$[i]>largest) {
        var largest=r$[i];
    }
}




document.write('The largest number in an array is : '+largest + '<br>' + '<br>');

//          EX # 09

var r$1 = [24, 53, 78, 91, 12];
document.write('Array Items : ' + r$1 + '<br>');

var largest1= 0;

for (i=0; i<=largest1;i++){
    if (r$1[i]>largest1) {
        var largest1=r$1[i];
    }
}



document.write('The largest number in an array is : '+largest1 + '<br>' + '<br>');

//          EX # 10

var may_10 = 5;
for(i=1;i<=20;i++){
    document.write(i*may_10+",");
}