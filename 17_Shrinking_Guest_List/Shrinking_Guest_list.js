"use strict";
let Guest_List = ['Umar Khatab Abbasi', 'Muntazir Abbasi', 'Shaireen Abbasi'];
// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr. ' +  Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party. \n\nThank You !')
// }
let absent_Guest = 'Umar Khatab Abbasi';
let new_Guest = 'Samiullah Abbasi';
Guest_List[0] = new_Guest;
// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You\n\n')
// }
console.log(`Mr. ${absent_Guest} is not coming to the party.`);
console.log('Good News ! We Find Big Table So  we are inviting 3 more guests.');
Guest_List.unshift('Sir Zia Khan');
Guest_List.splice(2, 0, 'Saleem Abbasi');
Guest_List.push('Tasleem Abbasi');
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You\n\n');
}
console.log('\n Sorry we can not arrange big table, Only two people will be invited.');
while (Guest_List.length > 2) {
    let remove_Guest = Guest_List.pop();
    console.log(`Sorry Mr. ${remove_Guest}, You Are Not Invited For Dinner.`);
}
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nYou are still invited.\n\nThank You\n\n');
}
Guest_List.splice(0, 2);
console.log(Guest_List);
