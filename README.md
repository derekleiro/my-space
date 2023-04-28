# my-space
My personal website showcasing my skills and things i have learned as a Software Engineer.
The web app is created purely using React with TypeScript.

## Structure
The app is divided `src/components` that is shared and reused and `src/pages`. Pages folder holds all the pages present on the web app.
Each page is made up of `views`, `components` and an `index.tsx` file. Views holds the UI for the app and desktop version, components folder
holds components unique to that page, and the index.tsx file forms the page you see on your device. 
Types and non-changing values used by the app is stored in the `src/constants` folder. Shared functionality is store in `src/utils/functions`. 
The `src/assets` folder stores all the media and typography used by the app. Finally the `src/store` folder is a volatile storage made using 
Redux to store the various App states.

## Running the app
Clone the project on your machine and open it on your preferred IDE.
On the IDE terminal, run `yarn install` to install all the required dependencies.
Once that is complete run `npm start` to start the app.

Happy coding!
