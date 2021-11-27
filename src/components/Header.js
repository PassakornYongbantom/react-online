import React from 'react'
import Logo from './Logo'

const Header = () => {

    let companyName = "TNI"
    const companyAddress = <p>Bangkok</p>
    let number = 10

    const showMessage = () => {
        return companyName + ".com"
    }

    const isLogin = true;

    const showMe = () =>{
        alert('Hello react')
    }

    const products = [

        {id: 1, name: "Coke"},
        {id: 2, name: "Pepsi"}

    ]

    return (
        <div>
            <h1>Hello {showMessage()}</h1>
            {companyAddress}
            {number * 2}
            {showMessage()}

            {/* {
                isLogin === true ? (
                <>
                    <p>Welcome</p>
                    <p>Teacher</p>
                </>
                ) : (
                <>
                    <p>Welcome</p>
                    <p> Student</p>
                </>
                )
            }

            { isLogin ? <Logo /> : <p>Unlock. </p> } */}

            <button onClick={showMe}>Click me!</button>

            <ul>

            {
                products.map((products,index) => {

                    return (<li key={index}>{index+1} {products.name}</li>)

                })
            }

            </ul>

            <hr/>

        </div>
    )
}

export default Header;

