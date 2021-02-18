import faker from 'faker';

export const getProcesses = (count = 10) => {
  const processes = [];
  // add Processes
  for (let index = 0; index < count; index += 1) {
    const process = {
      uuid: faker.random.uuid(),
      isCompleted: false,
      location: {
        id: index.toString(),
        name: faker.company.companyName(),
        contactPerson: {
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          phone: faker.phone.phoneNumber(),
        },
      },
      createdAt: faker.date.past(),
    };
    processes.push(process);
  }
  return Promise.resolve(processes);
};

export const getUsers = (locationId, count = 20) => {
  if (!locationId) {
    return Promise.reject('locationId required');
  }
  const users = [];
  // add Users
  for (let index = 0; index < count; index += 1) {
    const user = {
      uuid: faker.random.uuid(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      phone: faker.phone.phoneNumber(),
      address: {
        streetName: faker.address.streetName(),
        streetNr: faker.random.number(),
        zipCode: faker.address.zipCode(),
        city: faker.address.city(),
      },
      locationId,
    };
    users.push(user);
  }
  return Promise.resolve(users);
};
