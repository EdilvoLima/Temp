/**
 * Todo
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

var Todo = {
      attributes:{
            text:{
                  type: 'STRING',
                  required: true
            },
            date:{
                  type: 'DATE',
                  required: true
            },
            prioridade:{
                  type: 'STRING',
                  required: true
            },
            done:{
                  type: 'BOOLEAN',
                  required: 'true'
            }
      }
};

module.exports = Todo;
