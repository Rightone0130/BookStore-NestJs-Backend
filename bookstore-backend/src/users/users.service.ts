import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private usersRepository: Repository<User>){}



  create(createUserInput: CreateUserInput) {
    
    const newUser = this.usersRepository.create(createUserInput)
     return this.usersRepository.save(newUser);
  }

  findAll() {
    return this.usersRepository.find();
  }

  findOne(id: number) {
    return this.usersRepository.findOneOrFail( {where: { id } });
                  

  }

    async findByUserName(username: string, password: string) {
    return this.usersRepository.findOne({
      where: { username }
    });
  }
  


  async update(id: number, updateUserInput: UpdateUserInput) {
    

    const users = await this.usersRepository.findOne({where: { id } })
     return this.usersRepository.save({ ...users, updateUserInput});
  }
  

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
