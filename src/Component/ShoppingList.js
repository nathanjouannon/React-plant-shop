import { useState } from 'react'
import { plantList } from '../datas/PlantList'
import '../styles/ShoppingList.css'
import Categories from './Categories'
import PlantItem from "./PlantItem.js"

function ShoppingList({cart, updateCart}) {
	const [categorySelect , setCategorySelect] = useState('')

	const categories = plantList.reduce(
        (acc, plant) => 
            acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    )

	function addToCart(name, price) {
		const currentPlantAdded = cart.find((plant) => plant.name === name)
		if (currentPlantAdded) {
			const cartFilteredCurrentPlant = cart.filter((plant) => plant.name !== name)
			updateCart([
				...cartFilteredCurrentPlant, 
				{name, price, amount: currentPlantAdded.amount + 1}
			])
		} else {
			updateCart([...cart,{name, price, amount : 1}])
		}
	}

	return (
		<div className='lmj-shoppingList-container'>
			<Categories  categorySelect={categorySelect} setCategorySelect={setCategorySelect} categories={categories} />

			<ul className='lmj-plant-list'>
				{plantList.map(({ id, cover, name, water, light, price, category }) =>
					!categorySelect || categorySelect === category ? (
						<div key={id}>
							<PlantItem
								cover={cover}
								name={name}
								water={water}
								light={light}
								price={price}
							/>
							<button onClick={() => addToCart(name, price)}>Ajouter</button>
						</div>
					) : null
				)}
			</ul>
		</div>
	)
};



export default ShoppingList;