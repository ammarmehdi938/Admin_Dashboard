import { Box } from "@mui/material";
import WithLayout from "../components/layout";
import SettingHeader from "../components/PreferenceComponent/settingHeader";
import ChangeAvatar from "../components/PreferenceComponent/changeAvatar";
import ProfileInformationForm from "../components/PreferenceComponent/profileInformationForm";
import Notification from "../components/PreferenceComponent/notification";
import Security from "../components/PreferenceComponent/security";
import DangerZone from "../components/PreferenceComponent/dangerZore";

const Preference = () => {
  return (
    <Box sx={{ ml: "50px" }}>
      <Box sx={{ mt: "50px" }}>
        <SettingHeader />
      </Box>
      <Box sx={{ mt: "50px", backgroundColor: "#1D1933" }}>
        <ChangeAvatar />
        <ProfileInformationForm />
      </Box>
      <Box sx={{ mt: "50px" }}>
        <Notification />
      </Box>
      <Box sx={{ mt: "50px" }}>
        <Security />
      </Box>
      <Box sx={{ mt: "50px" }}>
        <DangerZone />
      </Box>
    </Box>
  );
};
export default WithLayout(Preference);
