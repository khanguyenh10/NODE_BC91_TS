import { sequelize } from './connect';
import Location from './location';
import Room from './room';
import RoomOrder from './roomOrder';
import Comment from './comment';
import User from './user';
const models = { Location, Room, RoomOrder, Comment, User };

console.log(models)
Location.associate(models);
Room.associate(models);
RoomOrder.associate(models);
Comment.associate(models);
User.associate(models);

export { sequelize, Location, Room, RoomOrder, Comment, User };