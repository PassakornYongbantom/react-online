import React from 'react'
import Logo from './Logo'
import Title from '../styles/title/Title'
import Button from '../styles/button/Button'
import PropTypes from 'prop-types';


const Header = () => {
    
        let companyName = "TNI"
        const companyAddress = <p>Bangkok</p>
        let number = 10
            const showMessage = () => {
            return companyName + ".com"
        }

        const isLogin = true;
        const keyword = 'correct';
        const showMe = () =>{
            alert('Hello react')
        }

        const products = [
            {id: 1, name: "Coke"},
            {id: 2, name: "Pepsi"}
        ]
    
    return (
        <div>

            <Title>Project React</Title>
            <h1>Hello {showMessage()}</h1>
            {companyAddress}
            {number * 2}
            {showMessage()}

            {
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

            { isLogin ? <Logo /> : <p>Unlock. </p> }

            { keyword === 'correct' ? (
                <>
                <Button primary onClick={showMe}>
                    Click me!
                </Button> 
                </>
            ) : (
                <>
                <Button onClick={showMe}>
                    Click me !
                </Button>
                </>
            )
            
            }

            <otherButton></otherButton>

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

Header.propTypes ={
  keyword: PropTypes.bool
};

export default Header;

