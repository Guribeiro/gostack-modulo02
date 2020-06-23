import User from '../models/User';

class UserController {
    async store(request, response) {
        const userExists = await User.findOne({
            where: {
                email: request.body.email,
            },
        });

        if (userExists) {
            return response
                .status(400)
                .json({ error: 'email already exist in our database' });
        }

        const { id, name, email, provider } = await User.create(request.body);

        return response.json({
            id,
            name,
            email,
            provider,
        });
    }

    async update(reques, response) {
        return response.json({ message: 'working  until now' });
    }
}

export default new UserController();
