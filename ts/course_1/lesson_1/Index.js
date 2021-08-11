// const canvas = document.getElementById("canvas") as HTMLCanvasElement;
// const context = canvas.getContext("2d");
function isFruit(maybeFruit) {
    if ("sweetness" in maybeFruit)
        return true;
    return false;
}
var tomato = { name: "Tomato", color: "red", tenderness: 70 };
if (isFruit(tomato)) {
    console.log("Tomato is " + tomato.sweetness + "% sweet.");
}
else {
    console.log("Tomato is " + tomato.tenderness + "% tender.");
}
function assertIsFruit(maybeFruit) {
    if (!("sweetness" in maybeFruit))
        throw new Error('This shit want do!');
}
assertIsFruit(tomato);
tomato;
