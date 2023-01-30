function displayInformation() {
    // var library is defined, use it to print the information
   for (var i=0; i < library.length; i++) {
    if (library[i].readingStatus === true) {

        var title = library[i].title;
        var author = library[i].author;

        console.log(`Already read '${title}' by ${author}.`)
    } else { 
        var title = library[i].title;
        var author = library[i].author;
        console.log(`You still need to read '${title}' by ${author}.`)
    }
   }
    
   }
   

// tail starts here
var library = [ 
   {
       title: 'Bill Gates',
       author: 'The Road Ahead',
       readingStatus: true
   },
   {
       title: 'Steve Jobs',
       author: 'Walter Isaacson',
       readingStatus: true
   },
   {
       title: 'Mockingjay: The Final Book of The Hunger Games',
       author: 'Suzanne Collins',
       readingStatus: false
   }
];

displayInformation();