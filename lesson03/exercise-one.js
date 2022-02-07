let customMocha = ['espresso', 'chocolate', 'milk', 'syrup', 'cardamom'];

console.log(customMocha);

// [object Array] (5)
["espresso","milk","chocolate","syrup","cardamom"]

customMocha.push('more espresso');

console.log(customMocha);

// [object Array] (6)
["espresso","milk","chocolate","syrup","cardamom","more espresso"]

customMocha.splice(2,1);

console.log(customMocha);

// [object Array] (5)
["espresso","milk","syrup","cardamom","more espresso"]

const customMochalist = customMocha.join(',');

console.log(customMochalist);

"espresso,milk,syrup,cardamom,more espresso"
