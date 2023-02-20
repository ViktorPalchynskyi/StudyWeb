interface Colorful {
   color: string;
}
interface Circle {
   radius: number;
}

function draw(colorCircle: Colorful & Circle) {
   console.log('colorCircle.color', colorCircle.color);
   console.log('colorCircle.radius', colorCircle.radius);
}


const circleRed = draw({ color: 'Red', radius: 20 });
const circleBlue = draw({ color: 'Blue', radius: 40 });