export default async function PUT(model: any, req: any, res: any) {
  try {
    const componentFound = await model.findByPk(req.body.id);
    if (!componentFound) return res.status(204).json();
    componentFound.set(req.body);
    const result = await componentFound.save();
    return res.json(result);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
}
