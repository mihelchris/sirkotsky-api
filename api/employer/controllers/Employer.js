'use strict';

/**
 * Employer.js controller
 *
 * @description: A set of functions called "actions" for managing `Employer`.
 */

module.exports = {

  /**
   * Retrieve employer records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.employer.search(ctx.query);
    } else {
      return strapi.services.employer.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a employer record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.employer.fetch(ctx.params);
  },

  /**
   * Count employer records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.employer.count(ctx.query);
  },

  /**
   * Create a/an employer record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.employer.add(ctx.request.body);
  },

  /**
   * Update a/an employer record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.employer.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an employer record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.employer.remove(ctx.params);
  }
};
