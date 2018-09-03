# JavaScript
JSON data management using JavaScript.
************************************************PROBLEM STATEMENT 1 STARTS**************************************************************
Problem Statement 01 : Imagine you are creating a JSON data store for a Ecommerce platform like flipkart.com or amazon.in. Create a JSON to show what fields you will choose and what type of data (string/object/array) would you want to store in those field.

Solution : File Name => "Assignment01_Task01.json"
1. I have taken basic categories data from amazon.in for reference.
2. There are some parameters which has to be considered while creating any e-commerce web-site.
3. The parameters have been divided by me in three categories:
	i.   Users.
	ii.  Payment Mode.
	iii. Categories.
	
	i.   Users        : The Users are again sub-divided into 4 categories named as : 
		 a) Admin       : Admin User will have special access and privileges even to add and remove users.
		 b) RegularUser : The Regular User will have to sign up and provide their details and can access all selling data only.
		 c) SellerUser  : The Seller user will provide the products and availability to locations and their cost.
		 d) Guest       : The Guest User will only have the access to have a look at price,product and delivery,etc but cannot purchase it.
		
	ii.  Payment Mode : The payment Mode is necessary because user needs to enjoy the flexibility to pay according to his convenience.
	
	iii. Categories   : Categories will include all the options of products along with their product description in the form of objects stored and can be accessed via accessing its object.
	
	
************************************************END OF PROBLEM STATEMENT 1************************************************************
	
************************************************PROBLEM STATEMENT 2 STARTS*************************************************************	
Problem Statement 2 : Consider the following JSON dataset - https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.j
son. This dataset contains information of all characters (pokemon) of a famous game Pokemon Go. Include this dataset in a JS file as a variable and then write the following functions -
● Write a function to take pokemon’s name as argument and display the information of that pokemon
● Write a function that takes pokemon’s name as an argument and find out which all pokemon have that name in their “next_evolution” field.
● Write a function that take a “Weakness” as an input and gives the names of all pokemon who have that Weakness. (check the weakness array in the dataset).
You are free to use any library if you want. You are allowed to create multiple JSON files as well if you want.

Solution : FileName => "Assignment01Task02.js" , "Assignment01Task02.html" .

    a) Write a function to take pokemon’s name as argument and display the information of that pokemon.
	=> 1. Initially, pass the Pokemon name to the function pokemonSearch(), which will accept pokemon name from prompt.
	   2. pokemonSearch() will loop through complete array of json data, compare the pokemons name with data available, and if found will print the pokemon details on screen.
	   3. There are 2 properties i.e "prev_evolution" and "next_evolution" which are not mandatory for all the pokemons. So these parametes are logically checked and if available then only it will be printed.
	   
	b) Write a function that takes pokemon’s name as an argument and find out which all pokemon have that name in their “next_evolution” field.
	=> 1. First, we need to pass the name of Pokemon and check the parameter("next_evolution") of each and every pokemon.
	   2. This can be acheived by looping through the array, if the pokemon possess the property of "next_evolution" then the "next_evolution.name" will be compared with the pokemon's name provided and if found will be displayed and the checking would be contnued.
	   3. The number of pokemons found with the property "next_evolution.name" same as that of passed pokemons name will be printed.
	   
	c) Write a function that take a “Weakness” as an input and gives the names of all pokemon who have that Weakness. (check the weakness array in the dataset).
	=> 1. First, we need to pass the weakness of pokemon and check the parameter array("weakness"), parse through the array and check wheather the weakness found for pokemon is same as weakness passed by user.
	   2. Looping through the Array of pokemons and checking the array of weakness, if found pokemons name will be printed and if not loop will iterate. If the pokemon is found also the loop will iterate till the last and resultant pokemons name will be printed if found with same weakness.
	

************************************************END OF PROBLEM STATEMENT 2************************************************************
