type KutuRengi = "black" | "green" | "red";

export class Kutu {
    static ARA_BOSLUK = 1 //IKI KUTU ARASINDA KAC pixel BOSLUK OLSUN

    public renk: KutuRengi = "black" //Bunlarin ingilizce olmasi onemli zira tarayicinin arayuzu bu renkleri, okuyarak anliyor

    constructor(
        public x: number,
        public y: number,
        public en: number,
        public boy: number
    ) {
        this.cizimiBaslat();
    }


    //Her saniye belli sayida yenileme oluyor, her yenilemede objelerin yenileme methodu çalistirilir ki degisiklikler kaydedilsin
    public yenileme() {
        const { div, en, boy, renk, x, y } = this;
        div.style.backgroundColor = renk; //Kutunun arka planini renk ile degistigimiz takdirde bir nevi kutuyu boyamis oluyoruz

        div.style.left = x * en + "px";
        div.style.top = y * boy + "px";
    }

    public boya(yeniRenk: KutuRengi) {
        this.renk = yeniRenk;
    }

    public kuyrukMu(): boolean {//Bunun sayesinde bu kutu yesil mi, yani yilan mi degil mi ogrenebilirsin: mesela if (kutu.kuyrukMu) { "bu bir kuyruk" } else { "kuyruk degil" }
        return this.renk === "green";
    }

    public yemMi(): boolean {//Bunun sayesinde bu kutu kirmizimi yani yem mi diye ogrenebilirsin
        return this.renk === "red";
    }

    public bosMu(): boolean {//Bunun sayesinde bu kutu bos mu degil mi ogrenebilirsin
        return this.renk === "black";
    }

    //Private demek oluyorki bu (div) FIELD'i sadece bu class içinde gorunuyor, test edersen gorursun, burda this.(div) onerisi yapiyor
    //, programin baska yerlerinde sadece public tipi FIELD'lar gorunuyor, bu da disarida bilinmesi gereksiz olan seyleri saklayarak, gelisimi hizlandirip hatalari onluyor
    private div: HTMLDivElement = document.createElement("div");
    //Ileri seviye fonksiyonlar, web sitesinde div turunden care bloklar olusturup arka planlarinin rengini degistiriyoruz kisaca
    private cizimiBaslat() {// <---- LOKAL degiskenler buradan bunun sonuna yani 31. siraya kadar geçerli, sonra siliniyor
        const { div, en, boy, x, y } = this; // BURADA const ({ div, en, boy }) = this diyerek, this içindeki ->div, en, boy<- FIELD'lerini (div, en, boy) diye bir lokal degiskene atiyorum
                                //KISACA her seferinde (this.div) yazmak yerine, sadece (div) yazarak (this.div) yazmis gibi oluyoruz
        document.body.appendChild(div);

        div.style.width = en + Kutu.ARA_BOSLUK * x + "px";
        div.style.height = boy + Kutu.ARA_BOSLUK * y + "px";

        div.style.position = "absolute";
    }// <---- LOKAL degiskenler burada silinir, yani kisaca sadece bu blok içine ozel, her blok için aynidir
    //if (true) {
    //  Burasi da bir blok mesela eger burada bir degisken atasam, sonunda silinir
    //}
}