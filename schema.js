// Here i use mongoose which is an Object Relational Mapper  (ORM) for MongoDB and Node.js.

import mongoose from "mongoose";


// Product Category Schema
const productCategorySchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minLength:[3,'Name must be atleast 3 character long.'],
      maxlength: [50, 'Name cannot exceed 50 characters.'],
    },
    desc: {
      type: String,
      required: true,
      minLength: [5, 'Description must be atleast 5 character long.'],
      maxlength: [350, 'Description cannot exceed 350 characters.'],
    },
    deleted_at:{
        type :Date ,
        default  :null,
    }
  },{timestamps:true});
  
  const ProductCategory = mongoose.model('ProductCategory', productCategorySchema);

  // Product Inverntory

  const productInventorySchema = new mongoose.Schema({
    quantity:{
        type:Number,
        required:true,
        validate:{
            validator:function(value){
                return value>=0;
            },
            message:props=> `${props.value} must be non-negative number`
        }
    },
    deleted_at:{
        type:Date,
        default:null,
    }
  },{timestamps:true});

  const ProductInventorySchema = mongoose.model('ProductInventory', productInventorySchema);

  // Discount
  const discountSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength:[3,'Name must be atleast 3 character long.'],
        maxlength: [50, 'Name cannot exceed 50 characters.'],
      },
      desc:{
        type: String,
        required: true,
        minLength: [5, 'Description must be atleast 5 character long.'],
        maxlength: [350, 'Description cannot exceed 350 characters.'],
      },
      discount_percent:{
        type:Number,
        required:true,
      },
      active:{
        type:Boolean,
        default:false,
      },
      deleted_at:{
        type:Date,
        default:null,
      }

  },{timestamps:true});

  const Discount = mongoose.model('Discount', discountSchema);
  
  // Product Schema
  const productSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    SKU:{
        type :String ,
        required:true,
    },
    category_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ProductCategory',
      required: true,
    },
    inventory_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'ProductInventory',
        required:true,
        unique:true
    },
    price:{
        type:Number,
        required:true,
    },
    discount_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Discount',
        required:true,
    },
    deleted_at:{
        type:Date,

    }
  },{timestamps:true});
  
  const Product = mongoose.model('Product', productSchema);
  