
var ad = prompt("Adinizi giriniz : ");
var ogrno = prompt("Ogrenci no : ");
var cinsiyet = prompt("Cinsiyetinizi Giriniz : "); // erkek : true kadın : false
var ders = prompt("Ders adiniz : ");
var not1 = parseFloat(prompt("Not 1 : "));
var not2 = parseFloat(prompt("Not 2 : "));
var toplam = not1 + not2;
var ortalama = toplam / 2;

console.log(ogrno + " numarali " + ad + " (" + cinsiyet + ") " + " isimli ogrencinin " + ders + " dersinden aldigi ortalama " + ortalama);


/*
var marka = 10;
console.log(marka);

marka = prompt("marka giriniz: ");
console.log(marka);

var model = prompt("model giriniz: ");
console.log(marka+" "+model);
   var maxhiz=prompt("Maksimum hiz : ");
   
   var yakitdeposu =prompt("Yakit deposu kaç litre : ");
   console.log(yakitdeposu * 5.60);

   var otomatik = prompt("otomatik mi ? ");
   console.log(otomatik);

   console.log(marka+' '+yakitdeposu+'litre yakit deposuna sahip ve maksimum'+maxhiz+'km hiz yapmaktadir.'+' peki araç otomatik midir?'+otomatik);
  */ 