// natively

// const rect1 = {
//     width: 2,
//     height: 3,
//     color: "red"
// }

// function area(rect){
//     return rect.width * rect.height;
// }

// const ans = area(rect1);
// console.log(ans);

// cleaner way using classes
class Rectangle {
   constructor(width, height, color) {
	    this.width = width;
	    this.height = height;
	    this.color = color; 
   }
   
   area() {
	   const area = this.width * this.height;
		 return area;
   }
   
   paint() {
			// console.log(`Painting with color ${this.color}`);
   }
   
}

const rect = new Rectangle(2, 4,"red") // instance of the rectangle class, object of the rectangle class
const area = rect.area();
// console.log(area);
// console.log(rect.paint());

const now = new Date(); // Current date and time
console.log(now.getMonth()); // Outputs the Month in 0 based indexing

const map = new Map(); // create hash map class from JS to create key value pairs
map.set('name', 'Ashwik'); // set key value pairs
map.set('age', 27);
console.log(map.get('name')); // get value from key

