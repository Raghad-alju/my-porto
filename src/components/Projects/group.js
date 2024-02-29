const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('../../images/projects/group', false, /\.(png|jpe?g|svg)$/));
console.log("image url:",images[0]);



const group=[
    {
        projectName:'group',
        desc:' from resume',
        link:'https://github.com/Raghad-alju/movieTickets',
        picture:images[0]
    },
    {
        projectName:'group',
        desc:' from resume',
        link:'https://github.com/Raghad-alju/Software-Design-Document/blob/main/Final%20Report%20CSC343.pdf',
        picture:images[1]
    },
    {
        projectName:'group',
        desc:' from resume',
        link:'https://github.com/Raghad-alju/movieTickets',
        picture:images[2]
    }

];

export default group;