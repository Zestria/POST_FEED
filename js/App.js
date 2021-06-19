import { Post, createPost } from './hooks.js'

const form = document.getElementById('createPost');
const posts = document.getElementById('posts')

form.onsubmit = e => {
    e.preventDefault()
    if (!e.target[0].value.trim()) return;
    let post = createPost(e.target[0].value.trim())
    posts.appendChild(post)
}

console.log(new Post('text'))