'use strict';

/**
 * corporate-fd service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::corporate-fd.corporate-fd');
