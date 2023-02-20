interface Colorful {
    color: string;
}
interface Circle {
    radius: number;
}
declare function draw(colorCircle: Colorful & Circle): void;
declare const circleRed: void;
declare const circleBlue: void;
