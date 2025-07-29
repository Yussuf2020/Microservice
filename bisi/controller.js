export const userNameCont = (req,res)=>{
    const username = req.params.username
    // res.send(`Welcome ${username}`)
    res.send("This the login page")
}


export const queryControl= (req,res)=>{
    const keyword = req.query.keyword
    // res.send(`Searching ${keyword}`)
    res.send('This is the signIn Page')
}

export const deleteCon = (req,res)=>{
    const userid = req.params.id
    res.send(`${userid} has succefully been removed from the database`)
}