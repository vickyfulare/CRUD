import axios from 'axios'

class Post {
    create(formData) {
        const url = "http://localhost:9000/api/create-post";
        const config = {
            headers: {
                'Content-type': 'multipart/form-data'
            }
        }
        return axios.post(url, formData, config)

    }

    getPosts() {
        const url = "http://localhost:9000/api/get-posts";
        return axios.get(url)
    }

    deletePosts(id) {
        const url = "http://localhost:9000/api/delete-posts/" + id;
        return axios.get(url)
    }

    updatePosts(formData) {
        const url = "http://localhost:9000/api/update-posts";
        const config = {
            headers: {
                'Content-type': 'multipart/form-data'
            }
        }
        return axios.post(url, formData, config)

    }
}

const postservice = new Post();

export default postservice;