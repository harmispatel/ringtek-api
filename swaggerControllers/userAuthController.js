/**
 * @swagger
 * /auth-users-list:
 *   get:
 *     summary: Get the list of authenticated users
 *     description: Fetches the list of all authenticated users from the database.
 *     responses:
 *       200:
 *         description: Successfully fetched the list of authenticated users.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Auth users fetched successfully
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                       username:
 *                         type: string
 *                       email:
 *                         type: string
 *       500:
 *         description: Error fetching the list of authenticated users.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Error fetching auth users
 *                 success:
 *                   type: boolean
 *                   example: false
 */
