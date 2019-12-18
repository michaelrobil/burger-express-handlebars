# burger-express-handlebars
A burger logger with MySQL, Node, Express, Handlebars and ORM. Following the MVC design pattern; use Node and MySQL to query and route data in the app, and Handlebars to generate the HTML.
This app deployed in Heroku.
Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.
Whenever a user submits a burger's name, the app will display the burger under "The Burgers that I still have." or "Devoured Burgers!" depend on your choice.
Each burger in "The Burgers that I still have." also has a `Devour it!` button. When the user clicks it, the burger will move down to "Devoured Burgers!" with button "Not Hungry!" to bring it back to the previous area.
The app will store every burger in a database, whether devoured or not.
