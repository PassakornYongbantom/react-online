import React from 'react'

const Sidebar = () => {

    // let fullname = 'John'
    const [fullname,setFullname] = React.useState('John')
    
    const[isShow,setIsShow] = React.useState(true)

    const changename = () => {
        // fullname = "Mary"
        setFullname("Mary")
        setIsShow(false)
    }

    React.useEffect(() => {
        console.log("sidebar useEffect")
        //ทำงานครั้งแรกที่ render component และทำงานทุกครั้งที่มีการอัพเดต UI
    })

    React.useEffect(() => {
        console.log("sidebar useEffect one time only")
        //ทำงานครั้งแรกครั้งเดียวที่ render component
    },[])

    React.useEffect(() => {
        console.log("sidebar useEffect fullname")
        //ทำงานครั้งแรกครั้งเดียวที่ render component และ ทำงานอีกครั้งเมื่อ fullname เปลี่ยนแปลง
    },[fullname])

    return (
        <>
            <p>สวัสดี {fullname}</p>
            {
                isShow ? <p>Hello</p> : <p>World</p>
            }
            <button onClick={changename}>Change name</button>
        </>
    )

}

export default Sidebar