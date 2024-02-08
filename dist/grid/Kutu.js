export class Kutu {
    constructor(x, y, en, boy) {
        this.x = x;
        this.y = y;
        this.en = en;
        this.boy = boy;
        this.renk = "black"; //Bunlarin ingilizce olmasi onemli zira tarayicinin arayuzu bu renkleri, okuyarak anliyor
        //Private demek oluyorki bu (div) FIELD'i sadece bu class içinde gorunuyor, test edersen gorursun, burda this.(div) onerisi yapiyor
        //, programin baska yerlerinde sadece public tipi FIELD'lar gorunuyor, bu da disarida bilinmesi gereksiz olan seyleri saklayarak, gelisimi hizlandirip hatalari onluyor
        this.div = document.createElement("div");
        this.cizimiBaslat();
    }
    //Her saniye belli sayida yenileme oluyor, her yenilemede objelerin yenileme methodu çalistirilir ki degisiklikler kaydedilsin
    yenileme() {
        const { div, en, boy, renk, x, y } = this;
        div.style.backgroundColor = renk; //Kutunun arka planini renk ile degistigimiz takdirde bir nevi kutuyu boyamis oluyoruz
        div.style.left = x * en + "px";
        div.style.top = y * boy + "px";
    }
    boya(yeniRenk) {
        this.renk = yeniRenk;
    }
    kuyrukMu() {
        return this.renk === "green";
    }
    yemMi() {
        return this.renk === "red";
    }
    bosMu() {
        return this.renk === "black";
    }
    //Ileri seviye fonksiyonlar, web sitesinde div turunden care bloklar olusturup arka planlarinin rengini degistiriyoruz kisaca
    cizimiBaslat() {
        const { div, en, boy, x, y } = this; // BURADA const ({ div, en, boy }) = this diyerek, this içindeki ->div, en, boy<- FIELD'lerini (div, en, boy) diye bir lokal degiskene atiyorum
        //KISACA her seferinde (this.div) yazmak yerine, sadece (div) yazarak (this.div) yazmis gibi oluyoruz
        document.body.appendChild(div);
        div.style.width = en + Kutu.ARA_BOSLUK * x + "px";
        div.style.height = boy + Kutu.ARA_BOSLUK * y + "px";
        div.style.position = "absolute";
    } // <---- LOKAL degiskenler burada silinir, yani kisaca sadece bu blok içine ozel, her blok için aynidir
}
Kutu.ARA_BOSLUK = 1; //IKI KUTU ARASINDA KAC pixel BOSLUK OLSUN
