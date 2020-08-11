import React from "react";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    setUsersTotalCountAC, toggleIsFetching,
    unfollowAC
} from "../../redux/users-reducer";
import {connect} from "react-redux";
import * as axios from "axios";
import Users from "./Users";
import loader from "../../assets/images/Spinner-1s-200px.svg"
import Preloader from "../common/preloader/preloader";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching( true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching( false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching( true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching( false);
                this.props.setUsers(response.data.items);

            });
    }


    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null }

            <Users totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        onPageChanged={this.onPageChanged}
                        users={this.props.users}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}

        />
        </>


    }
}

let mapStatetoProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
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
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))

        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount))

        },
        toggleIsFetching: (isFetching)=>{
            dispatch(toggleIsFetching(isFetching));
        }
    }
}


export default connect(mapStatetoProps, mapDispatchtoProps)(UsersContainer);
// const UsersContainer = connect(mapStatetoProps,mapDispatchtoProps)(Users);
//  export default UsersContainer;
