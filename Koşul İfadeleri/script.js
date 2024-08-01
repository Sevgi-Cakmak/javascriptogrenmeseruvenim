var marka = 'Opel';
var model = 'Astra';
var otomatik = 'yes';


/*  if / else statement */

 if (otomatik == 'yes') {
    console.log('araç otomatiktir.');
 }else{
    console.log('araç otomatik değildir.');
 }
 otomatik = true ;
 if(otomatik){
    console.log(marka+ ' '+model+' otomatik ');
 }
if(otomatik == true){
    console.log("true");
}
if(10=='10') {
    console.log('sayilar eşit');
}

/* swich statement */ 

var vites = '3';

if(vites == '1' ){
    console.log('araç manuel');
}else if (vites == '2'){
    console.log('araç otomatiktir.');
}else {
    console.log('yanliş  bir değer ');
}

vites='3';
switch(vites){
    case '1':
        console.log('araç manuel');
        break;
        case '2':
            console.log('araç otomatik');
            break;
            default:
                console.log('yanliş değer');
}
