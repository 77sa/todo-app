const express = require('express')
const router = express.Router()

const Post = require('../../models/post')

const getPost = async (req, res, next) => {
    const {id} = req.params
    let post

    try{
        post = await Post.findById({_id:id})
        if(!post){
            res.status(404).json({message: 'No post'})
        }
    } catch (error){
        return res.status(500).json({error: error.message})
    }

    res.post = post
    next()
}

// Get all
router.get('/', async (req, res) => {
    try{
        const posts = await Post.find()
        res.json(posts)
    } catch(error){
        console.log(error)
        res.status(500).json({error: error.message})
    }
})

// Get one
router.get('/:id', getPost, (req, res) => {
    res.json(res.post)
    
})

// Create one
router.post('/', async (req, res) => {
    const {title, description} = req.body

    const newPost = new Post({
        title,
        description
    })

    try{
        await newPost.save()
        res.status(201).json({newPost})
    } catch (error){
        res.status(500).json({error: error.message})
    }
})

// Delete one
router.delete('/:id', getPost, async (req, res) => {
    try{
        await res.post.remove()
        res.json({message: 'Post deleted'})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})

// Update one
router.patch('/:id', getPost, async(req, res) => {
    const {title, description} = req.body

    if(title){
        res.post.title = title
    }
    if(description){
        res.post.description = description
    }

    try {
       const updatedPost = await res.post.save()
       res.json(updatedPost)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})


module.exports = router