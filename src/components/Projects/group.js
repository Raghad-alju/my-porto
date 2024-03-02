const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('../../images/projects/group', false, /\.(png|jpe?g|svg)$/));
console.log("image url:",images[0]);



const group=[
    {
        projectName:'Graduation Project | Posify',
        desc:'Our built from scratch model successfully got the highest test accuracy among all the referenced researched. More details are shown in the Abstract.',
        link:'https://github.com/Raghad-alju/movieTickets',
        picture:images[0]
    },
    {
        projectName:'Software Requirement Document | Be A Rescue',
        desc:'In this project we wrote software requirements starting from the functional and non-functional requirements, the use case, use case diagram, use case scenario, UML diagram and prototyping ',
        link:'https://github.com/Raghad-alju/Software-Design-Document/blob/main/Final%20Report%20CSC343.pdf',
        picture:images[1]
    },
    {
        projectName:'Fullstack Website | E-Store',
        desc:'An online CRUD cany shop with registration and login feature for customers and admin. Built using PHP, MySQL, JavaScript, CSS and HTML. ',
        link:'https://github.com/Raghad-alju/movieTickets',
        picture:images[2]
    }

];

export default group;