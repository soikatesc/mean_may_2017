// Create a function that takes in one parameter called "name" and
// returns an object that looks similar to the person object from JS Fundamentals Part II.
function personConstructor(newName) {
  person = {
    name: newName,
    distance_traveled: 0,
    say_name: function() {
      console.log(person.name);
      return person;
    },
    say_something: function(say) {
      console.log(person.name + " says '" + say + "'");
      return person;
    },
    walk: function() {
      console.log(person.name + ' is walking');
      person.distance_traveled += 3;
      return person;
    },
    run: function() {
      console.log(person.name + ' is running');
      person.distance_traveled += 10;
      return person;
    },
    crawl: function() {
      console.log(person.name + ' is crawling');
      person.distance_traveled += 1;
      return person;
    }
  };
  return person;
}

person = personConstructor('Lance');
person.say_name().say_something('Pizza is cool').walk().run().crawl();


// Create a ninjaConstructor that can be used to create Ninjas that each has a name, cohort, and belt-level.
// Give all of the Ninjas a "levelUp" method that increases their belt-level.
// Have all ninjas start at a yellow-belt.
function ninjaConstructor(newName, assignedCohort) {
  ninja = {
    name: newName,
    cohort: assignedCohort,
    belt_level: 0,
    level_up: function() {
      if (ninja.belt_level < 2) {
        var belts = ['Yellow', 'Red', 'Black'];
        ninja.belt_level++;
        console.log('Rank up! ' + belts[ninja.belt_level] + ' Belt');
      }
      else {
        console.log("You can't rank up anymore!");
      }
      return ninja;
    }
  };
  return ninja;
}

ninja = ninjaConstructor('Jam', 'Dallas');
ninja.level_up().level_up().level_up();
