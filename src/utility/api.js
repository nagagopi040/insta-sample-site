import axios from "axios";

export const getUsers = () => {
  axios.get('https://api.github.com/users')
    .then(res => {
      if(res){
        return res.data ? res.data : [];
      } else {
        return [];
      }
    }).catch(err => {
      throw err;
    })
}