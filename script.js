class CookieClickerGame {
  constructor() {
    this.score = 0;
    this.scoreDisplay = document.querySelector(".score-counter");
    this.cookie = document.querySelector(".cookie");
    this.cookieImg = document.querySelector("img");
    this.cookieCount = 0;
    this.cookieCounterMax = 100;
    this.rotationSpeed = 0;
    this.rotationIncrement = 360;

    this.cookie.addEventListener("click", this.clickCookie.bind(this));
    setInterval(() => {
      if (this.cookieCount > 0) {
        this.cookieCount = this.cookieCount - 1;
      }
      if (this.cookieCount > 50) {
        this.cookieCount = this.cookieCount - 1;
      }
      if (this.cookieCount > 80) {
        this.cookieCount = this.cookieCount - 1;
      }
      this.updateCookieSpin();
    }, 600);
  }

  clickCookie() {
    if (this.cookieCount < this.cookieCounterMax) {
      this.cookieCount++;
      this.score = this.score + this.cookieCount;

      this.rotationSpeed += this.rotationIncrement;
    } else {
      this.score = this.score + this.cookieCounterMax;
    }
    this.updateScoreDisplay();
  }

  updateCookieSpin() {
    this.cookieImg.style.transition = `transform 50s linear`;
    this.cookieImg.style.transform = `rotate(${this.rotationSpeed}deg)`;
  }

  updateScoreDisplay() {
    this.scoreDisplay.textContent = `Score: ${this.score}`;
  }
}

const game = new CookieClickerGame();
