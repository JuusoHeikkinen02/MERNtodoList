// const Todo = require('./models/Todo')


//     app.get('/todo', async (req, res) => {
//         const todos = await Todo.find();
//         res.json(todos);
//     })

//     app.post('/todo/new', async (req,res) => {
//         const newTask = await Todo.create(req.body);
//         res.status(201).json({newTask})
//     })

//     app.delete('/todo/delete/:id', async(req,res)=>{
//         const result = await Todo.findByIdAndDelete(req.params.id)
//         res.json(result)
//     })
