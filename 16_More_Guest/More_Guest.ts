

let Guest_List :string[] = ['Umar Khatab Abbasi' , 'Muntazir Abbasi' , 'Shaireen Abbasi'];

// for(let i=0; i<Guest_List.length; i++){

//     console.log('Dear Mr. ' +  Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party. \n\nThank You !')

// }

let absent_Guest :string = 'Umar Khatab Abbasi' ;

let new_Guest :string = 'Samiullah Abbasi' ;

Guest_List[0] = new_Guest ;

for(let i=0; i<Guest_List.length; i++){

    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You\n\n')

}

console.log(`Mr. ${absent_Guest} is not coming to the party.`);

console.log('Good News ! We Find Big Table So  we are inviting 3 more guests.')

Guest_List.unshift('Sir Zia Khan') ;
Guest_List.splice(2 , 0 , 'Saleem Abbasi');
Guest_List.push('Tasleem Abbasi');

for(let i=0; i<Guest_List.length; i++){

    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You\n\n')

}
