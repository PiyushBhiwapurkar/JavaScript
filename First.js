/*Function for allowing what type of users will be accessible.*/

/*Created userList() JSON data containing AdminUser,RegularUser and GuestUser. Variable userList is an array Of Objects which again contains array of Objects.*/
var userList =[{
	"AdminUser":                                        //Access for Administrator with UserID,Password,Name and E-mail as key Parameter.
		[{                                              //Admin users are seperated because they will have special privilage access over other users.
			"UserID": "Admin",
			"Password": "Admin",
			"Name": "Administrator",
			"Email": "admin@gmail.com"
		}],
    /*Access for multiple Users with different key parameters for specific users who completes SIGNUP process with specific Unique ID. The Signed Up users will be stored as array of objects because after a certain duration the number of users will increase to much more extent.*/
	"RegularUser": 
		[{

			"UserID": "Shahrukh",
			"Password": "Shahrukh",
			"Name": "Shahrukh Khan",
			"Email": "shahrukh@gmail.com"
		},
		{
			"UserID": "Amitabh",
			"Password": "Amitabh",
			"Name": "Amitabh Bacchan",
			"Email": "amitabh@gmail.com"
		},
		{
			"UserID": "Sunny",
			"Password": "Sunny",
			"Name": "Sunny Deol",
			"Email": "sunny@gmail.com"

		},
		{
			"UserID": "Seller",
			"Password": "Seller",
			"Name": "Product Seller",
			"Email": "sellingproducts@gmail.com"
		}],
    /*Access for guest User will be default if the user does not SignUp or SignIn and will lose many privilages over Admin and Regular Users.*/
	"GuestUser": 
		[{
			"UserID": "Guest",
			"Password": "",
			"Name": "Guest",
			"Email": ""
		}]

}];


/*End of Function for Users.*/

/*Start of Payment var*/
/*The var payment will ensure the Payment mode available at particular seller and at particular code along with delivery address payment mode.*/
//The payment variable is an object with a key and array of objects which will change according to the seller and Pincode.
var payment = {
	"payment" : [{
		"NetBanking"                : ["HDFC Bank","ICICI Bank"],
		"PayOnDelivery"             : ["Cash on Delivery"],
		"Credit/DebitCardPayment"   : ["HDFC BANK","DENA Bank","ICICI Bank"] ,
		"Wallet"                    : ["PayTM","MobiKwik","FreeCharge","PhonePe"],
		"Lazypay"                   : ["LazyPay"]
	}]
};

/*End of Payment var*/

/*Start of function LogIn to check the processing of current user and maintaining their sessions.*/
var LogIn = function(userList,user){                       //Will accept the argument as the complete array of objects in 'userList' and name of user from prompt window.

	/*A loop to traverse the array for AdminUsers to check user Validity.*/
	for(currentUser = 0 ; currentUser < userList[0].AdminUser.length ; currentUser++)
	{
		if(userList[0].AdminUser[currentUser].UserID == user)
		{
			userFound = true;
			alert("Welcome User : " + userList[0].AdminUser[currentUser].Name);
			break;
		}
	}
	
	/*If the user is not found then it will try to check the user from RegularUser database.*/
	if(userFound == false)
	{
		/*A loop to check the user data from RegularUser database.*/
		for(currentUser = 0 ; currentUser < userList[0].RegularUser.length ; currentUser++)
		{
			if(userList[0].RegularUser[currentUser].UserID == user)
			{
				userFound = true;
				alert("Welcome User : " + userList[0].RegularUser[currentUser].Name);
				break;
			}
		}
	}
	
	/*If still the user is not found then the user will be declared as guest User and only current session will be maintained for user.*/
	if(userFound == false)
	{
		alert("Welcome User : " + userList[0].GuestUser[0].Name);
	}
	
};
/*Ending of LogIn Function*/

/*Calling the LogIn function to check the user availability.*/
LogIn(userList,user);
/*Completed calling LogIn function.*/

/*Declaring a JSON of categories on a varaible category.*/
var category = {                                        //Category will be an object with a key parameter as 'categories' and array of objects containing different options of categories.
	"categories" : 
	[                                                  //Category will have multiple objects with key and array of items present in it.
		{
			"Echo & Alexa": 
			[
				"Echo Dot",
				"Amazon Echo",
				"Introducing: Echo Spot",
				"Echo Plus",
				"See all devices with Alexa",
				"Meet Alexa", "Alexa Skills",
				"Alexa App",
				"Alexa Smart Home",
				"Amazon Prime Music"
			]
		},
		{
			"Amazon Fire TV Stick": 
			[
				"Amazon Fire TV Stick",
				"Amazon Prime Video",
				"Fire TV Apps & Games"
			]
		},
		{
			"Kindle E-Readers & eBooks": 
			[
				"Kindle",
				"Kindle Paperwhite",
				"Kindle Paperwhite Starter Pack",
				"Kindle Voyage",
				"Kindle Oasis",
				"Certified Refurbished Kindle",
				"Kindle E-Reader Accessories",
				"See all Kindle E-readers",
				"Free Kindle Reading Apps",
				"Kindle Cloud Reader",
				"Manage Your Content and Devices",
				"All Kindle eBooks",
				"Kindle Unlimited",
				"Kindle Exam Central",
				"Kindle eTextbooks",
				"Kindle Monthly Deals",
				"eBook Bestsellers",
				"eBooks in Indian Languages",
				"Hindi",
				"Tamil"
			]
		},
		{
			"Amazon Prime Video": 
			[
				"All Videos",
				"Movies",
				"TV Shows",
				"Kids Shows"
			]
		},
		{
			"Amazon Prime Music": 
			[
				"Amazon Prime Music",
				"Open web player",
				"Voice controlled with Alexa",
				"Amazon Prime Music Apps",
				"CDs and Vinyls"
			]
		}, {
			"Mobiles, Computers": 
			[
				"All Mobile Phones",
				"All Mobile Accessories",
				"Cases & Covers",
				"Screen Protectors",
				"Power Banks",
				"All Certified Refurbished",
				"Tablets",
				"Wearable Devices",
				"Smart Home",
				"Office Supplies & Stationery",
				"Software",
				"All Computers & Accessories",
				"Laptops",
				"Drives & Storage",
				"Printers & Ink",
				"Networking Devices",
				"Computer Accessories",
				"Game Zone",
				"Desktops & Monitors",
				"Electronics Only on Amazon",
				"All Electronics"
			]
		},
		{
			"TV, Appliances, Electronics": 
			[
				"Televisions",
				"Home Entertainment Systems",
				"Headphones",
				"Speakers",
				"MP3, Media Players & Accessories",
				"Audio & Video Accessories",
				"Cameras",
				"DSLR Cameras",
				"Camera Accessories",
				"Musical Instruments & Professional Audio",
				"Gaming Consoles",
				"All Electronics",
				"Air Conditioners",
				"Refrigerators",
				"Washing Machines",
				"Kitchen & Home Appliances",
				"Heating & Cooling Appliances",
				"All Appliances"
			]
		},

		{
			"Men's Fashion": 
			[
				"Clothing",
				"T-shirts & Polos",
				"Shirts",
				"Jeans",
				"Innerwear",
				"Watches",
				"Bags & Luggage",
				"Sunglasses",
				"Jewellery",
				"Wallets",
				"Shoes",
				"Sports Shoes",
				"Formal Shoes",
				"Casual Shoes",
				"Sportswear",
				"The Designer Boutique",
				"Men's Fashion",
				"Amazon Fashion",
				"Fashion Sales & Deals"
			]
		},
		{
			"Women's Fashion": 
			[
				"Clothing",
				"Western Wear",
				"Ethnic Wear",
				"Lingerie & Nightwear",
				"Top Brands",
				"Watches",
				"Handbags & Clutches",
				"Gold & Diamond Jewellery",
				"Fashion Jewellery",
				"Sunglasses",
				"Shoes",
				"Fashion Sandals",
				"Ballerinas",
				"The Designer Boutique",
				"Handloom & Handicraft Store",
				"Sportswear",
				"Women's Fashion",
				"Amazon Fashion",
				"Fashion Sales & Deals"
			]
		},
		{
			"Home, Kitchen, Pets": 
			[
				"Kitchen & Dining",
				"Kitchen Storage & Containers",
				"Furniture",
				"Fine Art",
				"Home Furnishing",
				"Bedroom Linen",
				"Home Décor",
				"Garden & Outdoors",
				"Home Storage",
				"Indoor Lighting",
				"Home Improvement",
				"Sewing & Craft Supplies",
				"All Home & Kitchen",
				"Shop by Room",
				"Home & Kitchen Deals",
				"All Certified Refurbished",
				"All Pet Supplies",
				"Dog supplies"

			]
		},
		{
			"Beauty, Health, Grocery": 
			[
				"Beauty & Grooming",
				"Luxury Beauty",
				"Make-up",
				"Health & Personal Care",
				"Household Supplies",
				"Personal Care Appliances",
				"Diet & Nutrition",
				"Subscribe & Save",
				"Amazon Pantry",
				"Value Bazaar",
				"All Grocery & Gourmet Foods",
				"Coffee, Tea & Beverages",
				"Snack Foods"

			]
		},
		{
			"Sports, Fitness, Bags, Luggage": 
			[
				"Badminton ",
				"Badminton",
				"Cycling",
				"Football",
				"Running",
				"Camping & Hiking",
				"Fitness Accessories",
				"Yoga",
				"Strength Training",
				"Cardio Equipment",
				"Certified Refurbished",
				"All Exercise & Fitness",
				"All Sports, Fitness & Outdoors",
				"Backpacks",
				"Rucksacks",
				"Suitcases & Trolley Bags",
				"Travel Duffles",
				"Travel Accessories",
				"Wallets"

			]
		},
		{
			"Toys, Baby Products, Kids' Fashion": 
			[
				"Toys & Games",
				"Baby Products",
				"Diapers",
				"Baby Wish List",
				"Toys Gifting Store",
				"STEM Toys Store",
				"International Toy Store",
				"Baby Bath, Skin & Grooming",
				"Strollers & Prams",
				"Nursing & Feeding",
				"Subscribe & Save",
				"Amazon Pantry",
				"Amazon Family",
				"Kids' Clothing",
				"Kids' Shoes",
				"School Bags",
				"Kids' Watches",
				"Kids' Fashion",
				"Baby Fashion"

			]
		},
		{
			"Car, Motorbike, Industrial": 
			[
				"Motorbike Accessories & Parts",
				"Car Accessories",
				"Car Electronics",
				"Car Parts",
				"Car & Bike Care",
				"All Car & Motorbike Products",
				"Industrial & Scientific Supplies",
				"Test, Measure & Inspect",
				"Lab & Scientific",
				"Janitorial & Sanitation Supplies"

			]
		},
		{
			"Books": 
			[
				"All Books",
				"Fiction Books",
				"Editor's Corner",
				"School Textbooks",
				"Children's Books",
				"Exam Central",
				"Textbooks",
				"Indian Language Books",
				"Used Books",
				"Kindle eBooks"

			]
		},
		{
			"Movies, Music & Video Games": 
			[
				"All Movies & TV Shows",
				"Blu-ray",
				"All English",
				"All Hindi",
				"Gaming Consoles",
				"Latest Video Games",
				"Gaming Accessories",
				"PC Games",
				"Video Games Deals",
				"All Video Games",
				"All Music",
				"International Music",
				"Film Songs",
				"Indian Classical",
				"Musical Instruments & Professional Audio",
				"Open web player",
				"Amazon Prime Music"


			]
		},
		{
			"Gift Cards & Mobile Recharges": 
			[
				"All Gift Cards",
				"Popular Gift Cards",
				"Gift Boxes, Gift Tags, Greeting Cards",
				"Popular Brand Gift Vouchers",
				"Birthday Gift Cards",
				"Wedding & Anniversary",
				"Best Wishes & Thank You",
				"Corporate Gift Cards",
				"Add a gift card",
				"Mobile Recharges"

			]
		},
		{
			"Global Store": 
			[
				"Clothing & Accessories",
				"Watches",
				"Home & Kitchen",
				"Shoes",
				"PC & Electronics",
				"Office Supplies",
				"Toys & Games",
				"Pet Supplies",
				"Luggage",
				"Musical Instruments",
				"Sports & Fitness",
				"Music",
				"Video Games",
				"Books",
				"Global Store",
				"Bestsellers",
				"Women's Fashion",
				"Men's Fashion",
				"Shop by Room"

			]
		}
	]
};


/*Completed declaring a JSON in category.*/

var completeData;
var search = function(item){
	
	for(i in category.categories)
	{
		for(j in category.categories[i])
		{
			if(j == item)
			{
				itemFound = true ;
				completeData = category.categories[i][j];
				alert("HI" + completeData);
				break;
			}
		}
	}
	
	if(itemFound == true)
	{
		alert("Item Found");
		document.write(completeData);
	}
	else if(itemFound == false)
	{
		alert("Item not found");
	}
}; 


var paymentType = prompt("Please Enter Your Payment Mode : \n" + Object.keys(payment.payment[0]));
var currentUser = 0;
var paymentFinalSource ;

alert(paymentType);

//var paymentFinalSource = prompt("Please select your Source : " + payment.payment[0].paymentType.valueOf());
alert(Object.keys(payment.payment[0]));

for(currentUser = 0 ; currentUser < payment.payment[0].length ; currentUser++)
{ 
	if(Object.keys(payment.payment[0]) == paymentType)
	{
		paymentFinalSource = prompt("Please select your Source : " + payment.payment[0].NetBanking);
		alert("Payment Type and Mode" + paymentType + "  " + paymentFinalSource);
	}
	if(Object.keys(payment.payment[1]) == paymentType)
	{
		paymentFinalSource = prompt("Please select your Source : " + payment.payment[0].PayOnDelivery);
		alert("Payment Type and Mode" + paymentType + "  " + paymentFinalSource);
	}
	if(Object.keys(payment.payment[2]) == paymentType)
	{
		paymentFinalSource = prompt("Please select your Source : " + payment.payment[0].Credit/DebitCardPayment]);
		alert("Payment Type and Mode" + paymentType + "  " + paymentFinalSource);
	}
	if(Object.keys(payment.payment[3]) == paymentType)
	{
		paymentFinalSource = prompt("Please select your Source : " + payment.payment[0].Wallet);
		alert("Payment Type and Mode" + paymentType + "  " + paymentFinalSource);
	}
	if(Object.keys(payment.payment[0]) == paymentType)
	{
		paymentFinalSource = prompt("Please select your Source : " + payment.payment[0].Lazypay);
		alert("Payment Type and Mode" + paymentType + "  " + paymentFinalSource);
	}
	alert("Payment Type and Mode" + paymentType + "  " + paymentFinalSource);
} 

alert("Your selected Payment mode is : " +paymentType);
var user = prompt("Enter Your UserId");
var userFound = false;



var findAnItem = prompt("Search your Item Availability");
var itemFound = false;

search(findAnItem);




















