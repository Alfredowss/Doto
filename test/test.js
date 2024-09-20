import assert from 'assert';
import getData from '../services/marketStudyService.js'; 



describe('Market-study-service', function () {
  describe('testing API calls', function () {
    it('should have 50 registers', async function () {
	    let response = await getData({registers: 50, limit: 0})
	    assert(Array.isArray(response.data.results), 'The response doesnt have registers');
    });
  });
});
