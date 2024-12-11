import {NextFunction, Request, Response} from 'express'
import {object, z} from 'zod';

class ProductController{
    async index(request: Request, response: Response, next: NextFunction){
        try{
            return response.json({message: "OK"});
        } catch(error){
            next(error);
        }
    }

    async create(request: Request, response: Response, next: NextFunction){
        try{

            const bodySchema = z.object({
                name: z.string({required_error: "nome é obrigátorio"}).trim().min(6),
                price: z.number().gt(0, {message: "valor deve ser maior do que zero"} )
            })

            const {name, price} = bodySchema.parse(request.body);

            return response.status(201).json({ name, price})
        }
        catch(error){
            next(error);

        }
    }
}

export {ProductController}