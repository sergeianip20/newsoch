import {createSlice, PayloadAction} from '@reduxjs/toolkit';

let initialState = {

    PostData: [
        {id: 1, post: 'mypost number 1', likesCoint: 1},
        {id: 2, post: 'mypost number 2', likesCoint: 3},
        {id: 3, post: 'mypost number 3', likesCoint: 12},
    ],
    newPostText: '',
    UserProfile: {
        aboutMe: ' ',
        contacts: {
            facebook: ' ',
            github: '',
            instagram: '',
            mainLink: '',
            twitter: '',
            vk: '',
            website: '',
            youtube: ' ',
        },
        fullName: ' ',
        lookingForAJob: true,
        lookingForAJobDescription: ' ',
        userId: 10,
        photos: {
            large: ' ',
            small: ' '
        }
    }
}
export type AppInitialStateType = typeof initialState
export type UserProfileData = {
    aboutMe: string,
    contacts: {
        facebook: string
        github: string,
        instagram: string
        mainLink: string
        twitter: string
        vk: string
        website: string
        youtube: string
    }
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    userId: number
    photos: {
        large: string
        small: string
    }
}
const slice = createSlice({
        name: 'profile',
        initialState,
        reducers: {
            addPost(state: AppInitialStateType, action) {
                let NewPost = {
                    id: 5,
                    post: state.newPostText,
                    likesCoint: 4
                }
                state.PostData.push(NewPost)
                state.newPostText = ''
            },
            updateNewPostText(state: AppInitialStateType, action: PayloadAction<{ text: string }>) {
                state.newPostText = action.payload.text
            },
            addProfile(state: AppInitialStateType, action: PayloadAction<{ profile: UserProfileData }>) {
                state.UserProfile = action.payload.profile
            }
        }
    }
)
export const ProfileReducers = slice.reducer
export const profileAction = slice.actions