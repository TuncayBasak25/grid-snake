import { Tuslar } from "../tuslar/tuslar";
import { Grid } from "../grid/grid";
export class Snake {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.yon = "sag";
        this.kuyruk = []; //Kutu listesi bize kuyruk kutularini saklamayi ve zamani gelince siyaha boyamayi sagliyacak
        this.uzunluk = 10; //Eger kuyruk listesi uzunluktan kuçukse, demekki son kuyrugu silmemek gerekiyor
        if (x <= 0 || x >= Grid.ENINE_KUTU_SAYISI || y <= 0 || y > Grid.BOYUNA_KUTU_SAYISI) {
            console.log("Snake ekrandan disarida olamaz, bunun için (0,0) a ayarlandi");
            this.x = 0;
            this.y = 0;
        }
    }
    yenileme() {
        var _a;
        this.tuslariDinle();
        this.ilerle();
        if (this.kuyruk.length > this.uzunluk) { //Eger kuyruk kutusu listesi uzunluk tan uzunsa, ilk kutuyu ->shift<- methodu ile çikarip siyaha boyuyoruz
            (_a = this.kuyruk.shift()) === null || _a === void 0 ? void 0 : _a.boya("black");
        }
    }
    yemekYe() {
        this.uzunluk++;
    }
    kuyrugaEkle(kafa) {
        this.kuyruk.push(kafa);
    }
    tuslariDinle() {
        //Eger sol tusa basiliysa ve yilanin yonu sag degilse: yilanin yonunu sol yap
        if (Tuslar.SOL_BASILI && this.yon !== "sag")
            this.yon = "sol";
        if (Tuslar.SAG_BASILI && this.yon !== "sol")
            this.yon = "sag";
        if (Tuslar.YUKARI_BASILI && this.yon !== "asagi")
            this.yon = "yukari";
        if (Tuslar.ASAGI_BASILI && this.yon !== "yukari")
            this.yon = "asagi";
    }
    ilerle() {
        switch (this.yon) {
            case "sol":
                this.x--;
                break;
            case "sag":
                this.x++;
                break;
            case "yukari":
                this.y--;
                break;
            case "asagi":
                this.y++;
                break;
        }
    }
}
