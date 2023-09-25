class CookieClickerGame {
  constructor() {
    this.score = 0;
    this.scoreDisplay = document.querySelector(".score-counter");
    this.cookie = document.querySelector(".cookie");
    this.cookieCount = 0;
    this.cookieCounterMax = 100;
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
    }, 600);
  }

  clickCookie() {
    if (this.cookieCount < this.cookieCounterMax) {
      this.cookieCount++;
      this.score = this.score + this.cookieCount;
    } else {
      this.score = this.score + this.cookieCounterMax;
    }
    this.updateScoreDisplay();
    this.updateCookieSpin();
  }

  updateCookieSpin() {
    this.cookie.style.animation = `cookie-spin 4s infinite`;

    /* setTimeout(() => {
      this.cookie.style.transition = "";
    }, this.cookieRotationSpeed);

    this.cookie.style.transform = "rotate(360deg)";
    setTimeout(() => {
      this.cookie.style.transform = "rotate(0deg)";
    }, 0); */
  }

  updateScoreDisplay() {
    this.scoreDisplay.textContent = `Score: ${this.score}`;
  }
}

const game = new CookieClickerGame();
