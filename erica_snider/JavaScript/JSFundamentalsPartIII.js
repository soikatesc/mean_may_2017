function personConstructor(name) {
  // var name = {
  return {
    name: name,
    distance_traveled: 0,
    say_name: function(param){
      console.log(this.name);
    },
    say_something: function(param){
      console.log(this.name + " says '" + param + "'");
    },
    walk: function(){
      console.log(this.name + " is walking");
      this.distance_traveled += 3;
    },
    run: function(){
      console.log(this.name + " is running");
      this.distance_traveled += 10;
    },
    crawl: function(){
      console.log(this.name + " is crawling");
      this.distance_traveled += 1;
    }
  }
  // return name;
}

Jerry = personConstructor('Jerry');
console.log(Jerry);
console.log(Jerry.say_name());
console.log(Jerry.distance_traveled);
console.log(Jerry.say_something("Hi Leslie!"));
console.log(Jerry.distance_traveled);
console.log(Jerry.walk());
console.log(Jerry.distance_traveled);
console.log(Jerry.run());
console.log(Jerry.distance_traveled);
console.log(Jerry.crawl());
console.log(Jerry.distance_traveled);


function ninjaConstructor(name, cohort){
  return {
    name: name,
    cohort: cohort,
    beltLevel: 'yellow-belt',
    levelUp: function(){
      if (this.beltLevel === 'yellow-belt') {
        this.beltLevel = 'red-belt';
      } else if (this.beltLevel === 'red-belt') {
        this.beltLevel = 'black-belt';
      }
    }

  }
}

Erica = ninjaConstructor('Erica','The Grim Repo');
console.log(Erica);
console.log(Erica.beltLevel);
Erica.levelUp();
console.log(Erica.beltLevel);
Erica.levelUp();
console.log(Erica.beltLevel);
Erica.levelUp();
console.log(Erica.beltLevel);
