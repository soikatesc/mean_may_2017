function personConstructor() {
    var person = {}
    person = {
        name : 'Shawn',
        distance_traveled : 0,
        say_name : function say_name() {
            console.log(this.name);
        },
        say_something : function say_something(str) {
            console.log(this.name + ' says ' + str);
        },
        walk : function walk() {
            console.log(this.name + ' is walking!');
            this.distance_traveled += 3
        },
        run : function run() {
            console.log(this.name + ' is running!');
            this.distance_traveled += 10
        },
        crawl : function crawl() {
            console.log(this.name + ' is crawling!');
            this.distance_traveled += 1
        },
    }
    return person
}

bruh = personConstructor();
console.log(bruh.name);
console.log(bruh.walk());
console.log(bruh.distance_traveled);
console.log(bruh.run());
console.log(bruh.distance_traveled);
console.log(bruh.crawl());
console.log(bruh.distance_traveled);

function ninjaConstructor(str, cohort) {
    var ninja = {}
    ninja ={
        name: str,
        cohort: cohort,
        belt_level: 'yellow_belt',
        level_up:  function level_up(num) {
            if(num > 9.5){
                this.belt_level = 'black_belt'
            }else if(num > 8){
                this.belt_level = 'red_belt'
            }else{
            }
        }

    }
}
