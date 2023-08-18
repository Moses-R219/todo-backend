const todomodel=require('../models/model')

module.exports.getToDo=async(req,res)=>{
    const todo=await todomodel.find();
    console.log(todo);
    res.send(todo)
}

module.exports.saveToDo = async (req, res) => {
    try {
        const { title, desc } = req.body;
        
        if (!title || !desc) {
            return res.status(400).json({ error: 'Both title and description are required.' });
        }

        const newData = await todomodel.create({ title, desc });
        console.log("Data inserted:", newData);
        res.status(201).json(newData);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'An error occurred while saving the ToDo.' });
    }
}



module.exports.updatetodo=async(req,res)=>{
   
        const {_id,title,desc}=req.body
        todomodel
        .findByIdAndUpdate(_id,{title,desc})
        .then(()=>res.send("Updated success"))
        .catch((err)=>console.log(err))
   
}
module.exports.deletetodo=async(req,res)=>{
   
        const {_id}=req.body
        todomodel
        .findByIdAndDelete(_id)
        .then(()=>res.send("Deleted success"))
        .catch((err)=>console.log(err))
   
}