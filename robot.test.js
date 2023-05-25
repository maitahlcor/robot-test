const { createRobot } = require('./robot.js');

describe('Robot', () => {
	test('Cambia el titulo y empieza a escribir tu primera prueba', () => {
		//console.log(createRobot([2,3], "North").getPosition())
		expect(createRobot([7,3], "North").instructions("RAALAL")).toMatchObject({ coordinates: [9, 4], orientation:"West" });
	});
});