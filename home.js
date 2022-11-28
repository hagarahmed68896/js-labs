// ------------------------Classes-------------------------

class Person {
  constructor(full_name, money, sleep_mood, health_Rate) {
    this.full_name = full_name;
    this.money = money;
    this.health_Ratey = health_Rate;
    this.sleep_mood= sleep_mood;
  }
  sleep_mood (hours){
    if(hours==7){
        this.sleep_mood='happy';
        return this.sleep_mood
    }
    else if(hours>7){
        this.sleep_mood='lazy';
        return this.sleep_mood
    }
    else if(hours<7){
        this.sleep_mood='tired';
        return this.sleep_mood
    }
  }
  health_Rate(meals){
    if(meals==3){
        this.health_Rate='100% health rate';
        return this.health_Rate
    }
    else if(meals==2){
        this.health_Rate='75% health rate';
        return this.health_Rate
    }
    else if(meals==1){
        this.health_Rate='50% health rate';
        return this.health_Rate
    }
  }
  money(items){
    if(items==1){
        this.money='decrees Money 10 LE';
        return this.money
    }
   
  }
}
// const person1 = new Person();
// console.log(person1.full_name);
// console.log(person1.money);
// console.log(person1.Sleep(6));




// ------------------------Constructor functions-------------------------

function Person(full_name, money, sleep_mood, health_Rate){ 
    this.full_name = full_name;
    this.money = money;
    this.health_Ratey = health_Rate;
    this.sleep_mood= sleep_mood;

 Person.prototype.sleep_mood = function(hours){
    if(hours=7){
        this.sleep_mood='happy';
        return this.sleep_mood
    }
    else if(hours>7){
        this.sleep_mood='lazy';
        return this.sleep_mood
    }
    else if(hours<7){
        this.sleep_mood='tired';
        return this.sleep_mood
    }
  }
  Person.prototype.health_Rate = function(meals){
    if(meals=3){
        this.health_Rate='100% health rate';
        return this.health_Rate
    }
    else if(meals=2){
        this.health_Rate='75% health rate';
        return this.health_Rate
    }
    else if(meals=1){
        this.health_Rate='50% health rate';
        return this.health_Rate
    }
  }
  Person.prototype.money = function(items){
    if(items=1){
        this.money='decrees Money 10 LE';
        return this.money
    }
   
  }
}





// ------------------------Objects Linking to Other Objects (OLOO)-------------------------
const Person = {
      init(full_name, money, sleep_mood, health_Rate ) {
        this.full_name = full_name;
        this.money = money;
        this.sleep_mood = sleep_mood;
        this.health_Rate = health_Rate;
      }}
    
   this.sleep_mood= function(hours){
        if(hours=7){
            this.sleep_mood='happy';
            return this.sleep_mood
        }
        else if(hours>7){
            this.sleep_mood='lazy';
            return this.sleep_mood
        }
        else if(hours<7){
            this.sleep_mood='tired';
            return this.sleep_mood
        }
      }
      Person.prototype.health_Rate = function(meals){
        if(meals=3){
            this.health_Rate='100% health rate';
            return this.health_Rate
        }
        else if(meals=2){
            this.health_Rate='75% health rate';
            return this.health_Rate
        }
        else if(meals=1){
            this.health_Rate='50% health rate';
            return this.health_Rate
        }
      }
      Person.prototype.money = function(items){
        if(items=1){
            this.money='decrees Money 10 LE';
            return this.money
        }
       
      }
    






    // ---------------------------Factory functions--------------
    function Person (full_name, money, sleep_mood, health_Rate ) {
          return {
            full_name
            , money
            , sleep_mood
            , health_Rate 
          }}
          Person.prototype.sleep_mood = function(hours){
            if(hours=7){
                this.sleep_mood='happy';
                return this.sleep_mood
            }
            else if(hours>7){
                this.sleep_mood='lazy';
                return this.sleep_mood
            }
            else if(hours<7){
                this.sleep_mood='tired';
                return this.sleep_mood
            }
          }
          Person.prototype.health_Rate = function(meals){
            if(meals=3){
                this.health_Rate='100% health rate';
                return this.health_Rate
            }
            else if(meals=2){
                this.health_Rate='75% health rate';
                return this.health_Rate
            }
            else if(meals=1){
                this.health_Rate='50% health rate';
                return this.health_Rate
            }
          }
          Person.prototype.money = function(items){
            if(items=1){
                this.money='decrees Money 10 LE';
                return this.money
            }
           
          }
        