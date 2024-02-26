const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('../../images/projects', false, /\.(png|jpe?g|svg)$/));
console.log("image url:",images[0]);
const frontends=[
    {
        projectName:'E-Commerce Abaya',
        desc:' from resume',
        link:'https://github.com/Raghad-alju/movieTickets',
        picture: images[0]
    },
    {
        projectName:'E-Commerce Abaya',
        desc:' from resume',
        link:'https://github.com/Raghad-alju/movieTickets',
        picture:''
    },
    {
        projectName:'E-Commerce Abaya',
        desc:' from resume',
        link:'https://github.com/Raghad-alju/movieTickets',
        picture:''
    }

];

export default frontends;