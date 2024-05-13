import mongoose from "mongoose";

const Schema = mongoose.Schema;

mongoose.connect(process.env.MONGODB_URI!).then(() => {
  console.log("Database connected");
  
});
mongoose.Promise = global.Promise;

export const db = {
  User: userModel(),
  Product: ProductModel(),
  Order: OrderModel(),
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

function OrderModel() {
  const schema = new Schema(
    {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      houseNo: {
        type: String,
        required: true,
      },
      street: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      province: {
        type: String,
        required: true,
      },
      postalCode: {
        type: String,
        required: true,
      },
      amount: {
        type: Number,
        required: true,
      },
      items: [
        {
          productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
            required: true,
          },
          quantity: {
            type: Number,
            required: true,
          },
          price: {
            type: Number,
            required: true,
          },
          name: {
            type: String,
            required: true,
          },
          total: {
            type: Number,
            required: true,
          },
        },
      ],
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

  return mongoose.models.Order || mongoose.model("Order", schema);
}
