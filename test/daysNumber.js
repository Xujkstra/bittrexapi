// const getDaysNumber = (year, month) => {
//   const type31Month = [1,3,5,7,8,10,12]
//   const type30Month = [4,6,9,11]
//   if(type31Month.indexOf(month) > -1) return 31
//   if(type30Month.indexOf(month) > -1) return 30
//   if((year % 4 === 0 && year % 100!== 0) || year % 400 === 0) {
//     return 29
//   }
//   return 28
// }

// // describe('#get Days Number', function() {
// // 	it('should return 31', function() {
// // 		assert.equal(31, getDaysNumber(2017, 10))
// // 	});
// // 	it('should return 30', function() {
// // 		assert.equal(30, getDaysNumber(2017, 11))
// // 	});
// // 	it('should return 29', function() {
// // 		assert.equal(29, getDaysNumber(2016, 2))
// // 	}),
// // 	it('should return 28', function() {
// // 		assert.equal(28, getDaysNumber(1900, 2))
// // 	}),
// // 	it('should return 29', function() {
// // 		assert.equal(29, getDaysNumber(2000, 2))
// // 	}),
// // 	it('should return 28', function() {
// // 		assert.equal(28, getDaysNumber(2017, 2))
// // 	})
// // })