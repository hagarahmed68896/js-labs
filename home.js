// ------------------------Classes-------------------------

// class Person {
//   constructor(full_name, money, sleep_mood, health_Rate) {
//     this.full_name = full_name;
//     this.money = money;
//     this.health_Ratey = health_Rate;
//     this.sleep_mood= sleep_mood;
//   }
//   Sleep (hours){
//     if(hours==7){
//         this.sleep_mood='happy';
//         return this.sleep_mood
//     }
//     else if(hours>7){
//         this.sleep_mood='lazy';
//         return this.sleep_mood
//     }
//     else if(hours<7){
//         this.sleep_mood='tired';
//         return this.sleep_mood
//     }
//   }
//   Eat(meals){
//     if(meals==3){
//         this.health_Rate='100% health rate';
//         return this.health_Rate
//     }
//     else if(meals==2){
//         this.health_Rate='75% health rate';
//         return this.health_Rate
//     }
//     else if(meals==1){
//         this.health_Rate='50% health rate';
//         return this.health_Rate
//     }
//   }
//   buy(items){
//     if(items==1){
//         this.money='decrees Money 10 LE';
//         return this.money
//     }
   
//   }
// }
// const person1 = new Person('hagar');
// console.log(person1.full_name);
// console.log(person1.buy(1));
// console.log(person1.Sleep(7));
// console.log(person1.Eat(3))




// ------------------------Constructor functions-------------------------

// function Person(full_name, money, sleep_mood, health_Rate){ 
//     this.full_name = full_name;
//     this.money = money;
//     this.health_Rate = health_Rate;
//     this.sleep_mood= sleep_mood;

//  Person.prototype.Sleep = function(hours){
//     if(hours==7){
//         this.sleep_mood='happy';
//         return this.sleep_mood
//     }
//     else if(hours>7){
//         this.sleep_mood='lazy';
//         return this.sleep_mood
//     }
//     else if(hours<7){
//         this.sleep_mood='tired';
//         return this.sleep_mood
//     }
//   }
//   Person.prototype.Eat = function(meals){
//     if(meals==3){
//         this.health_Rate='100% health rate';
//         return this.health_Rate
//     }
//     else if(meals==2){
//         this.health_Rate='75% health rate';
//         return this.health_Rate
//     }
//     else if(meals==1){
//         this.health_Rate='50% health rate';
//         return this.health_Rate
//     }
//   }
//   Person.prototype.buy = function(items){
//     if(items==1){
//         this.money='decrees Money 10 LE';
//         return this.money
//     }
   
//   }
// }
// const person1 = new Person('hagar');
// console.log(person1.full_name);
// console.log(person1.buy(1));
// console.log(person1.Sleep(7));
// console.log(person1.Eat(3));
// console.log(person1);




// ------------------------Objects Linking to Other Objects (OLOO)-------------------------
// var Person = {
//       init(full_name, money, sleep_mood, health_Rate ) {
//         this.full_name = full_name;
//         this.money = money;
//         this.sleep_mood = sleep_mood;
//         this.health_Rate = health_Rate;
//         return this;
//       },
    
//    Sleep(hours){
//         if(hours==7){
//             this.sleep_mood='happy';
//             return this.sleep_mood
//         }
//         else if(hours>7){
//             this.sleep_mood='lazy';
//             return this.sleep_mood
//         }
//         else if(hours<7){
//             this.sleep_mood='tired';
//             return this.sleep_mood
//         }
//       },
//       Eat(meals){
//         if(meals==3){
//             this.health_Rate='100% health rate';
//             return this.health_Rate
//         }
//         else if(meals==2){
//             this.health_Rate='75% health rate';
//             return this.health_Rate
//         }
//         else if(meals==1){
//             this.health_Rate='50% health rate';
//             return this.health_Rate
//         }
//       },
//       buy(items){
//         if(items=1){
//             this.money='decrees Money 10 LE';
//             return this.money
//         }
       
//       }}
    
//         var person1 = Object.create(Person).init('hagar',10,'tired',75);
//         console.log(person1.full_name);
//         console.log(person1.Eat(1));
//         console.log(person1.Sleep(6));





    // ---------------------------Factory functions--------------
    function Person (full_name, money, sleep_mood, health_Rate ) {
          return {
            full_name
            , money
            , sleep_mood
            , health_Rate ,
          
          Sleep(hours){
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
          },
          Eat(meals){
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
          },
          buy(items){
            if(items==1){
                this.money='decrees Money 10 LE';
                return this.money
            }
           
          }}}
const person1 = new Person('hagar');
console.log(person1.full_name);
console.log(person1.buy(1));
console.log(person1.Sleep(7));
console.log(person1.Eat(3))
