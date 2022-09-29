const getBlogs = (cb) => {
    setTimeout(() => {
         cb({
            title:'Welcome to js'
        })
    },2000)
}
getBlogs(cb => {
    console.log(cb.title)
})
