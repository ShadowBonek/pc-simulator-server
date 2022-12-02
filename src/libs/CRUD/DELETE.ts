import fs from "fs";
import path from "path";
export default async function DELETE(model: any, req: any, res: any) {
  try {
    // !Find by :id
    const componentFound: any = await model.findByPk(req.params.id);
    if (!componentFound) return res.status(204).json();
    // !Path to delete
    const pathDelete = path.join(__dirname, `../../../public/${req.query.component}`);
    // !Delete query
    await model.destroy({
      where: {
        id: req.params.id,
      },
    });
    // !Delete images
    if (fs.existsSync(`${pathDelete}/${componentFound.imageM}`) && componentFound.imageM !== "") {
      fs.unlinkSync(`${pathDelete}/${componentFound.imageM}`);
      console.log("ImageM deleted!");
    }
    if (fs.existsSync(`${pathDelete}/${componentFound.imageS}`) && componentFound.imageS !== "") {
      fs.unlinkSync(`${pathDelete}/${componentFound.imageS}`);
      console.log("ImageS deleted!");
    }
    return res.status(204).json();
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
}
