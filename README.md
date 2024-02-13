# Project Three - Vinous Voyages

## Description

Project Three was a group  project to create a MERN full stack application with CRUD capabilities. Create a server-side database (MondoDB) and connect it with a React frontend using an Express API to serve our data.


## Deployment Link

https://bn-vinous-voyages-ee552d981c31.herokuapp.com/

## Instructions 

Follow the link and enjoy the site. No need to install any packages. Click and play.

## Timeframe & Team

This was a group project with James Baird, Benedict Norton (myself), and Nasiim Nuur.
The project was officially to be worked on from the 6th Dev(Wednesday) until 15th Dec(Fri) with presentations being held on that 15th.

## Technology
### Technologies used:
VS Code
Excalidraw
Heroku
Opera browser (Chromatic)

### Packages for VS Code used:
React
React Router Dom
React Bootstrap
React Carousel
React Leaflet (Map package)
MongoDB
Sass

### Languages used:
HTML
Javascript
CSS/ SCSS (with Sass)

## Brief
This project was to demonstrate our skill in creating a backend server and then feeding the information to a frontend application.

### Requirements:
Build a full-stack application by making your own backend and your own front-end.
Use an Express API to serve your data from a Mongo database.
Consume your API with a separate front-end built with React.
Be a complete product which means to add multiple relationships and CRUD functionality for at least a couple of models.
Implement thoughtful user stories/wireframes that are significant enough to help you know which features are core MVP and which you can cut.
Have a visually impressive design to kick your portfolio up a notch.
Be deployed online.

## Planning
We had a decent conversation about what topic our project will be on first with every member pitching at least one idea. We settled on my pitch which was about wineries of the world; as my idea was the most fleshed out; while pitching we even started making notes which ended up being our pseudocode.

Once the idea was in place we put some wireframes together (below). After which we converted our pseudocode onto a Trello board plan, so we could see where everyone was. When the Trello board was in place, we started assigning some tasks from the get go and mostly worked independently.

It was important to me that we had regular check-ins. Therefore we had a morning standup together, to see what we got up to after hours (if we did anything), and an end-of-day check-in. We ended up having additional quick meetings throughout the day when one of us finished a larger task in a show-and-tell manner; this allowed other members to take that code and work on it if it intertwined with their work; or for example was ready to be styled.


### Wireframe
The first step in planning was generating  wireframes. Below you see how our backend communicates with the front-end, the front-end communicating with its multi-page setup, and page layout.







### Pseudocode/Trello
We first started writing a pseudocode/to-do list, which we quickly converted to a Trello board. Here we could see what each member would work on. When I was ready to move to a new task, I would pick a tab -> assign my name -> move to the ‘in progress’ column -> once completed add to the ‘completed’ pile. We made sure to have an MVP section and a reach goal/icebox section; as we had several ideas we wanted to add.

![1](https://github.com/player1xs/Space-Invaders/assets/148089820/51daf30c-1dd2-4462-a53f-c17d848b66b5)


## Build/ Code Process
THE BELOW PARTS ARE ONLY WHAT I HAVE WORKED ON MYSELF, OR COLLABORATIVELY WITH MY TEAM. 
TO SEE NASSIM OR JAMES’ SOLO INPUTS PLEASE REFER TO THEIR README.

### Backend setup
First I set out to create the backend/server-side of our application. After installing packages mentioned above; I got to writing.

Here is the schema I created for the main part of our database (which is about wineries). Some fields in the schema were added later; for example: the latitude and longitude fields; because of the Leaflet Map Module I used, as it required a certain input. With each input adding the type that can be input and of course mandatory fields which will be required for filtering options.

Additionally I added a review schema, so people can leave a comment and rating; for the rating itself I created a virtual field which would take all left reviews and return an average on the winery itself.

![2](https://github.com/player1xs/Space-Invaders/assets/148089820/cb028d32-27db-42f2-adf0-74a32e6cf625)

Next was the User schema, so new accounts can be made. I added functions which would link wineries the user created to their profile page. Also a couple functions which would crypt the password and not read it back if called - for safety.

![3](https://github.com/player1xs/Space-Invaders/assets/148089820/f6ee6a18-6730-42cb-87f0-d4c206948400)

Next I created a couple of controllers. 
The first controller states the CRUD functionality for the wineries which I imported from models.wineries . Each function has a try/catch written into it. To make sure I could catch errors as they pop up and/or inform the user if a step in any of the CRUD attempts was wrong.

The Update and Delete functions were only accessible if that particular user created the winery. Part of my try looked for ownership ID.

![4](https://github.com/player1xs/Space-Invaders/assets/148089820/ac6020fa-5f1a-4d07-92ba-07ded1746127)

![5](https://github.com/player1xs/Space-Invaders/assets/148089820/bf905f1f-d01f-464e-817f-6b0db819c2f1)

This file also included the Create/Delete function for reviews. Again, deletion of a comment was only possible if you wrote it.

![6](https://github.com/player1xs/Space-Invaders/assets/148089820/dc24b5e7-ec73-4e2b-9eb2-138d6cd969d9)

The second controller was for the user. Here is the function to register; which also includes checks if the username is taken, email already used, and if the password + confirm matches. Below that the login function, which checks for correct input vs the database and assigns a token when all positive and keeps the token active for 10 days.

![7](https://github.com/player1xs/Space-Invaders/assets/148089820/670676d0-23f0-45e7-839f-6ffb37ca15b6)

Next, I created the routes for our server. This shows the path the information will follow depending on the method that needs using.

![8](https://github.com/player1xs/Space-Invaders/assets/148089820/a0d11a32-f52a-48e2-8fc5-6bf4c6b03626)

And also a secure route for the user information. Which deconstructs the payload information and then authorizes access.

![9](https://github.com/player1xs/Space-Invaders/assets/148089820/9e784ff0-f0b2-4095-a0df-3298cf714ac2)


Next I updated the index.js file. Where I originally had some of my paths and methods written; and then created their own files for cleanliness. But evidence is still visible as this is where it all comes together to talk to each other and gets the server started and sent to the right place.

![10](https://github.com/player1xs/Space-Invaders/assets/148089820/d9e2694e-4963-440d-8a79-b8c846435710)



For the database to be accessed securely, I also created a .env file. Which holds the connection string to our MongoDB, our PORT number, and the SECRET key; I will however not add my code here for security reasons.
SECRET, CONNECTION STRING, and PORT can be seen in the two images above.

After the server was set up, we sat down as a team and had a round of testing to see whether all functionalities are working. And all our methods carried out correctly.


### Leaflet

Leaflet is a React module similar to Mapbox. This module allowed me to display a map of the world, add my own marker and even customise it.

First I installed the leaflet package in the terminal. I created this in a separate component called Mapbox.jsx . Following online documentation, I imported the necessary actions: MapContainer - for the map box itself, TileLayer - this loaded the map in layers, main layer being the world map itself, and would let me add layers if needed if I wanted to add more complex information, Marker - this added a marker on the map when a new winery was created, and Popup - this would display some information when a marker is clicked (shown below).

Map as shown on the homepage with all wineries.
![11](https://github.com/player1xs/Space-Invaders/assets/148089820/87ec7211-fd92-4433-a977-71e39b932fb6)



Seen here, when an icon is clicked, it would display the main image; name of the winery, and the country it is in. When the name is clicked it will take you directly to that winery single page. The customisation also allowed me to change the icon itself; so it would fit within the theme - a round icon with bottle and glass.

![12](https://github.com/player1xs/Space-Invaders/assets/148089820/42136a7a-afd3-4585-81aa-1d05fe633229)

Below is the Mapbox code. A rather straightforward package (although a little finnkey at first). First brought in our LoaderData from our database; which grabbed the geolocation (lat, long).

Then is the Icon customisation line, with built in sizing rather than doing that in CSS.

Then the actual display of it. First the Container, here I added in coordinates which centers the map and zoom. You could for example set it to Buckingham palace with zoom set to 15, and you would be right on top of it. I left it at 1 because I wanted the entire world in one frame. Then the TileLayer which would show the countries, streets, etc.. Inside that would be the individual markers. This would map through all the LoaderData from our db and place an icon from its coordinates and then Link to the relevant page.

![13](https://github.com/player1xs/Space-Invaders/assets/148089820/cadb0238-4ed3-4008-87e9-d5d1831c91b4)

I also added an additional mapbox on the single winery pages, near the contact/ address section, zoomed in. This map would only display that particular winery; and not all of them.

![14](https://github.com/player1xs/Space-Invaders/assets/148089820/c86ca7f8-05d5-40d1-a900-7b75443c2a6c)

### Hero Carousel

I set up an image gallery on the homepage/ landing page. Once again, a straightforward react application. Installed the packages and imported the necessary actions.

Created an array of images.
And a function to display the images, and move through the carousel with arrow keys.

![15](https://github.com/player1xs/Space-Invaders/assets/148089820/a1fa17ca-5f05-4a47-88c3-ee8f0007ce37)

### Error Page
Created a quick path in main.jsx to a component named: ErrorPage.jsx. In case a file path is lost or address is wrongly entered the user would land on a 404 page. Which displays a themed image and sends you back to the main page (actually first the user will be redirected to a RickRoll and then back to the main index).

![16](https://github.com/player1xs/Space-Invaders/assets/148089820/0fd6b4fd-fd0c-475c-9e47-e21228ca4bf1)

![17](https://github.com/player1xs/Space-Invaders/assets/148089820/35ad9436-4292-4d81-b355-5bf4453ce0bb)

### Winery creation
Working together with James, we structured a user-friendly winery creation page. James handled a lot of the logic here to connect the front end to the server-side database.
I meanwhile created an account with cloudinary, a page that would handle our images on a cloud for all the wineries.

Wrote a function that would talk to cloudinary. When an image is uploaded it would return an url and a secureUrl to tell us where it is. It would automatically take the secureUrl and post it to our database with the rest of the information.

![18](https://github.com/player1xs/Space-Invaders/assets/148089820/7d660f1c-9692-4d5c-9a46-5645b7df7c57)

Then added a line to the create Form. Which i Imported ImageUploadField from the file pictured above here.

![19](https://github.com/player1xs/Space-Invaders/assets/148089820/26f0e84d-8d6a-4729-88f5-32fdcfba7c15)

### Index Page
Now it is time to start displaying our information. Once again using our LoaderData we pull information from our database. James created a filter and incredibly clever search function.
The information on the index page is minimal, so I only pulled images and names. Each winery link to click was the entire image displaying the name in the bottom right, using flexbox and some clever layers of gradient shading; and threw in a little hover effect for a little extra pizzazz.

![21](https://github.com/player1xs/Space-Invaders/assets/148089820/cea969dd-d93f-41f3-ae7e-af9eb9e11a3c)

The container holding our winery list has bootstrap overflow capabilities. So the container is scrollable while not moving the page. This allowed for the search/filter tab to stay in place

![22](https://github.com/player1xs/Space-Invaders/assets/148089820/2cc247d8-a785-405a-b5b2-5dbba7e1d053)

### Winery Single page

This where all our information from the database really came in which we extracted and brought in with our LoaderData. 
Additionally, I used the Leaflet Mapbox here again with a custom icon.
Also brought in our review data. (if any already there)
Plus a form for new reviews to be left.
Assigned all parts of information into their own <divs> so I could manipulate them for styling by targeting direct classnames.



![23](https://github.com/player1xs/Space-Invaders/assets/148089820/8442e49d-5ed8-4012-9e88-dce18aefac63)

![24](https://github.com/player1xs/Space-Invaders/assets/148089820/04572fc4-903e-4974-b983-19a1633e4929)

![25](https://github.com/player1xs/Space-Invaders/assets/148089820/0104b223-1c60-4015-b17d-34e63fbc944b)
![26](https://github.com/player1xs/Space-Invaders/assets/148089820/522f5c24-e42f-4212-8c10-40144ee07837)
![27](https://github.com/player1xs/Space-Invaders/assets/148089820/ed04fc30-f69c-4aea-a9dd-2e603fbec4ab)



### Styling
I have mentioned styling a bit already and shown some images of the finished page. Therefore I wont go into too much detail about the SCSS written. Styling was done with a mix of Sass and Bootstrap.
Once the team settled on a colour scheme. I cracked on and styled the entire application. All gradients, shading, flex layouts, strict image sizing, and flexible text boxes if more text is required.
Feel free to browse through .scss files for anything in particular. Each file corresponds to their related .jsx file and everything has its own className for ease of use/identification/targeting.



## Challenges
The biggest challenge I faced was trying to target specific items within the LeafletMap and Carousel packages. As they basically came somewhat prepackaged. Some of the nested classNames couldn’t always be targeted or showed no change as they had their own styling with a higher priority - but none of that could be seen by me.
But with some additional <divs> and classNames, I made due and got everything the way I wanted in the end.

## Win
Although challenging to target for styling; when I got the map working with custom markers I was over the moon. How clean it was to implement with our database.
And having gone over my notes in advance with a few additional practice sessions - I managed to write the entire server-side in an afternoon, solo. Through team testing we found only 2 spelling mistakes; which were easily remedied and quickly found.

## Takeaways
Although the server was quick to set up, there is more to be understood. 
Going into it, the amount of logic handling on the front-end, ended up much bigger than I expected. I know not to take it for granted or underestimate it. (We did add a fair bit of error handling and fallbacks to make the application airtight)


## Bugs
Once a review is posted, sometimes a user can’t leave a second one, but sometimes can.
On the create field. If image upload is clicked and the file selected and then the complete form button is clicked before the image has loaded on the form it would not load/added to the database. (this can be fixed by streamlining the useState with some better logic).

## Future Improvements
Function to differentiate the user 1. Winery Owner 2. Visitor.
Users can earn badges eg: amount of places left, reviews left, etc..
Profile page displays favourite wineries + wishlist.
Profile update/delete.
Profile icon in the top corner turns into a user icon image.
Filter by avg rating.
Add a Are you of age modal on the landing page.
Newsletter and Blog component.
Add a foreign weather api linked to our geocode to display current weather/forecast at the winery location.
Change the location input. Instead of adding Longitude/Latitude, an autocomplete text field to enter address (there is a mapbox api for this).
