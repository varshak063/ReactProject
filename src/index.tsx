import  ReactDOM  from "react-dom";
import UserSearchs  from "./ClassComponent/UserSearchClass";
import { EventComponent } from "./Events/EventComponent";
import { Parent } from "./props/Parent";
import { GuestLists } from "./State/GuestLists";
import { UserSearch } from "./State/UserSearch";

const users1 = [
    {
      name:'john',
      age:20
    },
    {
      name:'Alexa',
      age:20
    },
    {
      name:'Mihella',
      age:20
    }
  ];
const App = () =>{
    return (
        <div>
            <h1>Hi</h1>
            {/* <Parent/> */}
            {/* <GuestLists/> */}
            {/* <UserSearch/> */}
            {/* <EventComponent/> */}
           <UserSearchs users={users1} />
        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector("#root")

)