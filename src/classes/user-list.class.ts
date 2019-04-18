import { User } from "./user.class";

export class UserList {
  private static _instance: UserList;
  private list: User[] = [];

  constructor() { }

  public static get instance() {
    return this._instance || (this._instance = new this());
  }

  public add(user: User): User {
    this.list.push(user);
    console.log(this.list);
    return user;
  }

  public get(): User[] {
    return this.list;
  }

  public getUserById(id: string): (User | undefined) {
    return this.list.find(user => user.id === id);
  }

  public getUserOnRoom(room: string): User[] {
    return this.list.filter(x => x.room === room);
  }

  public updateUser(id: string, name: string) {
    this.list.map(x => {
      if (x.id === id) { x.name = name; }
    });
    console.log(this.list);
  }

  public deleteUser(id: string): (User | undefined) {
    const user = this.getUserById(id);
    this.list = this.list.filter(x => x.id !== id);
    return user;
  }

}