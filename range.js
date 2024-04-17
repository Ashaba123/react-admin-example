module.exports =(req,res,next)=>{
    res.header('Content-Range', 'posts 0-20/20')
    next()
}

// options.headers.set("Access-Control-Expose-Headers","Content-Range")
// options.headers.set("Content-Range","bytes: 0-9/*")