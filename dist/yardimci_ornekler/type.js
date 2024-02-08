"use strict";
const bu_bir_sayidir = 9; //ayni anlama geliyor
const bu_baska_sayidir = 4;
//-> [] <- liste olusturmak için ve liste turu tipleri belirtmek için kullanilir
const bu_bir_sayi_listesi = []; //DIKKAT ET sayi DIYORUM CUNKU sayi TIPINI number tipi ile ayni anlama getirdim!
const isim = "Tuncay"; //Ayni sekilde
const baska_isim = "Ibrahim";
////////////////////////////////////////////////////////////////////////--//->Bos bir yazi dizisi de olabilir ->""<-
const bu_bir_yazi_listesi = [isim, baska_isim, "Pala", "Seyfo", ""]; //Bir yazi(string) listesi olusturup içine yazilari bu sekilde koyabilirsin
//Listeler teorik olarak sonsuzdur, yani bilgisayarin hafisazi sinirsiz olmasa bir listeye sonsuza kadar ekleme yapabilirsin
const bos_bir_liste = []; //Bu liste farkindaysan ->any<- tipi ile olusturuldu, any herhangi demek, yani içine ne istersen koyabilirsin
let bir_sey; //Dikkat ->let<- kullandim yani bu degisebilir, ama const degismez, mesela isim="Tuncay" artik programin sonuna kadar oyle kalacak
bir_sey = 5; //içne sayi koydum;
bir_sey = "lol"; //yazi dizisi koydum;
bir_sey = []; //bos bir liste koydum...
let bir_yazi; //simdi bir_yazi degiskeninin içine her turlu yaziyi koyabilirim, ama baska bir sey koyamam
bir_yazi = "hey"; //OK // bir_yazi=5 -> Error: yazi degiskenine sayi koyamazsin
const meyve_listesi = []; //Bos bir meyve listesi
meyve_listesi.length; //lenth FIELD'i bahsi geçen listede, yani .length yazdigin listede kaç tane sey oldugunu soyler
console.log(`Meyve listesinde ${meyve_listesi.length} meyve var`); //=>>> Meyve listesinde 0 meyve var. // zira bos liste, ve hiç ekleme yapmadik, yani length=0
//->.push<- eger degisken bir listeyse, o listeye parantez içinde yazilan itemleri ekler, itemler listenin tipiyle ayni olmalidir// meyve_listesi.push(5) =>>> ERROR
meyve_listesi.push("armut", "mandalina"); //meyve listesine armut ve mandalina ekledi, yani artik meyve_listesi.length => 2 oldu
meyve_listesi.push("portakal"); // Artik meyve_listesinde 3 tane Meyve tipinde item var: ["armut", "mandalina", "portakal"] => bu sekilde yani
//->pop<- methodu listenin en son elemanini çikarir ve sana verir;
const son_eleman = meyve_listesi.pop(); //Far edersen son_eleman degiskeninin tipi (Meyve | undefined) oldu, yani ya bir meyve ya da hiç bir sey, çunku program
//çalisirken liste bos olabilir ve bos bir listenin son elemani hiç bir sey degildir
//Ama biz biliyoruz ki bu programda meyve_listesi'nin son elemani, "portakal" Meyvesi;
//Yani asagidaki test gerçek(true) çikacak,
/// (==) ya da (===) iki seyin ayni olup olmadigina bakar mesela (5 == 5) => true/dogru ("ahmet" == "mehmet") => false/yanlis
// (===) 3 tane koymanin ince bir sebebi var, ("25") ve (25) biri string digeri number ama ("25" == 25) => true halbuki ("25" === 25) => false yani (===) tipleride ayni olmali
if (son_eleman === "portakal") { //Gerçek çiktigina gore bu ilk blok yururluge(execute) girecek, yani çalisacak
    console.log("Son eleman bir portakal");
    console.log(`Meyve listesinde artik ${meyve_listesi.length} meyve kaldi`); //=>>> Meyve listesinde artik 2 meyve kaldi// çunku ->pop<- methoduyla son meyveyi çikardik
}
else { //Eger son eleman "portakal" olmasaydi
    console.log("Son eleman bir portakal degil");
}
// (!=) Ayni degil, (5 != 3) => true ("kes" != "kes") => false/yanlis (34 !== "34") => true (34 != "34") => false
// (>) Buyuktur (5 > 3) => true, (2 > 6) => false
// (<) Kuçuktur (3 < 9) => true, (7 < 2) => false
// (>=) Buyuktur ya da aynidir (15 > 15) => false (20 >= 20) => true
// (<=) Kuçuktur ya da aynidir (7 < 7) => false, (7 <= 7) => true
// (&&) VE mantik eki, a ve b dogru ise dogru verir, (3 > 1 && 5 == "5") bu ikisi dogru yani sonuç dogru
// (||) YADA matik eki, a yada b dogru ise dogru verir, (3 > 1 || 8 == 3) biri dogru yani sonuç dogru, (2 == 3 || 5 < 3) ikiside yanlis yani sonuç yanlis
// (!) TERSLEME mantik eki, a dogru ise yanlis verir, ya da tam tersi, !(3 > 1) dogru yani sonuç yanlis, !(15 == 5) yanlis yani sonuç dogru
let yasim = 29; //Yasim 29
let ehliyetim_var = true; // Ehliyetim var sozu dogru bir soz
if (ehliyetim_var || yasim >= 18) {
    console.log("Eger ehliyetim varsa zaten resitim, yani (yasim >= 18) hiç test edilmez bile yoksa bir bakalim yasim 18'in ustunde mi, evet yani resitim");
}
else {
    console.log("Resit degilim");
}
if (ehliyetim_var && yasim < 18) {
    console.log("Bu iste bir bit yenigi var!");
}
else {
    console.log("Tabiki ehliyetim var sozu ile yasim < 18 ayni anda dogru olamaz");
}
