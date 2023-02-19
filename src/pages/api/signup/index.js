import { errorHandler, responseHandler, validateAllOnce } from "@/utils/common";
import User from '../../../../models/User';
import { connect } from '../../../../lib/mongodb';
import bcrypt from 'bcryptjs'

export default async function handler (req, res) {

	try {
		const { username, email, password, phoneNumber } = JSON.parse(req.body)
		console.log("hello:", req.body)
		validateAllOnce(JSON.parse(req.body));

		await connect();
		// const hashPassword = await bcrypt.hash(req.body.password, 12)
		const user = new User({ username, email, password, phoneNumber });
		await user.save();
		if (user) {
			const userDoc = user._doc;
			console.log(userDoc)
			// delete userDoc.password
			res.status(201).json({
				isLoggedIn: true,
				hasError: false,
				user: user
			})
		}
		else {
			errorHandler('Something went wrong', res)
		}
	} catch (error) {
		console.log(error)
		errorHandler(error, res)
	}
}

