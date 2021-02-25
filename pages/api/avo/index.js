import Database from '@database/bd';
//import enablePublicAccess from '@cors';

const allAvos = async (req, res) => {
  //await enablePublicAccess(req, res);

  const db = new Database();
  const allAvos = await db.getAll();

  res.status(200).json({ success: true, data: allAvos });
};

export default allAvos;
