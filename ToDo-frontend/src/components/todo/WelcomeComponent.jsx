import { useState } from "react"
import { useParams, Link } from "react-router-dom"
import { retriveHelloWorldBean, retriveHelloWorldPath } from "./api/HelloWorldApiService"

function WelcomeComponent() {
    const { username } = useParams()

    const [message, setMessage] = useState(null)

    function callHelloWorldApi() {

        console.log('called')

        // axios.get("http://localhost:8080/hello-world")
        // .then((response)=>successResponse(response))
        // .catch((error)=>errorResponse(error))
        // .finally(()=>console.log('clean up'))

 
        // retriveHelloWorldBean()
        //     .then((response) => successResponse(response))
        //     .catch((error) => errorResponse(error))
        //     .finally(() => console.log('clean up'))
        
            retriveHelloWorldPath('Naman')
            .then((response) => successResponse(response))
            .catch((error) => errorResponse(error))
            .finally(() => console.log('clean up'))


    }

    function successResponse(response) {
        console.log(response)
        // Retreiving as String from Backend
        //setMessage(response.data)
        // Retreiving as JSON(Bean) from Backend
        setMessage(response.data.message)
    }

    function errorResponse(error) {
        console.log(error)
    }


    return (
        <div className="WelcomeComponent">
            <h1>
                Welcome {username}!
            </h1>
            <div>

                Manage your Todos- <Link to="/todos">Go Here</Link>
            </div>
            <div>
                <button className="btn btn-success m-5" onClick={callHelloWorldApi} >Click To Call Hello Worl API</button>
            </div>
            <div className="text-info">{message}</div>
        </div>
    )
}
export default WelcomeComponent