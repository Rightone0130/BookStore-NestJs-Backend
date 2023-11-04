import {  DataSource, DataSourceOptions} from 'typeorm'

export const dataSourceOptions: DataSourceOptions = {

      type: 'sqlite',
      database: ':memory:',
      entities: ['dist/**/*.entity.js'],
      synchronize: true
}

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;