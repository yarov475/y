import React from "react";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: "how are you?", likesCount: 12},
            {id: 2, message: "helo Frirnd!!!", likesCount: 15},
            {id: 3, message: "helo Frirnds!!!", likesCount: 15}
        ],
    },
    dialogPage: {
            dialogs: [
                {id: 1, name: 'Dima', src:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFhUXFxUVFxcYFxoYFxUYFRUWFxUVFxcYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGy0lICUtL"},
                {id: 2, name: 'Sacha'}
            ],

            messages:[
                {id: 1, message: "hi, guy!!!!!"},
                {id: 2, message: "Coool"}
            ]
        },
    sideBar: {
        friends:[
            {id:1, avatar:1},
            {id:2, avatar:2}
        ]
    }
    }

    export let addPost = (postMessage)=>{
    let newPost ={
        id:5,
        message:postMessage,
        LikesCount: 345
    }
    state.profilePage.posts.push(newPost)

    }
export default state;