import { StatementModel } from "../models/statement_model.js";

// function to store data in the database 
export const addStatement = async (req, res) => {
try {
    console.log("request", req.body)
    const addData = await StatementModel.create(req.body);
    res.status(200).send(addData);

} catch (error) {
    console.log(error)
}
};

// function to get all data in the database
export const allStatements = async (req, res) => {
    try {
        console.log('request', req.body)
        const getStatements = await StatementModel.find();
        res.status(200).send(getStatements)
        
    } catch (error) {
        console.log(error)
        
    }
};

//  function to get one statement
export const getStatement =(req, res) => {
    res.json(`statement with Id ${req.params.id} found`);
}

export const updateStatement = async (req, res) => {
    try {
        const status = req.body.caseStatus
        console.log("request", status)
        const updateData = await StatementModel.findByIdAndUpdate(req.params.id, {caseStatus: status});
        res.status(200).send(updateData);
    
    } catch (error) {
        console.log(error)
    }
    };

    // Delete Statement
    export const deleteStatement = async (req, res) => {
        try {
            const deletedStatement = await StatementModel.findByIdAndDelete(req.params.id);
            res.status(200).send(deletedStatement)
        } catch (error) {
            console.log(error)
            
        }
    }