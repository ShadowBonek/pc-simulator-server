export default async function GET(model: any, req: any, res: any) {
  try {
    const componentFound = await model.findByPk(req.params.id);
    return res.json(componentFound);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
}
