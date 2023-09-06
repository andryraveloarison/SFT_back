class MainError extends Error{

    constructor(errorMessage, errorType=''){
        super()
       
        this.name = this.constructor.name
        this.message = errorMessage
 
        switch(this.constructor.name){
            case 'AuthenticationError':
                if(errorType == 0){
                    this.status = 400
                }else if(errorType == 1){
                    this.status = 404
                }else{
                    this.status = 401
                }
                break
            case 'UserError':
                if(errorType == 0){
                    this.status = 404
                }else{
                    this.status = 409
                }
                break
            case 'PublicationError':
                if(errorType == 0){
                    this.status = 404
                }else{
                    this.status = 409
                }
                break
            case 'RequestError':
                this.status = 400
                break
            default:
                console.log('No handler for that')
        }

    }
}

class AuthenticationError extends MainError{}
class UserError extends MainError{}
class PublicationError extends MainError{}
class RequestError extends MainError{}
class StatuError extends MainError{}

module.exports = { MainError, AuthenticationError, UserError, PublicationError, RequestError, StatuError}