
  // class Tamagotchi(hunger, attention, sleep) {
  // let userDateString = new Date(year, month, day);

//Variables
  // pet.name = "Earl";

//Object
   class  Tamagotchi {

  Tama(name, hunger, attention, sleep) {
    this.name = name;
    this.foodLevel = 10;
    this.attentionLevel = 10;
    this.sleepLevel = 10;
  }
  let pet = new Tama("Earl", 10, 10, 10);

  setHunger() {
    setInterval(() => {
      this.foodLevel--;
    }, 1000);
  }

  setAttention() {
    setInterval(() => {
      this.attentionLevel--;
    }, 1000);
  }

  setSleep() {
    setInterval(() => {
      this.sleepLevel--;
    }, 1000);
  }

didYouStarve() {
if (this.foodLevel > 0) {
  return false;
} else {
  return true;
}
}

didYouLonely() {
if (this.attentionLevel > 0) {
  return false;
} else {
  return true;
}
}

didYouNotSleep() {
if (this.sleepLevel > 0) {
  return false;
} else {
  return true;
}
}

feed() {
this.foodLevel = 10;
}

play() {
this.attentionLevel = 10;
}

sleep() {
this.sleepLevel = 10;
}
}
