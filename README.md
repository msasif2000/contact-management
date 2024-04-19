# LumiJobs - Where Opportunities Meet Expertise

- Live Link : https://cellio-contact.web.app/

##Featues
- **Add Contact:**
  Add your desired contact with information.

- **Edit/Delete Contact:**
  You can edit/update/delete your contact.
  
- **Bookmark Contact:**
  Bookmark your favorite contact


## Technology Used

- **Frontend:**
  - React.js for the user interface.
  - React Hook Form for efficient form handling.
  - Axios for making HTTP requests.
  - TypeScript for a strongly typed codebase.
  - React Router for navigation.
  - Tailwind CSS for styling.

- **Backend:**
  - Node.js for server-side development.
  - Express.js as the web application framework.

- **Database:**
  - MongoDB

- **Authentication:**
  - Firebase Authentication for secure user authentication.

## Setup Environment

1. Clone the repository:

    ```bash
    git clone https://github.com/msasif2000/contact-management
    ```

2. Install dependencies:

    ```bash
    cd Project-name
    npm install
    ```

3. Set up Firebase:
   - Create a Firebase project and obtain configuration details.
   - Create a `.env` file in the root directory and add Firebase configuration:

     ```env
     VITE_APIKEY=xxxxxxxxxxxxxxxxx
     VITE_AUTHDOMAIN=xxxxxxxxxxxxxxxxx
     VITE_PROJECTID=xxxxxxxxxxxxxxxxxx
     VITE_STORAGEBUCKET=xxxxxxxxxxxxxxx
     VITE_MESSAGINGSENDERID=xxxxxxxxxxxxxxxxxx
     VITE_APPID=1:xxxxxxxxxxxxxxxxxxxxxxxxxx
     ```

4. Your `firebase.config.ts` file should look like this:

    ```typescript
    const firebaseConfig: FirebaseConfig = {
     apiKey: import.meta.env.VITE_APIKEY,
     authDomain: import.meta.env.VITE_AUTHDOMAIN,
     projectId: import.meta.env.VITE_PROJECTID,
     storageBucket: import.meta.env.VITE_STORAGEBUCKET,
     messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
     appId: import.meta.env.VITE_APPID,
    };
    ```

5. Run the application:

    ```bash
    npm start
    ```
---
- Backend : https://github.com/msasif2000/contact-management-server
---
