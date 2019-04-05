import { HOME_ACTION_TYPES } from "./actionTypes";

export function getAllPosts(data) {
    return {
        type: HOME_ACTION_TYPES.GET_ALL_POSTS,
        posts: data
    }
}