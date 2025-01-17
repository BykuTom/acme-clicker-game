class CookieClickerGame {
  constructor() {
    this.score = 0;
    this.scoreDisplay = document.querySelector(".score-counter");
    this.cookie = document.querySelector(".cookie");
    this.cookieImg = document.querySelector("img");
    this.achievement = document.querySelector("achievementsSection")
    this.cookieCount = 0;
    this.cookieCounterMax = 100;
    this.rotationSpeed = 0;
    this.rotationIncrement = 360;

    this.cookie.addEventListener("click", this.clickCookie.bind(this));
    setInterval(() => {
      if (this.cookieCount > 0) {
        this.cookieCount = this.cookieCount - 1;
        this.rotationSpeed -= this.rotationIncrement;
      }
      if (this.cookieCount > 50) {
        this.cookieCount = this.cookieCount - 1;
        this.rotationSpeed -= this.rotationIncrement * 2;
      }
      if (this.cookieCount > 80) {
        this.cookieCount = this.cookieCount - 1;
        this.rotationSpeed -= this.rotationIncrement * 3;
      }
      if (this.rotationSpeed < 0) {
        this.rotationSpeed = 0;
      }
      this.updateCookieSpin();
    }, 600);
  }

  clickCookie() {
    if (this.cookieCount < this.cookieCounterMax) {
      this.cookieCount++;
      this.score = this.score + this.cookieCount;
    } else {
      this.score = this.score + this.cookieCounterMax;
    }
    this.rotationSpeed += this.rotationIncrement;
    this.updateScoreDisplay();
    this.achievements();
  }

  updateCookieSpin() {
    this.cookieImg.style.transition = `transform 50s linear`;
    this.cookieImg.style.transform = `rotate(${this.rotationSpeed}deg)`;
  }

  updateScoreDisplay() {
    this.scoreDisplay.textContent = `Score: ${this.score}`;
  }
  
  achievements() {
    if (this.cookieCount === 5 ) {
      console.log("you got 5")
      this.achievement.innerHTML = "<div class = achievement><h2>You got 5 cookies</div></h2>"
    }
  }
}

const game = new CookieClickerGame();
