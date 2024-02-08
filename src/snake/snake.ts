import { Tuslar } from "../tuslar/tuslar";
import { Grid } from "../grid/grid";
import { Kutu } from "../grid/Kutu";

export class Snake {

    private yon: "sag" | "sol" | "yukari" | "asagi" = "sag";
    private kuyruk: Kutu[] = [];//Kutu listesi bize kuyruk kutularini saklamayi ve zamani gelince siyaha boyamayi sagliyacak
    private uzunluk: number = 10;//Eger kuyruk listesi uzunluktan kuçukse, demekki son kuyrugu silmemek gerekiyor

    constructor(public x: number, public y: number) {
        if (x <= 0 || x >= Grid.ENINE_KUTU_SAYISI || y <= 0 || y > Grid.BOYUNA_KUTU_SAYISI) {
            console.log("Snake ekrandan disarida olamaz, bunun için (0,0) a ayarlandi");

            this.x = 0;
            this.y = 0;
        }
    }

    public yenileme() {
        this.tuslariDinle();

        this.ilerle();

        if (this.kuyruk.length > this.uzunluk) {//Eger kuyruk kutusu listesi uzunluk tan uzunsa, ilk kutuyu ->shift<- methodu ile çikarip siyaha boyuyoruz
            this.kuyruk.shift()?.boya("black");
        }
    }

    public yemekYe() {
        this.uzunluk++;
    }
    public kuyrugaEkle(kafa: Kutu) {
        this.kuyruk.push(kafa);
    }

    private tuslariDinle() {
        //Eger sol tusa basiliysa ve yilanin yonu sag degilse: yilanin yonunu sol yap
        if (Tuslar.SOL_BASILI && this.yon !== "sag") this.yon = "sol"
        if (Tuslar.SAG_BASILI && this.yon !== "sol") this.yon = "sag"
        if (Tuslar.YUKARI_BASILI && this.yon !== "asagi") this.yon = "yukari"
        if (Tuslar.ASAGI_BASILI && this.yon !== "yukari") this.yon = "asagi"
    }

    private ilerle() {
        switch (this.yon) {
            case "sol": this.x--; break;
            case "sag": this.x++; break;
            case "yukari": this.y--; break;
            case "asagi": this.y++; break;
        }
    }

}