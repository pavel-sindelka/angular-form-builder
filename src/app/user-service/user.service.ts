import { Injectable } from '@angular/core';

export interface IUser {
  id?: string;
  firstName: string;
  lastName: string;
  ageCategory: string;
  sex: string;
  favoriteActivity: string;
}

@Injectable()
export class UserService {
  private users: IUser[] = [];

  constructor() {}

  getUsers() {
    return this.users;
  }

  saveUser(user: IUser) {
    if (user.id === '') {
      user.id = (this.users.length + 1).toString();
      this.users.push(user);
    } else {
      const userIndex = this.users.findIndex(u => u.id === user.id);
      this.users[userIndex] = user;
    }
  }

  getUser(id: string) {
    return this.users.find(user => user.id === id);
  }

  sexTransform(id) {
    return this.getSexes().find(sex => sex.id === id).name;
  }

  ageCategoryTransform(id) {
    return this.getAgeCategories().find(category => category.id === id).name;
  }

  getSexes() {
    return [
      {
        id: '1',
        name: 'Man'
      },
      {
        id: '2',
        name: 'Woman'
      }
    ];
  }

  getAgeCategories() {
    return [
      {
        id: '1',
        name: 'Under 18',
        activities: ['Computer games', 'Sport', 'Reading', 'Walk', 'Party']
      },
      {
        id: '2',
        name: '18 - 27 years',
        activities: ['Study', 'Serials', 'Travel', 'Driving a car', 'Concerts']
      },
      {
        id: '3',
        name: '28 - 45 years',
        activities: [
          'Employment',
          'Cycling',
          'Excursions with children',
          'Beer with friends',
          'Walking the dog'
        ]
      },
      {
        id: '4',
        name: 'Over 45 years',
        activities: [
          'Gardening',
          'Walking the dog',
          'Beer with friends',
          'Watching TV',
          'House maintenance'
        ]
      }
    ];
  }
}
