import { Kutu } from "../grid/Kutu";
export declare class Snake {
    x: number;
    y: number;
    private yon;
    private kuyruk;
    private uzunluk;
    constructor(x: number, y: number);
    yenileme(): void;
    yemekYe(): void;
    kuyrugaEkle(kafa: Kutu): void;
    private tuslariDinle;
    private ilerle;
}
//# sourceMappingURL=snake.d.ts.map