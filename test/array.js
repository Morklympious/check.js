var expect = require('chai').expect,
    array  = require('../src/components/array.js');

    describe('Array Checking', function() {

      describe('contains(collection, value)', function() {
        var contains = array.contains;

        it('should be a function', function(){
          expect(contains).to.be.a('function');
        });

        it('should return false on empty array', function(){
          expect(contains([], 1)).to.be.false;
        });

        it('should return false on array without matching element', function(){
          expect(contains([1, 2, 3], 5)).to.be.false;
        })

        it('should return true on array with matching element', function(){
          expect(contains([1, 2, 3], 3)).to.be.true;
        })

      });


      describe('empty(collection)', function() {
        var empty = array.empty;


        it('should be a function', function(){
          expect(empty).to.be.a('function');
        });

        it('should return true for empty array', function(){
          expect(empty([])).to.be.true;
        })

        it('should return false on array with elements', function(){
          expect(empty([1, 2, 3])).to.be.false;
        })
      });

    });
