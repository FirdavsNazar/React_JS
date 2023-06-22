import Home from '../components/Home';
import About from '../components/About';
import Projects from '../components/Projects';
import Contacts from '../components/Contacts';

export const navbar = [
{
    id:1,
    title:'Home',
    path: '/home',
    element: <Home/>,
},



{
    id:2,
    title:'About',
    path: '/about',
    element: <About/>,
},

{
    id:3,
    title:'Projects',
    path: '/projects',
    element: <Projects/>,
},

{
    id:4,
    title:'Contacts',
    path: '/contacts/:username',
    element: <Contacts/>,
},



]