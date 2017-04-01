/* globals $ */



var book1 = {
    "id": 1,
    "name": "The Count of Monte Cristo",
    "author": "Alexandre Dumas",
    "picture_url": "https://talesuntangled.files.wordpress.com/2011/04/count-of-monte-cristo.jpg",
    "price": 50,
    "selling_points": [
        "Count on Adventure!",
        "Count on Romance!",
        "Count on REVENGE!"
    ]
};

var book2 = {
    "id": 2,
    "name": "The Lion, The Witch, and the Wardrobe",
    "author": "C. S. Lewis",
    "picture_url": "images/the-lion-the-witch-and-the-wardrobe.jpg",
    "price": 50,
    "selling_points": [
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    ]
};

var book3 = {
    "id": 3,
    "name": "The Lion, The Witch, and the Wardrobe",
    "author": "C. S. Lewis",
    "picture_url": "images/the-lion-the-witch-and-the-wardrobe.jpg",
    "price": 50,
    "selling_points": [
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    ]
};

var book4 = {
    "id": 4,
    "name": "The Lion, The Witch, and the Wardrobe",
    "author": "C. S. Lewis",
    "picture_url": "images/the-lion-the-witch-and-the-wardrobe.jpg",
    "price": 50,
    "selling_points": [
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "Lorem ip`sum dolor sit amet, consectetur adipisicing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    ]
};

var generateItem = function generateItem( product ){
    $( "#book" + product.id + " h1" ).text( product.name );
    $( "#book" + product.id + " h2" ).text( product.author );
    $( "#book" + product.id + " img" ).attr( "src", product.picture_url );
    $( "#book" + product.id + " h3" ).text( product.price );
    $( "#book" + product.id + " ul" ).text( product.selling_points );
    $( "#book" + product.id + " span" ).text( product.id );
};

var books = [ book1,book2,book3,book4 ];

i=0
while(i<books.length) {
  console.log(books[i].name);
  generateItem(books[i]);
  i++;
}
//
// generateItem( book1 );
// generateItem( book2 );
// generateItem( book3 );
// generateItem( book4 );
