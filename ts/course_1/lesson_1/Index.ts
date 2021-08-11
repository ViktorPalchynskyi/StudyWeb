// const canvas = document.getElementById("canvas") as HTMLCanvasElement;
// const context = canvas.getContext("2d");


interface Fruit {
   name: string;
   color: string;
   sweetness: number;
}
interface Vegetable {
   name: string;
   color: string;
   tenderness: number;
}



function isFruit(maybeFruit: Fruit | Vegetable): maybeFruit is Fruit {
   if ("sweetness" in maybeFruit) return true;
   return false;
}

const tomato = { name: "Tomato", color: "red", tenderness: 70 };
if (isFruit(tomato)) {
   console.log(`Tomato is ${tomato.sweetness}% sweet.`);
} else {
   console.log(`Tomato is ${tomato.tenderness}% tender.`);
}


function assertIsFruit(maybeFruit: any): asserts maybeFruit is Fruit {
   if (!("sweetness" in maybeFruit)) throw new Error('This shit want do!');
}

assertIsFruit(tomato);

tomato;