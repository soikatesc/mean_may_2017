function personConstructor(name) {
  return person = {
    name: name,
    distance_traveled: 0,
    say_name: function() {
      console.log(this.name);
      return this;
    },
    say_something: function(str) {
      console.log(this.name + " says " + str);
      return this;
    },
    walk: function() {
      console.log(this.name + " is walking");
      this.distance_traveled += 3;
      return this;
    },
    run: function() {
      console.log(this.name + " is running");
      this.distance_traveled += 10;
      return this;
    },
    crawl: function() {
      console.log(this.name + " is crawling");
      this.distance_traveled += 1;
      return this;
    }
  }

}


function ninjaConstructor(name, cohort) {
  return {
    name: name,
    cohort: cohort,
    belt_level: "yellow-belt",
    levelUp: function() {
      if (this.belt_level == "yellow-belt") {
        this.belt_level = "red-belt";
      }
      else if (this.belt_level == "red-belt") {
        this.belt_level = "black-belt";
      }
      else {
        this.belt_level = "grandmaster-belt";
      }
      return this;
    }

  }
}

var nin1 = ninjaConstructor("Andy", "Uptown Func")
console.log(nin1.belt_level);
console.log(nin1.levelUp().belt_level);
console.log(nin1.levelUp().levelUp().belt_level);
