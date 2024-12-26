
let Guest_List :string[] = ['Umar Khatab Abbasi' , 'Muntazir Abbasi' , 'Shaireen Abbasi'];
// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr. ' +  Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party. \n\nThank You !')
// }

let absent_Guest :string = 'Umar Khatab Abbasi' ;
let new_Guest :string = 'Samiullah Abbasi' ;
Guest_List[0] = new_Guest ;

// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You\n\n')
// }

console.log(`Mr. ${absent_Guest} is not coming to the party.`);
console.log('Good News ! We Find Big Table So  we are inviting 3 more guests.')

// array main 3 Guest add kiye hain
Guest_List.unshift('Sir Zia Khan') ;
Guest_List.splice(2 , 0 , 'Saleem Abbasi');
Guest_List.push('Tasleem Abbasi');


//yaha par mane 6 Guest ke array ko print krwaya hai.
for(let i=0; i<Guest_List.length; i++){
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You\n\n')
}

// Sorry Guest for not invited
console.log('\n Sorry we can not arrange big table, Only two people will be invited.');

// yaha pe guest remove kiye hain .
while(Guest_List.length> 2){
    let remove_Guest = Guest_List.pop();
    console.log(`Sorry Mr. ${remove_Guest}, You Are Not Invited For Dinner.`);
}


// Hamary bachy howe 2 Invited Guest.
for(let i=0; i<Guest_List.length; i++){
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nYou are still invited.\n\nThank You\n\n')
}

// Main ne sary Guest array se remove kr diye hain .
Guest_List.splice(0, 2);
console.log(Guest_List);





