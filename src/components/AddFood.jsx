import { useState } from "react"
import {
	isValid,
	isValidIngredient,
	isValidPrice,
	isValidUrl,
} from "./validation"

function AddFood({ foodMenuArr, updateFoodMenu }) {
	const [name, setName] = useState("")
	const [ingredients, setIngredients] = useState("")
	const [price, setPrice] = useState("")
	const [img, setImg] = useState("")
	const [wrongAddName, setWrongAddName] = useState(false)
	const [wrongAddIngredient, setWrongAddIngredient] = useState(false)
	const [wrongAddPrice, setWrongAddPrice] = useState(false)
	const [wrongAddImg, setWrongAddImg] = useState(false)
	const [isVisible, setIsVisible] = useState(false)
	const [isEmptyName, setIsEmptyName] = useState(false)
	const [isEmptyIngredient, setIsEmptyIngredient] = useState(false)
	const [isEmptyPrice, setIsEmptyPrice] = useState(false)
	const [isEmptyImg, setIsEmptyImg] = useState(false)

	const [isValidAddName, notValidAddName] = isValid(name)
	const isValidClassName = wrongAddName
		? isValidAddName
			? "valid"
			: "invalid"
		: ""
	const [isValidAddIngredient, notValidAddIngredient] =
		isValidIngredient(ingredients)
	const isValidClassIngredient = wrongAddIngredient
		? isValidAddIngredient
			? "valid"
			: "invalid"
		: ""
	const [isValidAddPrice, notValidAddPrice] = isValidPrice(price)
	const isValidClassPrice = wrongAddPrice
		? isValidAddPrice
			? "valid"
			: "invalid"
		: ""
	const [isValidAddImg, notValidAddImg] = isValidUrl(img)
	const isValidClassImg = wrongAddImg
		? isValidAddImg
			? "valid"
			: "invalid"
		: ""

	function handleFoodSubmit(e) {
		e.preventDefault()
		if (
			isValidAddName &&
			isValidAddPrice &&
			isValidAddIngredient &&
			isValidAddImg
		) {
			let id = self.crypto.randomUUID()
			const newFoodMenu = [
				...foodMenuArr,
				{ name, ingredients, price, img, id },
			]
			updateFoodMenu(newFoodMenu)
			setName("")
			setIngredients("")
			setPrice("")
			setImg("")
			setIsEmptyName(true)
			setIsEmptyIngredient(true)
			setIsEmptyPrice(true)
			setIsEmptyImg(true)
		} else if (
			name == "" ||
			ingredients == "" ||
			price == "" ||
			img == ""
		) {
			setIsVisible(true)
		}
		setTimeout(() => {
			setIsVisible(false)
		}, 2000)
	}

	function handleNameChange(e) {
		setName(e.target.value)
		if (e.target.value === "") {
			setIsEmptyName(true)
		} else {
			setIsEmptyName(false)
		}
	}

	function handleIngredientsChange(e) {
		setIngredients(e.target.value)
		if (e.target.value === "") {
			setIsEmptyIngredient(true)
		} else {
			setIsEmptyIngredient(false)
		}
	}

	function handlePriceChange(e) {
		setPrice(e.target.value)
		if (e.target.value === "") {
			setIsEmptyPrice(true)
		} else {
			setIsEmptyPrice(false)
		}
	}

	function handleImageChange(e) {
		setImg(e.target.value)
		if (e.target.value === "") {
			setIsEmptyImg(true)
		} else {
			setIsEmptyImg(false)
		}
	}

	return (
		<section className="add-food-container">
			<h1 className="add-food-header">Lägg till ny maträtt</h1>
			<div className="add-food">
				<form className="add-food-form" onSubmit={handleFoodSubmit}>
					{isVisible && (
						<div className="popupInvalid">
							Vänligen fyll i alla fälten.
						</div>
					)}
					<div className="order-container">
						<input
							placeholder="Namn"
							id="add-food-input-name"
							type="text"
							value={name}
							className={isValidClassName}
							onChange={handleNameChange}
							onBlur={() => setWrongAddName(true)}
						></input>
						<span className="input-icon-order">
							{isEmptyName
								? ""
								: wrongAddName
								? isValidAddName
									? "✔️"
									: "❌"
								: ""}
						</span>
						<span className="display-error-order">
							{" "}
							{isEmptyName
								? ""
								: wrongAddName
								? notValidAddName
								: ""}
						</span>
					</div>

					<div className="order-container">
						<input
							placeholder="Ingredienser"
							id="add-food-input-ingredients"
							type="text"
							value={ingredients}
							className={isValidClassIngredient}
							onChange={handleIngredientsChange}
							onBlur={() => setWrongAddIngredient(true)}
						></input>
						<span className="input-icon-order">
							{isEmptyIngredient
								? ""
								: wrongAddIngredient
								? isValidAddIngredient
									? "✔️"
									: "❌"
								: ""}
						</span>
						<span className="display-error-order">
							{" "}
							{isEmptyIngredient
								? ""
								: wrongAddIngredient
								? notValidAddIngredient
								: ""}
						</span>
					</div>

					<div className="order-container">
						<input
							placeholder="Pris"
							id="add-food-input-price"
							type="text"
							value={price}
							className={isValidClassPrice}
							onChange={handlePriceChange}
							onBlur={() => setWrongAddPrice(true)}
						></input>
						<span className="input-icon-order">
							{isEmptyPrice
								? ""
								: wrongAddPrice
								? isValidAddPrice
									? "✔️"
									: "❌"
								: ""}
						</span>
						<span className="display-error-order">
							{" "}
							{isEmptyPrice
								? ""
								: wrongAddPrice
								? notValidAddPrice
								: ""}
						</span>
					</div>

					<div className="order-container">
						<input
							placeholder="Bild URL"
							id="add-food-input-image"
							type="text"
							value={img}
							className={isValidClassImg}
							onChange={handleImageChange}
							onBlur={() => setWrongAddImg(true)}
						></input>
						<span className="input-icon-order">
							{isEmptyImg
								? ""
								: wrongAddImg
								? isValidAddImg
									? "✔️"
									: "❌"
								: ""}
						</span>
						<span className="display-error-order">
							{" "}
							{isEmptyImg
								? ""
								: wrongAddImg
								? notValidAddImg
								: ""}
						</span>
					</div>

					<button className="add-button" type="submit">
						Lägg till mat
					</button>
				</form>
			</div>
		</section>
	)
}

export default AddFood
