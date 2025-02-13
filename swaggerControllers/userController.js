/**
 *  @swagger
 *  tags:
 *      - name: Users
 *        description: Operations related to user management
 *
 * /users:
 *  get:
 *      tags:
 *          - Users
 *      summary: User List
 *      description: Fetches the list of all users from the database.
 *      responses:
 *            200:
 *                description: Successfully fetched the list of users.
 *                content:
 *                  application/json:
 *                    schema:
 *                      type: object
 *                      properties:
 *                        message:
 *                          type: string
 *                          example: Users fetched successfully
 *                        success:
 *                          type: boolean
 *                          example: true
 *                        data:
 *                          type: array
 *                          items:
 *                            type: object
 *                            properties:
 *                              _id:
 *                                type: string
 *                              name:
 *                                type: string
 *                              email:
 *                                type: string
 *                              password:
 *                                type: string
 *                              user_type:
 *                                type: string
 *                              isActive:
 *            500:
 *                description: Error fetching the list of users.
 *                content:
 *                  application/json:
 *                    schema:
 *                      type: object
 *                      properties:
 *                        message:
 *                          type: string
 *                          example: Error fetching users
 *                        success:
 *                          type: boolean
 *                          example: false
 */
