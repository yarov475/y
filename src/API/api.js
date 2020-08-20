import * as axios from "axios";



const instance = axios.create(
    {
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        headers: {
            "API-KEY": "a0d25507-a821-41ad-8d3e-c4269e207d98"
        }
    });

export  const usersApi={ 
     getUsers(currentPage = 1, pageSize = 10)  {
        return instance.get( `users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    }

}



export const getUsers2 = (currentPage = 1, pageSize = 10) => {
    return instance.get(`follow?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data
        });
}




//////////////////////////////////////////my code
 export const authApi=()=>{
     return    instance.get(`auth/me`)
         .then(response => {

             if (response.data.resultCode===0){
                 let {id, login, email}=response.data.data;
                 this.props.setAuthUserData(id, email, login);
             }

         });

 }
