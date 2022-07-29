import userProfileService from "../services/userProfile.service";

const userProfileController = (req, res) => {
  const currentUser = userProfileService(req.uuid);

  return res.status(200).json(currentUser);
};

export default userProfileController;
