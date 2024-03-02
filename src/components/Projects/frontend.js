const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('../../images/projects', false, /\.(png|jpe?g|svg)$/));
console.log("image url:",images[0]);

const frontends=[
    {
        projectName:'E-Commerce Abaya Shop',
        desc:'A highly interactive E-store, with responsive layout. Built using React and tailwind CSS.',
        link:'https://github.com/Raghad-alju/movieTickets',
        picture: images[0]
    },
    {
        projectName:'Project Planner',
        desc:'A highly interactive to-do-list with unique features, with responsive layout. Built using React and tailwind CSS',
        link:'https://github.com/Raghad-alju/movieTickets',
        picture:images[1]
    },
    
];

export default frontends;