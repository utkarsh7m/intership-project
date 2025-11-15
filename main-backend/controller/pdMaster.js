import PDModel from '../schema/pdMaster.js';

export const createPD = async (req, res) => {
  try {
    const pdMasterData = req.body;
    const newPDRecord = new PDModel(pdMasterData);
    await newPDRecord.save();
    res.status(201).json({ message: 'Data saved successfully', record: newPDRecord });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getPDReport = async (req, res) => {
  try {
    const pdMasterData = await PDModel.find();
    res.status(200).json(pdMasterData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
