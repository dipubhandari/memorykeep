import DataModel from "../model/dbData.js"

class MyController {
  static delete = async (req, res) => {
    const id = req.params.id
    await DataModel.findByIdAndDelete(id)
    res.redirect('/')
  }
  static edit = () => {
  }
  static viewIndex = async (req, res) => {
    const result = await DataModel.find()
    res.render("index", { data: result })
  }
  static insertData = async (req, res) => {
    try {
      const { name, title, disc } = req.body
      const image = req.body.image
      const time = new Date();
      console.log(time)
      console.log(image)
      let hash = req.body.tags
      const tags = hash.split(",")
      const createDoc = new DataModel({
        name: name,
        title: title,
        disc: disc,
        tags: tags,
        time: time,
        image: image
      })
      const result = await createDoc.save()
      if (result) {
        console.log("data inserted")
      }
      res.redirect("/")
    } catch (error) {
    }
  }
}

export default MyController