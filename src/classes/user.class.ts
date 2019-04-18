export class User {
  constructor(public id: string,
              public name: string = 'No name',
              public room: string = 'No room') {
    this.id = id;
    this.name = name;
    this.room = room;
  }
}