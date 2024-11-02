import Card from './Card';

function Tours({tours, removeTour}){

        return (<div className="flex justify-center flex-wrap max-w-[1300px] my-0 mx-auto">
                {
                        tours.map( (tour) => {return <Card {...tour} removeTour={removeTour}> </Card>}) // ...tour se aap individual keys bhejre ho
                }
        </div>)

}

export default Tours; 