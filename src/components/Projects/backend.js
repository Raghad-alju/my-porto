const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('../../images/projects/backend', false, /\.(png|jpe?g|svg)$/));
console.log("image url:",images[0]);

const backends=[
    {
        projectName:'Movie Tickets Manger',
        desc:' .NET Core REST api contain role based authintication and authourization',
        link:'https://github.com/Raghad-alju/movieTickets',
        picture:images[0]
    }


];

export default backends;