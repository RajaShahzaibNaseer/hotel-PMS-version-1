import supabase from "../utils/supabase.js";

class BaseController {
    constructor (tableName)
    {
        this.tableName = tableName;
    }

    async create(request , result)
    {
        const {data,error} = await supabase.from(this.tableName).insert(request.body);
        if (error) return result.json({error : error.message});
        result.status(201).json(data);
    }

    async getAll(request , result) {
        const {data, error} = await supabase.from(this.tableName).select("*");
        if (error) return result.json({error : error.message});
        result.status(201).json(data);
    }

    async getOne(request, result) {
        const {data, error} = await supabase.from(this.tableName).select("*").eq("id",request.params.id).single();
        if (error) return result.json({error : error.message});
        result.status(201).json(data);
    }

    async update(request , result)
    {
        const {data,error} = await supabase.from(this.tableName).update(request.body).eq("id",request.params.id).select();
        if (error) return result.json({error : error.message});
        result.status(201).json(data);
    }

    async delete(request, result)
    {
        const {data, error} = await supabase.from(this.tableName).delete().eq("id",request.params.id);
        if (error) return result.json({error : error.message});
        result.status(201).json(data);
    }
}

export default BaseController;