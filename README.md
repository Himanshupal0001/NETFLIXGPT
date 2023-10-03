# Create your own ⚛ REACT App
This is a simple guide to create your own react app using parcel. Now traditional CRA is great to start your react app or you can use modern vite or other bundle options but it comes with lots of boilerplate. Which probably you won't need for small projects. 

Besides that it is important to know how the react app actually working specially if you spent some time as a react developer. 

# 📒 Dependencies
Install Node.js and npm globally on your machine. While these are the only pre-requisites , It is recommended to install git bash CLI also. 
- node js
- npm
- 
# Steps
## Create a folder for react app
```
mkdir react-app
```
## Cd into react-app directory/folder
```
cd react-app
```

## Initiate npm package manager
```
npm init -y
```

## Install react and react DOM
```
npm i react react-dom 
```

## Install parcel as dev dependency
```
npm i -D parcel
```

## Create react app boilerplate
Create a src folder in the root and create an App.js file. 
```js
import  React  from  "react";
import { createRoot } from  "react-dom/client";
const  App  =  ()  => {
return  (
<div>React App Spinning</div>
)}
const  root  =  createRoot(document.getElementById('root'));
root.render(<App  />)
```
## Create an entry point for the parcel to serve react app
At this point there are many options to choose from such as **.html, .js, .ts  etc** as entry point for react. I chose index.html. Following are the steps for the same.
1. Create index.html in the root folder. 
2. Use **!** shortcut to generate html boilerplate.  
3. Link App.js to the index file
4. Create a css file and link to the index.html file.
```js
<!DOCTYPE  html>
<html  lang="en">
<head>
<meta  charset="UTF-8">
<meta  name="viewport"  content="width=device-width, initial-scale=1.0">
<link  rel="stylesheet"  href="style.css">
<title>React App</title>
</head>
<body>
<div  id="root"></div>
<script  src="/src/App.js"  type="module"></script>
</body>
</html>
```

# 🎉Congratulation 
🥳 You created your own react app. Lets spin it up using below command
```
npx parcel index.html
```
This will spin your app at localhost:1234

## Configure package.json 
Below is the configuration to spin react app using **npm start** and create build using **npm run build**
```json
{
"name": "netflixgpt",
"version": "1.0.0",
"description": "",
"scripts": {
"start": "parcel index.html",
"build": "parcel build index.html",
"test": "echo \"Error: no test specified\" && exit 1"
},
"keywords": [],
"author": "",
"license": "ISC",
"dependencies": {
"react": "^18.2.0",
"react-dom": "^18.2.0"
},
"devDependencies": {
"parcel": "^2.9.3",
"process": "^0.11.10",
}
}
```
Now the app spin up using **npm start** command in the terminal.

This is it. The react app is ready 

# 💅 Additional configuration to setup tailwindcss. 
Same guide is available at   tailwindcss official installation guide for parcel.  See the steps below.

 ## Dev install and config file for css
```js
npm install -D tailwindcss postcss
npx tailwindcss init
```
***npx tailwindcss init*** will create a tailwind.config.js file.  Copy paste the below code .

```js
/**  @type  {import('tailwindcss').Config}  */
module.exports  = {
content: [
"./src/**/*.{html,js,ts,jsx,tsx}",
],
theme: {
extend: {},
},
plugins: [],
}
```
## Create .postcssrc file
Create .postcssrc file in root and copy paste the below lines
```js
{
"plugins": {
"tailwindcss": {}
}
}
```

## Add tailwind directive to main css file
Add below code to your style.css file.
```js
@tailwind  base;
@tailwind  components;
@tailwind  utilities;
```

## 🎊 Congratulations for setting up tailwind in your own react app.
