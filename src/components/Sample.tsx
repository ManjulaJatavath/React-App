import Testcomp from "./Testcomp";
// Function component Fruites
const Fruites = () => {
    return (
        <h2>Mangoes are sweet</h2>
    );
}
const Veg = () => {
    return (
        <h2>Veg are good for health</h2>
    );
}

// Function component named Sample
const Sample = () => {
    return (
        <div> 
            <Fruites />  
            <Veg />  
            <Testcomp />
        </div>
    );
}

export default Sample;
