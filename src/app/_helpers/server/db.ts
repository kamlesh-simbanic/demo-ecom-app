import mongoose from "mongoose";

const Schema = mongoose.Schema;

mongoose.connect(process.env.MONGODB_URI!).then(() => {
  console.log("Database connected");
});
mongoose.Promise = global.Promise;

export const db = {
  User: userModel(),
  Product: ProductModel(),
};

// mongoose models with schema definitions

function userModel() {
  const schema = new Schema(
    {
      name: { type: String, unique: true, required: true },
      hash: { type: String, required: true },
      email: { type: String, required: true },
      mobile: { type: String, required: true },
    },
    {
      // add createdAt and updatedAt timestamps
      timestamps: true,
    }
  );

  schema.set("toJSON", {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
      delete ret._id;
      delete ret.hash;
    },
  });

  return mongoose.models.User || mongoose.model("User", schema);
}

function ProductModel() {
  const schema = new Schema(
    {
      name: { type: String, required: true },
      price: { type: Number, required: true },
      shortDesc: { type: String, required: true },
      imageUrl: { type: String },
      quantity: { type: Number, required: true },
    },
    {
      timestamps: true,
    }
  );

  schema.set("toJSON", {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
      delete ret._id;
    },
  });

  return mongoose.models.Product || mongoose.model("Product", schema);
}
