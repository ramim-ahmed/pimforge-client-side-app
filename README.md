# PIM Forge Alternative Product Information System | Mern Stack Application

PIM Forge basically a alternative product system platform that serves as an alternative or recommendation to traditional Product Information Management (PIM) systems for managing product data and related processes.

Live site: client-side

- [pim-forge](https://pim-forge-client-app.vercel.app/)

Features ✨:

<ul>
    <li>Implemented private route api data protected with jwt in backend</li>
    <li>Manage querie his/her added</li>
    <li>Authentication with firebase</li>
    <li>Search Implementation in queries page from backend</li>
    <li>Implementation Pagination optimize way to data showing in front-end</li>
    <li>Implement Private/Protected Route.</li>
    <li>Responsive all devices.</li>
</ul>

Tech Uses 🔥:

- [React](https://react.dev/) : For building user interface.
- [React Router Dom](https://reactrouter.com/en/main): that allows client side routing without page refresh.
- [TanStack Query](https://tanstack.com/query/latest): Modern way to data fetching and asynchrounously
- [Axios](https://axios-http.com/docs/intro): Promise based HTTP method handler on client-side for the browser and node.js
- [Firebase](https://firebase.google.com/): That help us to user authentication.
- [Prop-Types](https://www.npmjs.com/package/prop-types): Runtime type checking for React props and similar objects.
- [TailwindCSS](https://tailwindcss.com/) : A css utiliy classes most popular framework.
- [Shadcnui](https://tailwindcss.com/) : beautifully design ui component library with tailwindcss.
- [Framer-Motion](https://www.framer.com/motion/introduction/) : That allows to help add amazing animaton in react app
- [React-Hot-Toast](https://react-hot-toast.com/) : that allows any action in website and success, error result showing help to way as toast.
- [SweetAlert2](https://sweetalert2.github.io/) : that allows beautfull, responsive, customizable, for javascript pop boxes.
- [React-Spinner](https://www.npmjs.com/package/react-spinners) : that allows to use beautifully design spinner like that showing when data loaded or fetch.
- [Swiper](https://swiperjs.com/) :that allows help pre build slider use to application.
- [React-Hook-Form](https://react-hook-form.com/): that allows to form handling with validation

Please follow the below instructions to run your machine.

1. install nodejs -

   ```sh
   https://nodejs.org/en/download/package-manager
   ```
2. clone this repository
   ```sh
   https://github.com/ramim-ahmed/pimforge-client-side-app
   ```
3. set env variable create [.env] file
   ```sh
   VITE_APP_API_KEY = your firebase config app key
   VITE_APP_AUTH_DOMAIN = your firebase prject auth domain
   VITE_APP_PRJECT_ID = your firebase config project id
   VITE_APP_STORAGE_BUCKET = your firebase config storage bucket
   VITE_APP_MESSAGING_SENDER_ID = your firebase config messaging sender id
   VITE_APP_APP_ID = your firebase config app id
   ```
4. install all packages

   ```sh
   npm install
   ```

5. run project
   ```sh
   npm run dev
   ```
