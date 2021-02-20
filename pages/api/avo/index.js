import Database from '../../../database/bd';

const allAvos = async (req, res) => {
  const db = new Database();
  const allAvos = await db.getAll();

  res.status(200).json({ success: true, data: allAvos });
};

export default allAvos;
