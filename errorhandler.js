const errorHandler = (error, request, response, next) => {
    console.log(error);

    if (error.name == 'CastError') {
        return response
            .status(400)
            .send({ error: 'Malforamtted id' })
    }
    next(error)
}

