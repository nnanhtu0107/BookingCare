'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Users', [{
    email: 'admin@gmail.com',
    password: '123456', 
    firstName: 'Tudev',
    lastName: 'Nguyen',
     address: 'USA',
    phonenumber: '0787538589',
    gender: 1,
    image: '',
    keyRole: 'R1',
    
    createdAt: new Date(),
    updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
