import { Snake } from "../snake/snake";
import { Tuslar } from "../tuslar/tuslar";
import { Kutu } from "./Kutu";
export class Grid {
    constructor() {
        this.kutuListesi = [];
        for (let x = 0; x < Grid.ENINE_KUTU_SAYISI; x++) {
            for (let y = 0; y < Grid.BOYUNA_KUTU_SAYISI; y++) {
                this.kutuListesi.push(new Kutu(x, y, Grid.KUTU_GENISLIGI, Grid.KUTU_GENISLIGI));
            }
        }
        this.snake = new Snake(10, 10);
    }
    yenileme() {
        this.snake.yenileme();
        const kafa = this.kutu(this.snake.x, this.snake.y);
        if (kafa.kuyrukMu()) { //Kafa kuyruga çarpti
            console.log("oyun bitti!");
        }
        if (kafa.yemMi()) {
            this.snake.yemekYe();
        }
        kafa.boya("green");
        this.snake.kuyrugaEkle(kafa);
        for (const kutu of this.kutuListesi) { //Her kutuyu teker teker yeniliyoruz ve bunu her FRAME'de yapiyoruz, bir FRAME bir filim seridi gib...
            kutu.yenileme();
        }
        Tuslar.yenileme();
    }
    kutu(x, y) {
        return this.kutuListesi[x * Grid.ENINE_KUTU_SAYISI + y];
    }
    yeniYemYerlestir() {
        while (true) { //Bu sonsuz bir dongudur, yeni yem için kuyruk olmayan bir kutu bulana kadar dongu tekrar eder
            const rastgele_x = Math.floor(Math.random() * Grid.ENINE_KUTU_SAYISI);
            const rastgele_y = Math.floor(Math.random() * Grid.BOYUNA_KUTU_SAYISI);
            const rastgele_kutu = this.kutu(rastgele_x, rastgele_y);
            if (rastgele_kutu.bosMu()) { //Eger bu kutu bos ise yem ile dolar ve sonsuz dongu break ile bozulur
                rastgele_kutu.boya("red");
                break; //Dongu bozulur
            }
            //Dongu tekrar baslar
        }
    }
}
Grid.KUTU_GENISLIGI = 20; //Kutularin genisligi
Grid.ENINE_KUTU_SAYISI = 1200 / Grid.KUTU_GENISLIGI; //1200 pixel genisliginde olsun oyun ekrani
Grid.BOYUNA_KUTU_SAYISI = 800 / Grid.KUTU_GENISLIGI; //800 pixel boyunda olsun oyun ekrani
