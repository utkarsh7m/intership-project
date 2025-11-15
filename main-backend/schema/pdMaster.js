import mongoose from 'mongoose';

const pdMasterSchema = new mongoose.Schema({
  id: String,
  product: String,
  make: String,
  model: String,
  description: String,
  orgUnit: String,
  section: String,
  location: String,
  assignPerson: String,
  dueDate: Date,
}, { timestamps: true });

const PDModel = mongoose.model('PDMaster', pdMasterSchema);

export default PDModel;
