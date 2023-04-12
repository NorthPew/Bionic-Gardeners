
function OrderPageButton({setOrderList, item}) {

    const testFunction = () => {

        setOrderList(orderList => {
            // Gör kopia av orderList
            // Lägg till item till nya orderList
            // Retunera nya orderList

            let copiedList = [...orderList]
            copiedList.push(item)
            console.log(copiedList);
            return copiedList
        })
    }

    return (
        <button onClick={testFunction}>
            <span className="material-symbols-outlined">add_circle</span>
        </button>
    )
}

export default OrderPageButton