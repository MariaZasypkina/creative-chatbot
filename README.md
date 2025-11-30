# Creative Chatbot

A small interactive chatbot built for the Creative Code Palette website.  
It helps users navigate the site, explore services, check pricing, learn about the process and open contact options.

The project is created as a standalone repo so it can be used as a portfolio example and later integrated into the main site.

## Features

- Clickable chat bubbles for easy navigation  
- Simple tree based logic (no backend required)  
- Custom design in lavender and sage colors  
- Automatic email action for contact requests  
- Auto scroll during conversation  
- Clean UX for desktop and mobile

## Tech Stack

- React  
- Vite  
- JavaScript  
- Custom CSS (no UI libraries)

<img width="353" height="461" alt="Screenshot 2025-11-29 at 9 35 57 PM" src="https://github.com/user-attachments/assets/066066d0-3925-49b4-80a6-f9d1e1a22426" />  <img width="351" height="445" alt="Screenshot 2025-11-29 at 9 36 17 PM" src="https://github.com/user-attachments/assets/38d7e81c-8e1e-4321-b7a5-ca1733fba687" /> <img width="347" height="450" alt="Screenshot 2025-11-29 at 9 36 28 PM" src="https://github.com/user-attachments/assets/564d34c8-ba80-43d5-956b-ea2e5a24e38b" />


## Local Setup

1. Clone the repo
2. Install dependencies  

npm install
npm run dev

http://localhost:5173

## Project Structure
src/
  components/
    ChatBot/
      ChatWindow.jsx
      ChatMessage.jsx
      ChatInput.jsx
      treeData.js
  App.jsx
  main.jsx
  styles.css

## How It Works

The chatbot uses a simple tree based structure located in treeData.js.
Each branch contains a message and a list of clickable options.
When the user clicks a bubble, the bot sends the corresponding branch as a reply.
Email options trigger a mailto link and open the user's mail app.
Integration
You can copy the ChatBot folder into any React project and import the component anywhere inside your layout.
The chatbot does not depend on backend logic and runs entirely in the browser.


## License
This project is created for Creative Code Palette by Maria Zasypkina and can be reused for portfolio and educational purposes.
