import snowSvg from "./雪花.svg";

class Snow {
  public x: number = 0;
  public y: number = 0;
  public v: number = 5;
  public size: number = 10;
  public timer: NodeJS.Timer | undefined;
  public interval: number = 10;
  public dom: HTMLImageElement = document.createElement("img");
  // public static snowSrc = snowSvg.src;

  constructor() {
    this.init();
    this.dom.src = snowSvg.src;
    document.body.append(this.dom);
  }

  init() {
    this.x = Math.random() * window.innerWidth;
    while (this.x > window.innerWidth - 20) {
      this.x = Math.random() * window.innerWidth;
    }
    this.y = -20;

    this.size = Math.random() * 20;
    this.v = this.size / 5;

    this.dom.style.width = this.size + "px";
    this.dom.style.height = this.size + "px";
    this.dom.style.position = "absolute";
    this.dom.style.left = this.x + "px";
    this.dom.style.top = this.y + "px";
  }

  fall() {
    this.y += this.v;

    if (this.y > window.innerHeight - 20) {
      this.init();
    }

    this.dom.style.top = this.y + "px";
  }
}

class Snowing {
  public snowNum: number;
  public timer: NodeJS.Timer | undefined;
  public snowArr: Snow[];

  constructor(snowNum: number) {
    this.snowNum = snowNum;

    this.snowArr = new Array(snowNum).fill(0).map(() => new Snow());
  }

  start() {
    this.timer = setInterval(() => {
      this.snowArr.forEach((snow) => {
        snow.fall();
      });
    }, 10);
  }

  end() {
    clearInterval(this.timer);
  }
}

export default Snowing;
