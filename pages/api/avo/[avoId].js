import Database from '../../../database/bd';

const getAvo = async (req, res) => {
  const { avoId } = req.query;

  const db = new Database();
  const getAvoById = await db.getById(String(avoId));

  res.status(200).json({ success: true, data: getAvoById });
};

export default getAvo;
