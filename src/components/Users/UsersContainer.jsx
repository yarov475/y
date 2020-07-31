import React from "react";
import Users from "./Users";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    setUsersTotalCountAC,
    unfollowAC
} from "../../redux/users-reducer";
import {connect} from "react-redux";


let mapStatetoProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchtoProps = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(followAC(userID));
        },
        unfollow: (userID) => {
            dispatch(unfollowAC(userID));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage:(pageNumber)=>{
            dispatch(setCurrentPageAC(pageNumber))

    } ,
        setTotalUsersCount: (totalCount)=>{
            dispatch(setUsersTotalCountAC(totalCount))

    }
}
}


export default connect(mapStatetoProps, mapDispatchtoProps)(Users);
// const UsersContainer = connect(mapStatetoProps,mapDispatchtoProps)(Users);
//  export default UsersContainer;
