router.post('/create-product',(req,res)=>{
    const  {name, description,author}=req.body;
     added({name, description,author})
     .then((data)=>{
    console.log(data.rows);
    req.redirect("/")
     })
}) .catch((err) => {
    console.log(err);
    res.status(500).json({ msg: "server error" });
  });
