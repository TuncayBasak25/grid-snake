import { Grid } from "./grid/grid";

async function main() {
    const grid = new Grid();

    while (true) {

        await new Promise<void>((res) => setTimeout(res, 300));
    }
}


main();