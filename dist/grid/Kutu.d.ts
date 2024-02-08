type KutuRengi = "black" | "green" | "red";
export declare class Kutu {
    x: number;
    y: number;
    en: number;
    boy: number;
    static ARA_BOSLUK: number;
    renk: KutuRengi;
    constructor(x: number, y: number, en: number, boy: number);
    yenileme(): void;
    boya(yeniRenk: KutuRengi): void;
    kuyrukMu(): boolean;
    yemMi(): boolean;
    bosMu(): boolean;
    private div;
    private cizimiBaslat;
}
export {};
//# sourceMappingURL=Kutu.d.ts.map