import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private users = [];

  createUser(name: string) {
    const user = { id: this.users.length + 1, name };
    this.users.push(user);
    return user;
  }

  getUsers() {
    return this.users;
  }
}
