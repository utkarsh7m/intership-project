import mongoose from 'mongoose';

const rdMasterSchema = new mongoose.Schema({
  id: String,
  recDate: Date,
  dueDate: Date,
  person: String,
  section: String,
  make: String,
  model: String,
  orgUnit: String,
}, { timestamps: true });

const RDModel = mongoose.model('RDMaster', rdMasterSchema);

export default RDModel;
