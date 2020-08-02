"use strict";

/**
 * Lifecycle callbacks for the `product` model.
 */

module.exports = {
  lifecycles: {
    async beforeCreate(data) {
      if (!data.image) {
        let { image } = await strapi.services["default-product-image"].find();
        let imageArr = [image];
        data.image = imageArr;
      }
    },
    async afterCreate(data) {
      try {
        let defaultLang = await strapi.services["default-language"].find();
        await strapi.services["product-t"].create({
          product: data.id,
          name: data.name,
          language: defaultLang.id,
          price: data.price,
        });
      } catch (e) {
        console.log(e.errors.name, "product.js afterCreate lifecycle");
      }
    },
  },

  // Before updating a value.
  // Fired before an `update` query.
  // beforeUpdate: async (model, attrs, options) => {},

  // After updating a value.
  // Fired after an `update` query.
  // afterUpdate: async (model, attrs, options) => {},

  // Before destroying a value.
  // Fired before a `delete` query.
  // beforeDestroy: async (model, attrs, options) => {},

  // After destroying a value.
  // Fired after a `delete` query.
  // afterDestroy: async (model, attrs, options) => {}
};
