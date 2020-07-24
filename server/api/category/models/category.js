"use strict";

/**
 * Lifecycle callbacks for the `category` model.
 */

module.exports = {
  lifecycles: {
    // Called before an entry is created
    async afterCreate(data) {
      console.log(data);
      try {
        let defaultLang = await strapi.services["default-language"].find();
        await strapi.services["category-t"].create({
          category: data.id,
          name: data.name,
          language: defaultLang.id,
        });
      } catch (e) {
        console.log(e.errors.name, "category.js afterCreate lifecycle");
      }
    },
    // Called after an entry is created
    // afterCreate(result) {},
  },
};

// module.exports = {
//   // Before saving a value.
//   // Fired before an `insert` or `update` query.
//   // beforeSave: async (model, attrs, options) => {},
//   // After saving a value.
//   // Fired after an `insert` or `update` query.
//   // afterSave: async (model, response, options) => {},
//   // Before fetching a value.
//   // Fired before a `fetch` operation.
//   // beforeFetch: async (model, columns, options) => {},
//   // After fetching a value.
//   // Fired after a `fetch` operation.
//   // afterFetch: async (model, response, options) => {},
//   // Before fetching all values.
//   // Fired before a `fetchAll` operation.
//   // After fetching all values.
//   // Fired after a `fetchAll` operation.
//   // afterFetchAll: async (model, response, options) => {},
//   // Before creating a value.
//   // Fired before an `insert` query.
//   // beforeCreate: async (model, attrs, options) => {},
//   // After creating a value.
//   // Fired after an `insert` query.
//   // afterCreate: async (model) => {
//   // },
//   // Before updating a value.
//   // Fired before an `update` query.
//   // beforeUpdate: async (model, attrs, options) => {},
//   // After updating a value.
//   // Fired after an `update` query.
//   // afterUpdate: async (model, attrs, options) => {},
//   // Before destroying a value.
//   // Fired before a `delete` query.
//   // beforeDestroy: async (model, attrs, options) => {},
//   // After destroying a value.
//   // Fired after a `delete` query.
//   // afterDestroy: async (model, attrs, options) => {}
// };
