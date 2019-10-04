import { Sequelize } from "sequelize";

const sequelize = new Sequelize({ dialect: 'sqlite' });

sequelize.import('./models/User');

export default sequelize
