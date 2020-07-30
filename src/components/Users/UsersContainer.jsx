import React    from "react";
import Users from "./Users";
import {followAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";
import {connect} from "react-redux";


let mapStatetoProps = (state)=>{
    return{
        users: state.usersPage.users
    }
}

let mapDispatchtoProps = (dispatch)=>{
    return{
     follow: (userID)=>{
         dispatch(followAC(userID));
     },
      unfollow: (userID)=>{
         dispatch(unfollowAC(userID));
     },
  setUsers: (users)=>{
         dispatch(setUsersAC(users));
     }

    }
}



 export default connect(mapStatetoProps, mapDispatchtoProps)(Users);
// const UsersContainer = connect(mapStatetoProps,mapDispatchtoProps)(Users);
//  export default UsersContainer;
