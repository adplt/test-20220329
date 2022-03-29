// CHALLENGE #1 - ALGORITHM 
// ====================
// You can use one of the following language:  Nodejs,Laravel,Java Springboot or Lumens
//   - Candidates usually spend 30 minutes max on this challenge.
//   - PROBLEM: Write a function that prints out the following: 


// 1 2 3 4 5
// 2 4 6 8 10
// 3 6 9 12 15
// 4 8 12 16 20
// 5 10 15 20 25

// CHALLENGE #2 -CODE THE API
// ====================

//  - Candidates usually spend 90 minutes max on this challenge.
//   - You can use one of the following language: Nodejs,Laravel,Java Springboot or Lumens
//   - PROBLEM: Create API for Below Events
// Here are the requirements:
//  1. Create your  Table and API for below  Question
// 2. The wedding guestbook website have 3 main functions: 
//     2.1. guest forms: guest can put their name, address, phone and note - 
//     2.2. note gallery: guest can see what other guests have wrote. guest can see their name & note. Address & phone should be hidden
//     2.3. admin page: admin can login and manage all the entries (showing name, address, phone, note) and delete entry
//  3. Create README file that covers installation instructions, citation, unit test plan, assumptions, and other notes that you want to tell us.
// - you are free to use any Library, Framework, or technique to complete this challenge. 
// - You can partially use someone's else code, but please make citation using comments on the code / let us know.
// - You can add feature as long as the main functions are covered. For example, if you really want to impress us, implement oAuth for the admin login. 
// - If the task is unclear, quickly make assumptions & let us know why you made that assumptions.
// - We will check and run it to local server to make sure that the code are running. 
// - Security and Token based Implementation are highly appreciated and get more credits


// AFTER THREE HOUR PASSED (or earlier if you fast), You can zip your code and send mail TO: darianti@merkleinnovation.com CC: nugroho@merkleinnovation.com  and attach your work result OR share it in dropbox / google drive .

var printFunc = (length, space = 1) => {
    console.log();
    if (space == 0) {
        return
    }

    var res = ''

    for (let i = 0; i <= length; i++) {
        if (i % space == 0 && i + space <= length) {
            res += i + space + ' '
        }
    }

    console.log(res);
}

for (let i = 1; i <= 5; i++) {
    printFunc(5*i, i);
}

