import Country from "./Country";

const CountriesList = ({countries}) => {


    //breaking up array of tasks into indiviual tasks
    const taskComponent = countries.map(country => {
        return(
            <Country countries={country} key={country.id} />
        )
    })


    //returning thetask components from above
    return(
        <div className="task-list">
            {taskComponent}
        </div>
    )


}

export default CountriesList;


