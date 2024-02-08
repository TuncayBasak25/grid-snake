//(STATIC) anahtar kelimesi modele/class'a ozel bir FIELD olusturur, buna (Tuslar.YUKARI_BASILDI) seklinde ulasabilirsin, bu class'i hic (new Tuslar()) seklinde kullanmiyacaz
export class Tuslar {
    static yenileme() {
        Tuslar.SOL_BASILDI = false;
        Tuslar.SAG_BASILDI = false;
        Tuslar.YUKARI_BASILDI = false;
        Tuslar.ASAGI_BASILDI = false;
        Tuslar.SOL_KALDIRILDI = false;
        Tuslar.SAG_KALDIRILDI = false;
        Tuslar.YUKARI_KALDIRILDI = false;
        Tuslar.ASAGI_KALDIRILDI = false;
    }
}
//SU AN BASILDI, BU FRAME'DE TRUE OLUR, RESET METHODU SAYESINDE HER FRAME TEKRAR SIFIRLANIR, TUSA ILK BASILDIGI AN BIR SEY YAPMAK ICIN
Tuslar.SAG_BASILDI = false;
Tuslar.SOL_BASILDI = false;
Tuslar.YUKARI_BASILDI = false;
Tuslar.ASAGI_BASILDI = false;
//TUSA BASILDIKTAN SONRA SUREKLI AKTIF/TRUE KALIR, KALDIRILDIGI FRAME FALSE OLUR
Tuslar.SAG_BASILI = false;
Tuslar.SOL_BASILI = false;
Tuslar.YUKARI_BASILI = false;
Tuslar.ASAGI_BASILI = false;
//KALDIRILDIGI AN  FRAME AKTIF/TRUE KALIR
Tuslar.SAG_KALDIRILDI = false;
Tuslar.SOL_KALDIRILDI = false;
Tuslar.YUKARI_KALDIRILDI = false;
Tuslar.ASAGI_KALDIRILDI = false;
///Burasi ileri seviye bir seyler ama kisacasi tuslari alan bir fonksyon
//KEYDOWN yani BASILDIGI AN bu eventi tetiklenir
document.addEventListener("keydown", (ev) => {
    switch (ev.code) {
        case "37":
            Tuslar.SOL_BASILDI = Tuslar.SOL_BASILI = true;
            break;
        case "38":
            Tuslar.YUKARI_BASILDI = Tuslar.YUKARI_BASILDI = true;
            break;
        case "39":
            Tuslar.SAG_BASILDI = Tuslar.SAG_BASILDI = true;
            break;
        case "40":
            Tuslar.ASAGI_BASILDI = Tuslar.ASAGI_BASILDI = true;
            break;
    }
});
//KALDIRILDIGI AN BU TETIKLENIR
document.addEventListener("keyup", (ev) => {
    switch (ev.code) {
        case "37":
            Tuslar.SOL_KALDIRILDI = true;
            Tuslar.SOL_BASILI = false;
            break;
        case "38":
            Tuslar.YUKARI_KALDIRILDI = true;
            Tuslar.YUKARI_BASILDI = false;
            break;
        case "39":
            Tuslar.SAG_KALDIRILDI = true;
            Tuslar.SAG_BASILDI = false;
            break;
        case "40":
            Tuslar.ASAGI_KALDIRILDI = true;
            Tuslar.ASAGI_BASILDI = false;
            break;
    }
});
