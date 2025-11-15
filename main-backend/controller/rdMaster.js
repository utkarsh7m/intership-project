import RDModel from '../schema/rdMaster.js';

export const createRD = async (req, res) => {
  try {
    const rdMasterData = req.body;

    if (Array.isArray(rdMasterData)) {
      const processedRDData = rdMasterData.map(item => ({
        ...item,
        recDate: item.recDate ? new Date(item.recDate) : undefined,
      }));
      const newRDRecords = await RDModel.insertMany(processedRDData);
      return res.status(201).json({ message: 'Data saved successfully', records: newRDRecords });
    }

    const single = {
      ...rdMasterData,
      recDate: rdMasterData.recDate ? new Date(rdMasterData.recDate) : undefined,
    };
    const newRDRecord = new RDModel(single);
    await newRDRecord.save();
    res.status(201).json({ message: 'Data saved successfully', record: newRDRecord });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getRDReport = async (req, res) => {
  try {
    const rdMasterData = await RDModel.find();
    res.status(200).json(rdMasterData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
