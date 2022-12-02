export default async function POST(model: any, req: any, res: any) {
  try {
    const savedComponent = await model.create(req.body);
    console.log("Saved Component");
    res.json(savedComponent);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
}
