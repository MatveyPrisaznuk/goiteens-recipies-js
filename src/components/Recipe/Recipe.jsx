import Item from "../Item/Item"

function Recipe({recipe}) {
    return <ul>
        {recipe.map(({name, time, servings, calories, difficulty, image}) => {
            return (
                <Item name={name} time={time} servings={servings} calories={calories} difficulty={difficulty} image={image}/>
            )
        })}
    </ul>
}

export default Recipe