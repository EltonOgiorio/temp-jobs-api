const swaggerDocs = {
    openapi: "3.0.3",
    info: {
        title: "Jobs API",
        description: "A simple Jobs API",
        version: "1.0.0",
        contact: {
            name: "Elton",
            email: "elton.uyi@gmail.com"
        }, 
    },
    servers:[
        {
            url: "http://localhost:3000/api/v1",
            description: "Localhost url", 
        },
        {
            url: "https://jobz-api-99-elton.onrender.com/api/v1",
            description: "Production url", 
        },
    ],
    paths: {
        "/auth/register": {
            post: {
                tags: [
                    "Auth"
                ],
                summary: "Register User",
                operationId: "RegisterUser",
                parameters: [],
                requestBody: {
                    description: '',
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/RegisterUserRequest"
                            },
                            example: {
                                name: "Bob",
                                email: "bob@gmail.com",
                                password: "secret",
                            },
                        },
                    },
                    required: true,
                },
                responses: {
                    201: {
                        description: '',
                        headers: {},
                    },
                },
                deprecated: false,
                security: [],
            }
        },
        "/auth/login": {
            post: {
                tags: [
                    "Auth"
                ],
                summary: "Login User",
                operationId: "LoginUser",
                parameters: [],
                requestBody: {
                    description: '',
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/LoginUserRequest"
                            },
                            example: {
                                email: "bob@gmail.com",
                                password: "secret",
                           },
                        },
                    },
                    required: true,
                },
                responses: {
                    200: {
                        description: '',
                        headers: {},
                    },
                },
                deprecated: false,
                security: [],
            },
        },
        "/jobs": {
            post: {
                tags: [
                    "Jobs"
                ],
                summary: "Create Job",
                operationId: "CreateJob",
                parameters: [],
                requestBody: {
                    description: '',
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/CreateJobRequest"
                            },
                            example: {
                                company: "Google",
                                position: "Frontend Developer",
                            },
                        },
                    },
                    required: true,
                },
                responses: {
                    201: {
                        description: '',
                        headers: {},
                    },
                },
                deprecated: false,
            },
            get: {
                tags: [
                    "Jobs"
                ],
                summary: "Get All Jobs",
                operationId: "GetAllJobs",
                parameters: [],
                responses: {
                    200: {
                        description: '',
                        headers: {},
                    },
                deprecated: false,
                },
            },
        },
        "/jobs/{id}": {
                get: {
                    tags: [
                        "Jobs"
                    ],
                    summary: "Get Single Job",
                    operationId: "GetSingleJob",
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            schema:{
                                type: "string",
                            },
                            required: true,
                            description: "The Job ID"
                        },
                    ],
                    responses: {
                        200: {
                            description: '',
                            headers: {},
                        },
                    deprecated: false,
                    },
                },
                patch: {
                    tags: [
                        "Jobs"
                    ],
                    summary: "Update Job",
                    operationId: "UpdateJob",
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            schema:{
                                type: "string",
                            },
                            required: true,
                            description: "The Job ID"
                        },
                    ],
                    requestBody: {
                        description: '',
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/UpdateJobRequest"
                                },
                                example: {
                                    company: "Google",
                                    position: "Frontend Developer",
                                },
                            },
                        },
                        required: true,
                    },
                    responses: {
                        200: {
                            description: '',
                            headers: {},
                        },
                    },
                    deprecated: false,
                },
                delete: {
                    tags: [
                        "Jobs"
                    ],
                    summary: "Delete Job",
                    operationId: "DeleteJob",
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            schema:{
                                type: "string",
                            },
                            required: true,
                            description: "The Job ID"
                        },
                    ],
                    responses: {
                        200: {
                            description: '',
                            headers: {},
                        },
                    deprecated: false,
                    },
                }
            },
    },     
    components: {
        schemas: {
          RegisterUserRequest: {
            title: "RegisterUserRequest",
            required: [
              "name",
              "email",
              "password",
            ],
            type: "object",
            properties: {
              name: {
                type: "string",
              },
              email: {
                type: "string",
              },
              password: {
                type: "string",
              },
            },
           example: {
            name: "Bob",
            email: "bob@gmail.com",
            password: "secret",
           }
          },
          LoginUserRequest: {
            title: "LoginUserRequest",
            required: [
              "email",
              "password",
            ],
            type: "object",
            properties: {
              email: {
                type: "string",
              },
              password: {
                type: "string",
              },
            },
            example: {
              email: "bob@gmail.com",
              password: "secret",
            },
          },
          CreateJobRequest: {
            title: "CreateJobRequest",
            required: [
              "company",
              "position",
            ],
            type: "object",
            properties: {
              company: {
                type: "string",
              },
              position: {
                type: "string",
              },
            },
            example: {
              company: "Google",
              position: "Frontend Developer",
            },
          },
          UpdateJobRequest: {
            title: "UpdateJobRequest",
            required: [
              "company",
              "position"
            ],
            type: "object",
            properties: {
              company: {
                type: "string",
              },
              position: {
                type: "string",
              },
            },
            example: {
              company: "Google",
              position: "Frontend Developer",
            },
          },
        },
        securitySchemes: {
          httpBearer: {
            type: "http",
            scheme: "bearer"
          },
        },
    },
    security: [
        {
          httpBearer: '[]',
        } 
    ],
    tags: [
        {
            name: "Auth"
        },
        {
            name: "Jobs"
        },
    ],

}
    


module.exports = swaggerDocs