import User from './../models/User';

class UserController {
    public async create(user: object): Promise<object> {
        const newUser = new User(user);
        await newUser.save();
        return { error: false, detail: 'se creo un usuario' };
    }

    public async toList(): Promise<object> {
        const list = await User.find();
        return list;
    }

    public async get(id: string): Promise<object> {
        const user = await User.findById(id);
        return user;
    }

    public async delete(id: string): Promise<object> {
        await User.findByIdAndDelete(id);
        const data = { error: false, detail: 'se elimino un usuario' };
        return data;
    }

    public async update(id: string, user: object): Promise<object> {
        await User.findByIdAndUpdate(id, user);
        const data = {error: false, detail: 'se actualizo el usuario'};
        return data;
    }
}

export default UserController;